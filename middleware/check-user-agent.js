import UAParser from 'ua-parser-js';

const parser = new UAParser();

export default defineNuxtRouteMiddleware(() => {
  const { isIos } = useDevice();
  const osVersion = parser.getOS().version;
  const browserName = parser.getBrowser().name;
  const browserVersion = parser.getBrowser().version;

  if (isIos && osVersion >= 12 && browserName?.toLowerCase().includes('safari') && browserVersion >= 12) {
    //
  }
});
