Object.prototype.describe = function() {
    let description = '';

    // adds all key value pair so it keeps adding it to description
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            description += `${key}: ${this[key]}, `;
        }
    }

    // remove last comma 
    return description.slice(0, -2);
};

const obj1 = { name: 'Shardendu', age: 20 };
const obj2 = { type: 'Car', model: 'Tesla' };

console.log(obj1.describe()); // "name: Shardendu, age: 20"
console.log(obj2.describe()); // "type: Car, model: Tesla"
