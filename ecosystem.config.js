module.exports = {
  apps: [
    {
      name: "app.js",
      script: "/home/derana/topadslk-sample/build/src/app.js", // Replace with your app's entry point script
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        NODE_CONFIG_DIR: "/home/derana/topadslk-sample/config",
      },
    },
  ],
};