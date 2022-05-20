var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

alert(person.lastName);
alert(person["lastName"]);

// 创建对象方法
methodName = function() {
    var a=1;b=2;c=a+b;
    alert(c)
}

// 访问对象方法
alert("methodName()" + "\n" + methodName())
alert("methodName" + "\n" +  methodName)