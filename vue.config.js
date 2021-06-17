module.exports = {
  publicPath: process.env.VUE_APP_NODE_ENV === 'production' ? process.env.VUE_APP_PUBLIC_PATH : '/',
};
