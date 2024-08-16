import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run main-data:serve:development',
        production: 'nx run main-data:serve:production',
      },
      ciWebServerCommand: 'nx run main-data:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
