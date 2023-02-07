export const pick = (object, keys) => {
    return keys.reduce((obj, key) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {

            obj[key] = object[key];
        }
        return obj;
    }, {});
};




//reduce() that is used to process and condense an array of values into a single value. It takes two arguments: a callback function and an initial value.
// hasOwnProperty is a method that is part of the Object.prototype and can be used to check if an object has a specific property.
