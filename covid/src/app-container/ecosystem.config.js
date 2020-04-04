// module.exports = {
//   apps : [{
//     name: "app",
//     script: "./app.js",
//     env: {
//       NODE_ENV: "development",
//     },
//     env_production: {
//       NODE_ENV: "production",
//     }
//   }]
// }

module.exports = [{
  script: 'app.js',
  name: 'app',
  exec_mode: 'cluster',
  instances: 2
}, {
  script: 'worker.js',
  name: 'worker'
}]