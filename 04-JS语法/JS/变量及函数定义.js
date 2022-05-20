var length = 18;                                  // Number 通过数字字面量赋值
var points = 3 * 10;                              // Number 通过表达式字面量赋值
var lastName = "Johnson";                         // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object 通过对象字面量赋值

function myFunction(a, b) {
    return a * b;                                // 返回 a 乘以 b 的结果
}

a = 5; b = 6; c = a + b;
alert(c)
alert(length + points)
alert(lastName)
alert(cars)
alert(person)
alert(myFunction)