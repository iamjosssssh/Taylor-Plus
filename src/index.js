module.exports = function (api) {
  // (Optional!)
  // Quasar compatibility check; you may need
  // hard dependencies, as in a minimum version of the "quasar"
  // package or a minimum version of Quasar App CLI
  api.compatibleWith("quasar", "^2.0.0");

  if (api.hasVite === true) {
    api.compatibleWith("@quasar/app-vite", "^1.0.0-beta.0");
  } else {
    // api.hasWebpack === true
    api.compatibleWith("@quasar/app-webpack", "^3.0.0");
  }

  // Here we extend /quasar.config.js, so we can add
  // a boot file which registers our new UI component;
  // "extendConf" will be defined below (keep reading the tutorial)
  api.extendQuasarConf(extendConf);
};
//
function extendConf(conf, api) {
  // make sure my-component boot file is registered
  conf.boot.push(
    "~quasar-app-extension-my-component/src/boot/register-my-component.js"
  );

  // @quasar/app-vite does not need this
  if (api.hasVite !== true) {
    // make sure boot & component files get transpiled
    conf.build.transpileDependencies.push(
      /quasar-app-extension-my-component[\\/]src/
    );
  }

  // make sure my-component css goes through webpack to avoid ssr issues
  conf.css.push(
    "~quasar-app-extension-my-component/src/component/MyComponent.sass"
  );
}
