function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec);
}


function start(res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello, start!');
    res.end();
    // return 'Hello, start!!';
}

// function hello(res) {
//     // sleep(20000); // millisec, 20sec - blocking 
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // res.write('Hello, hello!');
//     // res.end();
//     // // return 'Hello, hello!!';

//     setTimeout(function () {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('Hello, hello!');
//         res.end();
//     }, 20000); //call back
// }

function hello(res, postData) {
    console.log('Request handler \'start\'');
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '이름과 별명을 입력하세요.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        '<input type="text" name="myNick" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();

}

exports.start = start;
exports.hello = hello;