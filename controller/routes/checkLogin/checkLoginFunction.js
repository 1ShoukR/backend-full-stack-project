const checkLogin = (req, res, next) => {
    if (req.session.user) {
    next();
    } else {
    res.json({
        message: 'login Required',
    });
    }
};


