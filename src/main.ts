require('source-map-support').install();
import { Props } from '@interfaces/props.interface';
import { Prisma } from '@prisma/client';
import { repositories } from '@repositories/index.repository';
import axios from 'axios';
import { load } from 'cheerio';
import XLSX from 'xlsx';

const scrape = async (page = 1) => {
  return new Promise(async (resolve, reject) => {
    console.log(`Scraping on page ${page}`);
    const response = await axios.get('https://www.mudah.my/sabah/for-sale', {
      params: {
        o: page,
      },
      responseType: 'document',
    });

    const $ = load(response.data);
    const elements = $('div[data-testid*=listing-ad-item-]');

    console.log(`Found ${elements.length} items in listing on page ${page}`);
    for (const element of elements) {
      const [first] = $(element).children();
      const [c] = $(first).children();
      const link = $(c).find('a').attr('href');

      const view = await axios.get(link, {
        responseType: 'document',
      });

      const $$ = load(view.data);

      const script = $$('script[id=__NEXT_DATA__]').html();
      const parsed: Props = JSON.parse(script);

      if (parsed?.props?.initialState?.adDetails?.byID) {
        const [ID] = Object.keys(parsed?.props?.initialState?.adDetails?.byID);
        const details = parsed?.props?.initialState?.adDetails?.byID[ID];

        if (details?.attributes) {
          const { name, phone, locationLabel, subject } = details?.attributes;

          if (phone) {
            try {
              const existing = await repositories.user.findFirst({
                where: {
                  phone,
                },
              });

              if (!existing) {
                await repositories.user.create({
                  data: {
                    phone,
                    location: locationLabel,
                    name: name,
                    subject,
                  } as Prisma.UserCreateInput,
                });
                console.log('New phone added!');
              } else {
                console.log('Skipping added phone...');
              }
            } catch (error) {
              console.error('Something went wrong', error);
            }
          }
        }
      } else {
        console.log('Information Not Found. Skipping...');
      }
    }

    const hasNextPage = elements.length >= 40;

    if (hasNextPage) {
      const nextPage = page + 1;
      console.log(`Has next page... Continuing to ${nextPage}`);
      resolve(scrape(nextPage));
    }
  });
};

async function exportExcel() {
  return new Promise<void>(async (resolve, reject) => {
    const data = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages) {
      const users = await repositories.user.findMany({
        skip: (page - 1) * 500,
        take: 500,
      });

      for (const user of users) {
        data.push({
          ID: user.ID,
          Name: user.name,
          Subject: user.subject,
          Location: user.location,
          Phone: user.phone,
        });
      }

      hasMorePages = users.length >= 500;
      page += 1;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet['!cols'] = [
      {
        width: 20,
      },
      {
        width: 20,
      },
      {
        width: 20,
      },
      {
        width: 20,
      },
      {
        width: 20,
      },
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'SheetJS');
    await XLSX.writeFile(workbook, './Data.xlsx');
    resolve();
  });
}

async function main() {
  await scrape(1);
  await exportExcel();
  console.info('Done');
}

main();
