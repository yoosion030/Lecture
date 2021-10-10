let number :number = 123; // 변수에 type을 지정하여 그 type을 가진 값만 올 수 있음
// number = '123'; 오류 : number라고 type을 지정해 주었는데 string값이 와서
let names :string[] = ['yoosion','yoosiji'];
let object :{name?: string} = {};
let union :string | number = 'kim'; // : A|B A혹은 B type이 와야됨

// type을 변수에 담아쓸 수 있음
type MyType = string|number; // 대부분 대문자로 명시함
let type: MyType = 123; 


// 함수에 타입지정 가능
function test(x :number) :number // return type명시
{
    return x*2;
}

// test('123');
test(123);

// array type 만들기
type ArrayType = [number, boolean]; // 첫 번째에는 number, 두 번째에는 boolean
let you :ArrayType = [123,true];

// object type 만들기
type ObjType = {
    name : string,
    [key : string] : string
}

let john :ObjType = {name : 'yoo'}

// class type 만들기
class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}

