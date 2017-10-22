const svgxhr = require('webpack-svgstore-plugin/src/helpers/svgxhr');

/* eslint-disable no-underscore-dangle */
// this plugin checks the AST for this exact variable name, so can't change it
const __svg__ = {
  path: './climacons-master/SVG/*.svg',
  name: 'assets/climacons-master/SVG/[hash].logos.svg'
};

svgxhr(__svg__);
