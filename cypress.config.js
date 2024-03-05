const { defineConfig } = require("cypress");
const {verifyDownloadTasks} = require("cy-verify-downloads");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  projectId: "j7jrit",
  
  //
  e2e: {
    pageLoadTimeout:90000,
    video:false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    testIsolation: false,
    experimentalShadowDomSupport: true,
    experimentalStudio: true,
    experimentalMemoryManagement: true,
    setupNodeEvents(on, config) {
      on("task",(verifyDownloadTasks));
      allureWriter(on, config);
      on('task', {
        screenshot({ name }) {
          // Envuelve la captura de pantalla en una función para evitar problemas
          const captureScreenshot = () => cy.screenshot(name, { capture: 'runner' });
          return captureScreenshot();
        },
      });
      return config;

      // implement node event listeners here
    },
  },
});
