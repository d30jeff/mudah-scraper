### Mudah Scraper

Mudah.my web scraper to retrieve and store name, product, and phone number information.

Feel free to make modification to the code based on the available type in `./src/interfaces/props.interface.ts`

Currently it's only processing all the ads in Sabah, but feel free to change the region in the official website, click search and paste the browser URL in the axios get method in `scrape` function.

Example:

For entire Malaysia

- `https://www.mudah.my/malaysia/for-sale`

For Kuala Lumpur

- `https://www.mudah.my/kuala-lumpur/for-sale`

#### Creating the env file

`.env.example` to `.env`

_Please update the values where needed_

#### Create docker compose file

`docker-compose.yml.example` to `docker-compose.yml`

_Please update the values where needed_

Run `docker compose up -d`

#### Syncing the database schema

`yarn prisma db push`

you may also need to run

`yarn prisma generate` to generate the typing

#### Running the application

`yarn main:dev`
