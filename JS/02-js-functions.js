function fun(){
    console.log('This is a function')
}

let fun2 = () => {
    console.log('fun2 function');
};

let fun3 = (a, b) => {
    console.log(a + b);
};

fun();
fun2();
fun3(10,20);