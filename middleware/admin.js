module.exports = function (req, res, next) {
  const client = req.user;
  if (client.role === "user")
    return res.status(401).send("Access denied. Role No authorized.");

  next();
};
