const bootstrap = require('wix-bootstrap-ng');

const app = bootstrap();

if (process.env.NODE_ENV === 'production') {
  app.express('./dist/src/server');
} else {
  app.express('./src/server');
}

app.start({
  disableCluster: process.env.NODE_ENV !== 'production',
});
