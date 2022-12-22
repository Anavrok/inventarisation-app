import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devdactic.angular',
  appName: 'inventarisation-app',
  webDir: 'dist/inventarisation-app',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.189:4200',
    cleartext: true
  }
};

export default config;
