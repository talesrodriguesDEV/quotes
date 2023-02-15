module.exports = function ({ message }, _req, res, _next) {
  return res.status(500).json({ message })
}
