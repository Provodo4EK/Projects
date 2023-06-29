//Основы Js
//Задание 1
function test1 (value) {
    console.info(typeof(value));
}
//Задание 2
/* Результат: а потому что происходит выполнение оператора conditional operator (? :) 
который проверяет выражение a || b на истинну с условиями если true то с = а() иначе с = b()
выражение a || b истинно поскольку каждое из значений true */

//Функции
//Задание 1 
function count(num) {
    let sum = num;
    function nextCount(nextNum) {
        if (typeof nextNum === 'number') {
        sum += nextNum;
    }
    
    return nextCount;
    }
    nextCount.valueOf = function () {
        return sum;
    };
    
    return nextCount;
}
console.log(count(3)(2)(1)(5)(7).valueOf());
console.log(count(3)(null)(1)('asad')().valueOf());
console.log(count(5)('wee')(23)(1)().valueOf());

//Объекты и массивы 
//Задание 1
function convertArrToObj (value) {
    result = {};
    for (i in value) {
        result[i] = value[i];
    }
    return result
}
//Задание 2
function countFromArr(value) {
    result = {};
    for (i in value) {
        counter = 0;
        for (e in value) {
            if (value[i] == value[e]) {counter += 1} 
        }
        result[value[i]] = counter;
    } 
    return result
}
//Задание 3
function groupByField(value, key) {
    result = {};
    index = [];
    for (i in value) {
        for (e in value) {
            if (value[i][key] == value[e][key]) {index.push(value[e])}
        }
        result[value[i][key]] = index;
        index = [];
    }
    return result
}
//Прототипы и наследование
//Задание 1
Number.prototype.plus = function(num) {
    return this + num;
}
console.log((1).plus(2));
//Ассинхронная работа в JS 
//Задание 1
/* start
promise constructor
final
p2
p4
p5
timeout */