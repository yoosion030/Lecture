var number = 123; // 변수에 type을 지정하여 그 type을 가진 값만 올 수 있음
// number = '123'; 오류 : number라고 type을 지정해 주었는데 string값이 와서
var names = ['yoosion', 'yoosiji'];
var object = {};
var union = 'kim'; // : A|B A혹은 B type이 와야됨
var type = 123;
// 함수에 타입지정 가능
function test(x) {
    return x * 2;
}
// test('123');
test(123);
var you = [123, true];
var john = { name: 'yoo' };
// class type 만들기
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
