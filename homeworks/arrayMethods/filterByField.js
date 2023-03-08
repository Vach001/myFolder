const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
    },
    {
    username: "Elon Musk",
    isAstronaut: false,
    },
    ];
    function filterByField(users){
        const newUsers = users.filter((user) => user.isAstronaut)
        return newUsers

    }
    console.log(filterByField(users))