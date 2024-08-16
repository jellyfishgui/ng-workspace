import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main-data',
  exposes: {
    './Routes': 'apps/main-data/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
