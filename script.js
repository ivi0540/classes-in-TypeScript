"use strict";
// Тема: Рвбота с классами на TypeScript а именно создание класса, работа с аксессорами (set и get методы), наследование классов прототипирование и подключение из другого файла (export)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
// Теория по данной теме:
//  https://metanit.com/web/typescript/3.10.php
var User = /** @class */ (function () {
    function User(login, age) {
        this.login = login;
        this.age = age;
    }
    Object.defineProperty(User.prototype, "_login", {
        // 2-работа с аксессорами (set и get методы)
        get: function () {
            return this.login;
        },
        set: function (login) {
            this.login = login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var dima = new User("dima", 29);
dima._login = "amid";
dima._age = 92;
// console.log(
//     dima._login,
//     dima._age,
// );
var Citizen = /** @class */ (function (_super) {
    __extends(Citizen, _super);
    function Citizen(login, age, firstName, lastName, documentNumber) {
        var _this = _super.call(this, login, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.documentNumber = documentNumber;
        return _this;
    }
    return Citizen;
}(User));
// Citizen.prototype.sayHello = function () {
//     console.log("Hello World");
// };
var innna = new Citizen("innna345", 23, "Inna", "Sharapova", "410011");
console.log(innna);
// 4 - Работа с прототипами. Прототим это инмтрумент при помощи которого можно добавить функционал в класс который там изначально отсутствовал или добавить функционал (поля методы) из другого обьекта. ПРИМЕЧАНИЕ в TS не работает я xз почему но на JS  все норм.
// Ссылки
// https://learn.javascript.ru/prototype-inheritance
// https://www.youtube.com/watch?v=aQkgUUmUJy4
function sayHello() {
    return "Hello";
}
exports.sayHello = sayHello;
