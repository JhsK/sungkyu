// module.exports = {
//   webpack: (config, options) => {
//     config.output.globalObject = 'self';

//     return config;
//   },
// };

module.exports = {
  output: {
    globalObject: 'this',
  },
};
