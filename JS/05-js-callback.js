let fun = (abc) => {
    setTimeout(() =>{
        abc({message:'fun message'});
    },2000);
}

fun (getFun =>{
console.log(getFun.message);
});

let someFunction = (getFun) =>{
    console.log(getFun.message);
}

fun(someFunction);