module.exports = (controller) => async (req, res) => {
  const { httpStatus, json } = await controller(req)

  res.status(httpStatus).json(json)
}
