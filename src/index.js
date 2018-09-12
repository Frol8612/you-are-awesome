// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = prop => prop;

const createNotEnumerableProperty = prop => {
    Object.defineProperty(Object.prototype, prop, {
        set: val => (prop = val),
        get: () => prop,
    });

    return prop;
};

const createProtoMagicObject = () => {
    let obj = new Function();
    obj.__proto__ = obj.prototype;
    return obj;
};

let step = 0;
const incrementor = () => {
    step++;
    incrementor.valueOf = () => step;
    return incrementor;
};

let asyncStep = 0;
const asyncIncrementor = () => {
    asyncStep++;
    return new Promise(res => res(asyncStep));
};

const createIncrementer = () => {
    let arr = new Array();
    arr.value = 0;
    arr.next = () => {
        arr.value++;
        return arr;
    };

    return arr;
};

// return same incrementorument not earlier than in one second, and not later, than in two

const returnBackInSecond = param =>
    new Promise(res => setTimeout(() => res(param), 1000));

const getDeepPropertiesCount = obj => JSON.stringify(obj).split('}').length - 2;

const createSerializedObject = () => null;

const toBuffer = () => {};

const sortByProto = arr => arr.sort((a, b) => a - b);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
