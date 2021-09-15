// 1. String concatenation

console.log('my'+'cat');
console.log('1'+1);
console.log(`string literals:
1+2 = ${1+2}`);
console.log("sion's\n book")

// 2.
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;

const string = '5';
const number = 5;

// == -> type 상관없이 값만 구별
string == number // trune

// === => type 까지 구별함
// === 이걸 주로 쓰삼 
string === number // false


console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // 


// 짝수 출력 continue 이용

for(i = 0; i <= 10; i++){
    if(i%2 !== 0){
        continue
    }
    console.log(i);
}

for(i = 0; i <= 10; i++){
    if(i === 8){
        break
    }
    console.log(i);
}