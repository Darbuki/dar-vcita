module.exports = function (app){
    const appController = require('../controllers/app.controller');


    app.route('/')
        .post(appController.post_post);

}