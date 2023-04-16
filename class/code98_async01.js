const pending = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("First Promise!");
        resolve("Success!");
        reject("Fail!");
    }, 3000);
});

// pending.then(function (val) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Send Value >> "+val);
//             resolve("Success!!");
//         }, 3000);
//     });
// }).then(function (val) {
//     console.log(val);
// });

pending.then(function (val) {
    setTimeout(function() {
        console.log("Send >> "+val);
    }, 3000);
    return 1;
}, function(val) {
    console.log("error >> "+val);
}).then(function (val) {
    console.log(val);
});