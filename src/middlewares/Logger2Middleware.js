const Logger2Middleware = () => (next) => (action) => {
    console.log("Logger 2 start....")
    next(action)
    console.log("End Logger 2.")
}

export default Logger2Middleware