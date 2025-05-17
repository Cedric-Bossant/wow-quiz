module.exports = ({ env }) => ({
  auth: {
    secret: process.env.JWT_SECRET || 'defaultSecret',
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'defaultApiTokenSalt',
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
