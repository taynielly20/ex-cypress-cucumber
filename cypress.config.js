const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
 // Isso é necessário para que o pré-processador seja capaz de gerar relatórios JSON após cada execução e muito mais,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  // Certifique-se de retornar o objeto de configuração, pois ele pode ter sido modificado pelo plug-in.
  return config;
}
module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/feature/*",
    setupNodeEvents,
  },
});