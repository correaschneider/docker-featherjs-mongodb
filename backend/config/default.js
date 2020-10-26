module.exports = {
  'host': process.env.BACKEND_HOST,
  'port': process.env.BACKEND_PORT,
  'public': '../public/',
  'paginate': {
    'default': 10,
    'max': 50
  },
  'mongodb': `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_NAME}`
};