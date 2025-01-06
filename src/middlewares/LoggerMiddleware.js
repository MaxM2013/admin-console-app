const LoggerMiddleware = () => (next) => (action) => {
    console.log("Logger start....")
    next(action)
    console.log("End Logger.")
}

export default LoggerMiddleware