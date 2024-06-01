module.exports = [
  {
    method: 'POST',
    path: '/api/v1/migrate',
    handler: 'migrateController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/api/v1/migrate/test',
    handler: 'migrateController.test',
    config: {
      policies: [],
      auth: false,
    },
  },
];
