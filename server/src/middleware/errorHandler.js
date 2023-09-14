import createHttpError from "http-errors";

function errorHandler(err, req, res, next) {
  console.error(err);

  if (createHttpError.isHttpError(err)) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  // default error handling
  return res.status(500).json({ message: "Internal Server Error" });
}

export default errorHandler;
