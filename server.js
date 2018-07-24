const HTTP = require(`http`);
const fs = require(`fs`);

const REQUEST_HANDLER = (request, response) => {
    switch (request.url) {
        case `/index.html`:
        case `/foods.html`:
        case `/movies.html`:
        case `/css_frameworks.html`:
            serve(request.url.substring(1), response);
            break;
        default:
            serve(`404.html`, response);
    }
};

function serve(fileName, response) {
    fs.readFile(fileName, (error, data) => {
        if (error) throw error;
        response.end(data);
    });
}

const PORT = 8080;

const SERVER = HTTP.createServer(REQUEST_HANDLER)
    .listen(PORT, (error) => {
        if (error) throw error;
        console.log(`Listening on port ${PORT}`);
    });