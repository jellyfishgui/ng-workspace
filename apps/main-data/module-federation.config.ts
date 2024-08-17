import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'main-data',
  exposes: {
    './Module': 'apps/main-data/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
