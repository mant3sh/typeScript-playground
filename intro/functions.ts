function add (num:number){
    return num+2
}
console.log(add(3))

function getUpper(value:string){
    return value.toUpperCase()
}

console.log(getUpper("helloworld"))

function signUp(name:string,age:number,email:string,money:number=100 ){
    return 1;

}
function returnANumber():number {
    return 1;
}
const sayHello=():string=>{
    return "hello";
}
function errrorHandler (errmsg:string):never {
    throw new Error(errmsg)

}
console.log(returnANumber())
export {}