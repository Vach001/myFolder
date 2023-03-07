const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];


function getUserNames(users){
    let usersName = users.map((user) => {
       return  user.username
    })
    return usersName
}


function getUsernameLengths(users){
    let usernameLengths = users.map((user) => {
        return user.username.length
    })
    return usernameLengths
};


console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']
console.log(getUsernameLengths(users))



let arr = ["1", "2", 'px', "34"]
function arseInteger(array){
let integers = array.map((item) => {
    let num = item - 0
    return item = num ||= null
})
return integers
};
console.log(arseInteger(arr))