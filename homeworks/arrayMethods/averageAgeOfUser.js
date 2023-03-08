const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
    },
    ];
    function getAverageAge(users){
        const averageAge = users.reduce((average,user) => {
            return (average.age + user.age)/users.length
        })
        return averageAge

    };
    console.log(getAverageAge(users))