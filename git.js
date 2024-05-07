const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        skills: ['ipsum', 'lorem'],
        gender: 'male',
        age: 37,
    },
    {
        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
        gender: 'female',
        age: 34,
    },
    {
        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
        gender: 'male',
        age: 24,
    },
    {
        id: '249b6175-5c30-44c6-b154-f120923736f5',
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        skills: ['adipisicing', 'irure', 'velit'],
        gender: 'female',
        age: 21,
    },
    {
        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        skills: ['ex', 'culpa', 'nostrud'],
        gender: 'male',
        age: 27,
    },
    {
        id: '150b00fb-dd82-427d-9faf-2879ea87c695',
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        skills: ['non', 'amet', 'ipsum'],
        gender: 'male',
        age: 38,
    },
    {
        id: 'e1bf46ab-7168-491e-925e-f01e21394812',
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        skills: ['lorem', 'veniam', 'culpa'],
        gender: 'female',
        age: 39,
    },
]
//Створено репозиторій goit-js
//Всі завдання виконані в одному файлі, в який імпортується масив користувачів.
//Імена змінних зрозумілі, описові
//Код відформатований за допомогою Prettier


//Напиши функції які за допомогою перебираючих методів масиву (ніяких for, splice і т. д.) 
//виконують наступні операції над масивом об'єктів користувачів з файлу




//Отримати масив імен всіх користувачів (поле name).
const getUserName = user => {
    return user.map(user => user.name)
}
console.log(getUserName(users))



//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
const getUsereyeColor = user => {
    return user.map(user => user.eyeColor)
}
console.log(getUsereyeColor(users))


//Отримати масив імен користувачів за статтю (поле gender)
const getUserGender = user => {
    return user.map(user => user.gender)
}
console.log(getUserGender(users))


//Отримати масив тільки неактивних користувачів (поле isActive).
const getUserActive = user => {
    return user.filter(user => user.isActive === false)
}
console.log(getUserActive(users))



//Отримати користувача (не масив) по email (поле email, він унікальний)
const getUserEmail = user => {
    return user.find(user => user.email === 'shereeanthony@kog.com')
}
console.log(getUserEmail(users))



//Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
const getUserAge = user => {
    return user.filter(user => user.age > 25 && user.age < 70)
}
console.log(getUserAge(users))


//Отримати загальну суму балансу (поле balance) всіх користувачів.
let usersBalance = 0

users.forEach(user => {
    usersBalance += user.balance
})

console.log(usersBalance)


//Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
const getUserFriends = user => {
    return user.filter(user => user.friends.includes('Briana Decker'))
}
console.log(getUserFriends(users))


//Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)


//Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.