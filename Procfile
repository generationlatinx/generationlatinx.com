web: cat >> ~/src/services/config.js << EOF
          export const airtableConfig = {
          endpointUrl: 'https://api.airtable.com',
          readonlyKey: '${POI_APP_READONLY_KEY}',
          workspaceBios: '${POI_APP_WORKSPACE_BIOS}',
          workspaceGigs: '${POI_APP_WORKSPACE_GIGS}'
          }
          EOF
          && yarn run postinstall && yarn run serve
