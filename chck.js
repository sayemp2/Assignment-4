function calculateMoney(ticketSale) {
    const perTicketPrice = 120;
    const perlunchPrice = 50;
    const zooStaf = 8;
    const zooGuardCost = 500;
    let remainBalance = 0;
    if (typeof ticketSale !== "number" || ticketSale <= 0) {
    return "Invalid Number"
    }
    else {
    remainBalance = (ticketSale * perTicketPrice) - (zooGuardCost + (zooStaf * perlunchPrice));
    return remainBalance;
    }
    }
    function checkName(name) {
    if (typeof name !== "string") {
    return "invalid";
    }
    else {
    name = name.toLowerCase();
    let nameLastLetter = name[name.length - 1];
    let lastLetter = ["a", "y", "i", "e", "o", "u", "w"];
    if (lastLetter.includes(nameLastLetter)) {
    return "Good Name";
    }
    else {
    return "Bad Name";
    }
    }
    }
    function deleteInvalids(array) {
    let numbers = [];
    if (!Array.isArray(array) || typeof array == "null") {
    return "Invalid Array";
    }
    else {
    for (const item of array) {
    if (typeof item === "number" && !isNaN(item)) {
    numbers.push(item);
    }
    }
    return numbers;
    }
    }
    function password(obj) {
    if (!('name' in obj) || !('birthYear' in obj) || !('siteName' in obj)) {
    return "invalid";
    }
    else if (obj.birthYear.toString().length !== 4) {
    return "invalid";
    }
    else {
    return `${capitalFirstLetter(obj.siteName)}#${obj.name}@${obj.birthYear}`;
    }
    function capitalFirstLetter(siteName) {
    let capital = siteName[0].toUpperCase() + siteName.slice(1);
    return capital;
    }
    }
    function monthlySavings(arr , livingCost) {
    let overAllTax = 0;
    let savings = 0;
    if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
    }
    else {
    for (const payment of arr) {
    savings = savings + payment;
    if (payment >= 3000) {
    const tax = payment * (20 / 100);
    overAllTax = overAllTax + tax;
    }
    }
    savings = savings - overAllTax;
    savings = savings - livingCost;
    if (savings < 0) {
    return "earn more";
    }
    else {
    return savings;
    }
    }
    }

console.log(calculateMoney(10))
console.log(calculateMoney(1055))
console.log(calculateMoney(93))
console.log(calculateMoney(-130))

console.log(checkName("Salman"))
console.log(checkName("RAFEE"))
console.log(checkName("Jhankar"))
console.log(checkName(199))
console.log(checkName(["Rashed"]))

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))
console.log(deleteInvalids(["1" , {num:2} , NaN ]))
console.log(deleteInvalids([ 1 , 2 , -3 ]))
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}))

console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }))
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }))


console.log(monthlySavings([1000,2000,3000] , 5400))
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
console.log(monthlySavings(100, [ 900 , 2700 , 3400]))