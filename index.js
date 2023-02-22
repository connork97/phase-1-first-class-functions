function receivesAFunction(callback) {
    console.log(callback());
}

function returnsANamedFunction() {
    return receivesAFunction;
}

const returnsAnAnonymousFunction = () => {
    return function() {
    return "My anonymous function";
}
}