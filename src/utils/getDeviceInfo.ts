import Bowser from 'bowser';

export interface DeviceInfo {
  userAgent: string;
  platform: string;
  browser: string;
  os: string;
  deviceType: string;
  language: string;
  timezone: string;
  screen: string;
  windowSize: string;
  referrer: string;
}

export function getDeviceInfo(): DeviceInfo {
  const ua = navigator.userAgent;
  const browser = Bowser.getParser(ua);
  console.log('Browser:', browser);

  const browserInfo = browser.getBrowser();
  const osInfo = browser.getOS();
  const platformInfo = browser.getPlatform();

  return {
    userAgent: ua,
    platform: navigator.platform,
    browser: `${browserInfo.name} ${browserInfo.version}`,
    os: `${osInfo.name} ${osInfo.version}`,
    deviceType: platformInfo.type || 'desktop',
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: `${screen.width}x${screen.height}`,
    windowSize: `${window.innerWidth}x${window.innerHeight}`,
    referrer: document.referrer,
  };
}
