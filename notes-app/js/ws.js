const Request = require('request');

const getExternalWS = function (url){
    Request.get(url, (error, response, body) => {
        if(error) {
            return error;
        }
        console.log(JSON.parse(body));
        return JSON.parse(body);
    })
}

const postData = function(){
    Request.post({
        "headers": { "content-type": "application/json" },
        "url": "http://httpbin.org/post",
        "body": JSON.stringify({
            "firstname": "Mido",
            "lastname": "MIDO"
        })
    }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });
}


module.exports={
    getExternalWS: getExternalWS,
    postData: postData
}
