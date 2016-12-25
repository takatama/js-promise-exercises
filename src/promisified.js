var methodA = function (chain) {
    return Promise.resolve(chain + ' -> methodA');
};

var methodB = function (chain) {
    return Promise.resolve(chain + ' -> methodB');
};

var methodC = function (chain) {
    return Promise.resolve(chain + ' -> methodC');
};

exports.abc = function (chain) {
    return methodA(chain).then(function (resultA) {
        return methodB(resultA);
    }).then(function (resultB) {
        return methodC(resultB);
    }).then(function (resultC) {
        return Promise.resolve(resultC);
    });
};
