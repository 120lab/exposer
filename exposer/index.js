const app = require('../app-fwrk');

app.get('/', function (req, res) {

    var data = req.body;

    if (req.url == '/' && req.method.toLowerCase() == 'get') {
        // parse a file upload
        // show a file upload form    

        var responseClient = {
                               computerName : process.env.computerName,
                               os : process.env.os
                             };

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(responseClient));
    };
})

var port = process.env.PORT || 8083;

var server = app.listen(port, function () {
    var host = server.address().address

    app.logger.info("App listening at http://" +  host + ":" + port);
})
