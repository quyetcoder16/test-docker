const sendResponse = (res, status = undefined, message = "", data = null) => {
    if (status === undefined) {
        return res.status(500).json({ status: 500, data: null, message: 'Internal Server Error' });
    }

    return res.status(status).json({
        status,
        message,
        data
    });
}

export {
    sendResponse,
}