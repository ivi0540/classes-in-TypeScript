// Тема: Рвбота с классами на TypeScript а именно создание класса, работа с аксессорами (set и get методы), наследование классов прототипирование и подключение из другого файла (export)

// Теория по данной теме:
//  https://metanit.com/web/typescript/3.10.php

class User {
    // 1 - класс создан
    public login: string;
    public age: number;

    constructor(login: string, age: number) {
        this.login = login;
        this.age = age;
    }

    // 2-работа с аксессорами (set и get методы)
    public get _login(): string {
        return this.login;
    }
    public set _login(login: string) {
        this.login = login;
    }
    public get _age(): number {
        return this.age;
    }
    public set _age(age: number) {
        this.age = age;
    }
}

let dima: User = new User("dima", 29);
dima._login = "amid";
dima._age = 92;
// console.log(
//     dima._login,
//     dima._age,
// );

class Citizen extends User {
    // 3 - наследование в TypeScritp
    public firstName: string;
    public lastName: string;
    public documentNumber: string;

    constructor(login: string, age: number, firstName: string, lastName: string, documentNumber: string) {
        super(login, age);
        this.firstName = firstName;
        this.lastName = lastName;
        this.documentNumber = documentNumber;
    }
}


// Citizen.prototype.sayHello = function () {
//     console.log("Hello World");
// };

let innna: Citizen = new Citizen("innna345", 23, "Inna", "Sharapova", "410011");
console.log(innna);

// 4 - Работа с прототипами. Прототим это инмтрумент при помощи которого можно добавить функционал в класс который там изначально отсутствовал или добавить функционал (поля методы) из другого обьекта. ПРИМЕЧАНИЕ в TS не работает я xз почему но на JS  все норм.
// Ссылки
// https://learn.javascript.ru/prototype-inheritance
// https://www.youtube.com/watch?v=aQkgUUmUJy4

// 5 - с импортом экспортом аналогично в js работает в js нет
// Ссылка
// https://learn.javascript.ru/import-export 