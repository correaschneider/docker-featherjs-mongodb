module.exports = {
  'host': process.env.API_HOST,
  'port': process.env.API_PORT,
  'public': '../public/',
  'paginate': {
    'default': 10,
    'max': 50
  },
  'mongodb': `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
};