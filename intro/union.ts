//when you dont knw the exact data type that you gonna use use union 

let score:number|string =36

score="pass"

type user={
    id:number
    number:string
}
type admin={
   
    name:string
    group:string
}


let man:admin| user;
// let superman:admin & user;
function superman(id:number | string){
    if(typeof id==="string"){
        id.toLowerCase();
    }
    else{
        id+2
    }
}
const data:(number|string) []=[1,2,3,"yes"]
man={name:"yes",id:12,group:"no"}
// Tuples lets you create a ordered types

// const tuples :(string|number)[]=[1,"Bc","Mc"]
let tupes:[string,number,boolean]

tupes=["yes",123,true]
let rgb:[number,number,number]=[255,255,255]


export {}