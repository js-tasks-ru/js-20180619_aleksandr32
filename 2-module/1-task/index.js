/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    if (obj === null) {
        return null;
    }

    let objclone = Object.assign({}, obj);
    for (let key in objclone) {
        if (typeof objclone[key] === 'object' && obj !== null) {
            objclone[key] = clone(objclone[key]);
        }
    }

    return objclone;
}