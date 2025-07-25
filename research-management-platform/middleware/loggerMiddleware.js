// middleware/loggerMiddleware.js

const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Call the next middleware in the stack
};

module.exports = loggerMiddleware;
