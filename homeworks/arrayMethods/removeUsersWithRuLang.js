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
const rmRuLangUsers = users.filter((user) => user.lang !== "ru")
console.log(rmRuLangUsers)