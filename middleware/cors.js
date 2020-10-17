module.exports = (req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}