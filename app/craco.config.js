const path = require('path');
module.exports = {
  webpack: {
    alias: {
      "@afx/components": path.resolve(__dirname, 'src', 'components'),
      "@afx/controllers": path.resolve(__dirname, 'src', 'controllers'),
      "@afx/interfaces": path.resolve(__dirname, 'src', 'interfaces'),
      "@afx/views": path.resolve(__dirname, 'src', 'views'),
      "@afx/utils": path.resolve(__dirname, 'src', 'utilities'),
      "@afx/services": path.resolve(__dirname, 'src', 'services')
    }
  }
}