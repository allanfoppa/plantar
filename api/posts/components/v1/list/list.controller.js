

function getAll(_req, res, next) {

  try {
    throw new Error("ola")
    return res
      .status(200)
      .json({
        message: `List of plants endpoint works`
      })
  } catch (error) {
    next(error)
  }

}

export default {
  getAll
}
