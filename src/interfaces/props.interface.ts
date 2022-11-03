export interface Props {
  props: PropsClass;
  page: string;
  query: Query;
  buildId: string;
  assetPrefix: string;
  runtimeConfig: RuntimeConfig;
  isFallback: boolean;
  dynamicIds: string[];
  customServer: boolean;
  gip: boolean;
  appGip: boolean;
  head: Array<Array<HeadClass | HeadEnum>>;
}

export interface HeadClass {
  name?: string;
  content?: string;
  charSet?: string;
  children?: string;
  property?: string;
  rel?: string;
  href?: string;
  type?: string;
  dangerouslySetInnerHTML?: DangerouslySetInnerHTML;
}

export interface DangerouslySetInnerHTML {
  __html: string;
}

export enum HeadEnum {
  Link = 'link',
  Meta = 'meta',
  Script = 'script',
  Title = 'title',
}

export interface PropsClass {
  isServer: boolean;
  initialState: InitialState;
  initialProps: InitialProps;
}

export interface InitialProps {
  pageProps: PageProps;
  token: string;
  isSupport: boolean;
  pathname: string;
}

export interface PageProps {
  OsirisAdviewEndpoint: string;
  isServer: boolean;
  error: boolean;
}

export interface InitialState {
  adDetails: AdDetails;
  adFavs: AdFavs;
  ui: UI;
  user: User;
  me: Me;
  store: InitialStateStore;
  adListing: AdListing;
  filter: InitialStateFilter;
}

export interface AdDetails {
  byID: AdDetailsByID;
  allIDs: string[];
}

export interface AdDetailsByID {
  '98858452': The98858452;
}

export interface The98858452 {
  id: string;
  type: string;
  attributes: The98858452_Attributes;
  links: Links;
  relationships: Relationships;
}

export interface The98858452_Attributes {
  adSellerType: string;
  adTypeName: string;
  adType: string;
  body: string;
  categoryId: string;
  categoryNameAndAdTypeLabel: string;
  categoryName: string;
  companyAd: string;
  companyRoc: string;
  certified: string;
  adId: string;
  locationLabel: string;
  name: string;
  oldPrice: string;
  phone: string;
  price: string;
  publishedDatetime: string;
  regionId: string;
  regionName: string;
  showPriceMarkdown: number;
  subject: string;
  subregionId: string;
  subregionName: string;
  categoryParams: CategoryParam[];
  categoryParamsAdViewOrder: string[];
  image: string[];
  mcdParams: null;
  offers: Inspection;
  inspection: Inspection;
  inspectionV2: InspectionV2;
  carWarranty: CarWarranty;
}

export interface CarWarranty {
  enabled: boolean;
  carWarrantyLink: ByID;
  carWarrantyBadge: ByID;
  form: Form;
}

export interface ByID {}

export interface Form {
  section1: ByID;
  section2: Section2;
}

export interface Section2 {
  submitButton: ByID;
}

export interface CategoryParam {
  realValue: string;
  id: string;
  value: string;
  label: string;
}

export interface Inspection {
  enabled: boolean;
}

export interface InspectionV2 {
  enabled: boolean;
  inspectionLink: ByID;
  inspectionBadge: ByID;
}

export interface Links {
  self: string;
  hash: string;
}

export interface Relationships {
  user: UserClass;
  store: UserClass;
}

export interface UserClass {
  data: Data;
}

export interface Data {
  id: string;
  type: string;
}

export interface AdFavs {
  byID: ByID;
  allIDs: any[];
  errorByID: ByID;
}

export interface AdListing {
  byID: ByID;
  allIDs: any[];
  meta: ByID;
  fetching: boolean;
  homepageSearching: boolean;
}

export interface InitialStateFilter {
  commonFilters: ByID;
  filterOptions: ByID;
  selectedFilters: ByID;
  category: FilterCategory;
  location: Location;
}

export interface FilterCategory {
  type: string;
  id: string;
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  category: AttributesCategory;
}

export interface AttributesCategory {
  filter: ByID;
  values: any[];
}

export interface Location {
  type: string;
  id: string;
  attributes: LocationAttributes;
}

export interface LocationAttributes {
  region: Region;
  subarea: Region;
}

export interface Region {
  filter: RegionFilter;
  values: any[];
}

export interface RegionFilter {
  key: string;
  label: string;
  type: string;
  style: string;
  parent?: string;
}

export interface Me {
  commonDetails: CommonDetails;
  additionalDetails: ByID;
}

export interface CommonDetails {
  isLogin: boolean;
  mudahUA: string;
  mudahNAT: string;
  userID: string;
  uuid: string;
  userAgent: UserAgent;
  email: string;
  userType: string;
}

export interface UserAgent {
  ua: string;
  browser: Browser;
  engine: Engine;
  os: Engine;
  device: ByID;
  cpu: ByID;
}

export interface Browser {
  name: string;
  version: string;
  major: string;
}

export interface Engine {
  name: string;
  version: string;
}

export interface InitialStateStore {
  byID: StoreByID;
}

export interface StoreByID {
  '1318075': The1318075;
}

export interface The1318075 {
  id: string;
  type: string;
  attributes: The1318075_Attributes;
}

export interface The1318075_Attributes {
  storeVerified: string;
  cCompanyName: string;
  cLogo: string;
  cCat: string;
  cStartdate: Date;
  cUrlPath: string;
}

export interface UI {
  adView: AdView;
  loading: boolean;
}

export interface AdView {
  currentAdID: string;
  currentListID: string;
  hash: string;
}

export interface User {
  byID: UserByID;
}

export interface UserByID {
  '15848173': The15848173;
}

export interface The15848173 {
  id: string;
  type: string;
  attributes: The15848173_Attributes;
}

export interface The15848173_Attributes {
  userAccountId: string;
  chatEnable: string;
  avatarUrl: string;
  profilePath: string;
}

export interface Query {
  region: string;
  type: string;
  o: number;
  ad_id: string;
}

export interface RuntimeConfig {
  platform: string;
}
