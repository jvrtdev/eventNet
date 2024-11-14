import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'eventNet',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    androidScheme: 'eventNet',
  },
};

export default config;
