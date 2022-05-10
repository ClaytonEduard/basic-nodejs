module.exports = {
    send: (err, req, res, code = 400) => {
        console.error(`error: ${err}`);
        res.status(code).json({
            error: err
        })
    }
};