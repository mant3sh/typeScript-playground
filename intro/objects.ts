// const user={
//     name:"mahantesha",
//     email:"mahantesha.bv1999@gmail.com",
//     programmer:true,
// }

// function createUser({ name:string,age:number,programmer:boolean=false}) {


// }
// createUser({name:"mahantesha",age:23,programmer:true})
type User ={
    readonly _id:number
    name:string
    email:string
    age:number
    programmer:boolean
    creditCard?:number

}
type cardNumber= {
    cardnumber:string
}
type cvv={
    cvv:number
}
type nameOnCard ={
    name:string
}

type cardDetails= cardNumber & cvv & nameOnCard & {
    address:string
}

function createUser(user:User) :User{
    return {_id:123456, name:" " ,email:" ",age:0,programmer:true}

}
export {}