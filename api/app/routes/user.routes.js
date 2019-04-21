module.exports = (app) => {
    const users = require('../controllers/user.controller.js');
    const checkAuth = require('../middleware/check-authentication');

    app.all('/api/*', checkAuth);

    app.post('/users', users.create);

    app.get('/users/check_email_not_taken', users.checkEmailNotTaken);
}