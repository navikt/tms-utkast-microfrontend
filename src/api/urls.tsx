const isProduction = window.location.href.includes("www.nav.no");
const isDevelopment = window.location.href.includes("www.intern.dev.nav.no");

export const getEnvironment = () => {
  if (isDevelopment) {
    return "development";
  }
  if (isProduction) {
    return "production";
  }
  return "local";
};

type EnvUrl = { development: string; production: string; local: string };

const MIN_SIDE_PROXY_URL = {
  local: "http://localhost:3000/tms-min-side-proxy",
  development: "https://www.intern.dev.nav.no/tms-min-side-proxy",
  production: "https://www.nav.no/tms-min-side-proxy",
};

const BASE_URL: EnvUrl = {
  local: "https://www.dev.nav.no/minside/",
  development: "https://www.dev.nav.no/minside/",
  production: "https://www.nav.no/minside/",
};
export const minSideProxyUrl = MIN_SIDE_PROXY_URL[getEnvironment()];
export const utkastApiUrl = `${minSideProxyUrl}/utkast/utkast`;
export const digisosApiUrl = `${minSideProxyUrl}/utkast/utkast/digisos`;
export const baseUrl = BASE_URL[getEnvironment()];
