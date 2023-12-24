
export const errorHandler = (error, _request, response, _next) => {
  // Error handling middleware functionality
  console.error( `error ${error.message}`) // log the error
  const status = error.status || 400
  // send back an easily understandable error message to the caller
  response
    .status(status)
    .json({
      message: error.message
    })
}
