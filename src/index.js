const createEnumerableProperty = (propName) => propName;

const createNotEnumerableProperty = (propName) => Symbol(propName);

const createProtoMagicObject = () => {

    const obj = new Function;
    obj.__proto__ = obj.prototype;
    return obj;
};

let counter = 0;
const incrementor = () => {

    counter++;
    return incrementor;
};

incrementor.toString = () => counter;


const asyncIncrementor = () => new Promise((resolve) => resolve(asyncIncrementor.value++));
asyncIncrementor.value = 1;

const createIncrementer = function *() {

    let n = 1;
    while (true) {
        yield n++;
    }
};

const returnBackInSecond = (param) =>  new Promise((resolve) => {

    setTimeout(() => {

        resolve(param);
    }, 1000);
});

const getDeepPropertiesCount = (obj) => {

    let count = 1;

    for( let key in obj ){

        const recursion = (obj) =>{

            if( typeof obj != 'object' ) return;

            for( let key in obj ){

                count++;
                recursion( obj[key] );
            }
        };

        recursion( obj[key] );
    }

    return count;
};

const createSerializedObject = () => null;

const sortByProto = (arr) =>  arr.sort( ( a, b ) => a.__proto__ == b ? 1 : 0 );

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