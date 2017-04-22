// Initializes the `challenge` service on path `/challenge`
const createService = require('feathers-nedb');
const createModel = require('../../models/challenge.model');
const hooks = require('./challenge.hooks');
const filters = require('./challenge.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'challenge',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/challenge', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('challenge');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
