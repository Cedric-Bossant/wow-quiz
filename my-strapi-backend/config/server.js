module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  url: `http://localhost:${env.int('PORT', 1340)}`,
  app: {
    keys: env.array('APP_KEYS', ['yourRandomKeyHere1', 'yourRandomKeyHere2']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});