export const routes = Object.freeze({
  BASE_URL: "/",
  LATEST_NEWS: "/latest-news",
  POLITICS: "/politics",
  AFRICA: "/africa",
  GHANA: "/africa/ghana",
  SOUTH_AFRICA: "/africa/south-africa",
  MOROCCO: "/africa/morocco",
  ETHIOPIA: "/africa/ethiopia",
  KENYA: "/africa/kenya",
  EGYPT: "/africa/egypt",
  ALGERIA: "/africa/algeria",
  SPORTS: "/sports",
  CHAMPIONS_LEAGUE: "/sports/champions-league",
  PREMIER_LEAGUE: "/sports/premier-league",
  LA_LIGA: "/sports/la-liga",
  SERIE_A: "/sports/serie-a",
  LEAGUE_1: "/sports/league-1",
  BUNDESLIGA: "/sports/bundesliga",
  SAUDI_PRO_LEAGUE: "/sports/saudi-pro-league",
  MLS: "/sports/mls",
  ECONOMY: "/economy",
  ENERGY_AND_POWER_INDUSTRY: "/economy/energy-and-power-industry",
  BUSINESS: "/economy/business",
  CRYPTO: "/economy/crypto",
  GAMING: "/economy/gaming",
  FX: "/economy/fx",
  TECH_NEWS: "/economy/tech",
  DIASPORA: "/disapora",
  ENTERTAINMENT: "/entertainment",
  BB_NAIJA: "/entertainment/bb-naija",
  NAIJA: "/naija",
  ABOUT: "/about",
  ADVERTISE: "/advertise",
  HELP_CENTER: "/help-center",
  PRIVACT_POLICY: "/privacy-policy",
  SEARCH: "/search",
});

export type headerRoutesChildrenTypes = {
  title: string;
  route: string;
};

type headerRoutesTypes = {
  title: string;
  route: string;
  children: headerRoutesChildrenTypes[] | null;
  isActive?: boolean;
}[];

export const headerRoutes: headerRoutesTypes = [
  {
    title: "Home",
    route: routes.BASE_URL,
    children: null,
    isActive: false,
  },
  {
    title: "Latest News",
    route: routes.LATEST_NEWS,
    children: null,
    isActive: false,
  },
  {
    title: "Politics",
    route: routes.POLITICS,
    children: null,
    isActive: false,
  },

  {
    title: "Africa",
    route: routes.AFRICA,
    isActive: false,
    children: [
      {
        title: "Ghana",
        route: routes.GHANA,
      },
      {
        title: "South Africa",
        route: routes.SOUTH_AFRICA,
      },
      {
        title: "Morocco",
        route: routes.MOROCCO,
      },

      {
        title: "Ethiopia",
        route: routes.ETHIOPIA,
      },
      {
        title: "Kenya",
        route: routes.KENYA,
      },
      {
        title: "Egypt",
        route: routes.EGYPT,
      },
      {
        title: "Algeria",
        route: routes.ALGERIA,
      },
    ],
  },
  {
    title: "Economy",
    route: routes.ECONOMY,
    isActive: false,
    children: [
      {
        title: "Energy & Power inductry",
        route: routes.ENERGY_AND_POWER_INDUSTRY,
      },
      {
        title: "Business",
        route: routes.BUSINESS,
      },
      {
        title: "Crypto",
        route: routes.CRYPTO,
      },

      {
        title: "Gaming",
        route: routes.GAMING,
      },
      {
        title: "FX",
        route: routes.FX,
      },
      {
        title: "Tech News",
        route: routes.TECH_NEWS,
      },
    ],
  },
  {
    title: "Sports",
    route: routes.SPORTS,
    children: null,
    isActive: false,
  },
  {
    title: "Disapora",
    route: routes.DIASPORA,
    children: null,
    isActive: false,
  },
  {
    title: "Entertainment",
    route: routes.ENTERTAINMENT,
    children: [
      {
        title: "BB Naija",
        route: routes.BB_NAIJA,
      },
    ],
  },
  {
    title: "Naija",
    route: routes.NAIJA,
    children: null,
  },
];

export const footerRoutes = [
  {
    title: "Company",
    routes: [
      {
        title: "Home",
        route: routes.BASE_URL,
      },
      {
        title: "About",
        route: routes.ABOUT,
      },
      {
        title: "Advertise",
        route: routes.ADVERTISE,
      },
      {
        title: "Help Center",
        route: routes.HELP_CENTER,
      },
      {
        title: "Privacy Policy",
        route: routes.PRIVACT_POLICY,
      },
    ],
  },
];
