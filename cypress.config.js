const { defineConfig } = require('cypress')
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = defineConfig({
  video:true,
  screenshotOnRunFailure:true,
  reporter:'cypress-mochawesome-reporter', 
  reporterOptions:{
    charts:true,
    overwrite:false,
    embeddedScreenshots:true
  },
    env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow"
    },
  },
  chromeLaunchOptions:{
    args:['--use-fake-ui-for-media-stream'],
      prefs:{
    'profile.default_content_setting_values.geolocation':1, 
      },
    },
    chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
    },
  },
});
