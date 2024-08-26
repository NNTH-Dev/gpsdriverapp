module.exports = { 
  usersMongoURI: `mongodb://localhost/${process.env.USERS_DATABASE_NAME}`,
  booksMongoURI: `mongodb://localhost/${process.env.BOOKS_DATABASE_NAME}`,
  ordersMongoURI: `mongodb://localhost/${process.env.ORDERS_DATABASE_NAME}`,
  accountMongoURI: `mongodb://localhost/${process.env.ACCOUNT_DATABASE_NAME}`,
  passwordMongoURI: `mongodb://localhost/${process.env.PASSWORD_DATABASE_NAME}`,
  tokenMongoURI: `mongodb://localhost/${process.env.TOKEN_DATABASE_NAME}`,
  gpsMongoURI: `mongodb://localhost/${process.env.GPS_API_DATABASE_NAME}`,
};
