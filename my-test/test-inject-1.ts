import { Inject } from "../src/typescript-ioc";
import { inspect } from "../src/my-tools"


class A {
    public beforeInjected = new Date()

    @Inject
    public injectedVar: Date

    public afterInjected = new Date();

    public someMemberFunction() {
        console.log("This is a class function.")
    }

    public constructor() {

    }
}

console.log("== Normal world ==")

console.group("A:")
inspect(A);
console.groupEnd();

/**
 * 在 JavaScript 里，A 不仅仅作为类的名字存在。class 更像是一种语法糖。
 *
 * A 是一个构造函数，这个构造函数有一个特殊的 prototype 属性，这个属性是个对象。
 * 注意，A 这个构造函数的原型对象并不是 A.prototype。
 * 在这里，A 的原型对象是一个匿名的函数。
 *
 * A.prototype 是 A 这个构造函数所构造出的所有对象的共同的原型对象。
 * 因为所有 A 的实例的原型都指向这个对象，可以在这个对象上定义类的方法。
 *
 * A.prototype.constructor 指向构造出 A 的实例对象的函数，也就是 A。
 * （因此，这里其实有环形引用的味道。）
 *
 * A.prototype 属性是不可枚举的，因此不会出现在 Object.keys() 等函数中（，否则由于环形引用，结果可能是灾难性的）。
 *
 * @see https://wangdoc.com/javascript/oop/new.html
 */

console.group("A.prototype:")
inspect(A.prototype);
console.groupEnd()

console.group("A.prototype.constructor")
console.log('A.prototype.constructor === A:', A.prototype.constructor === A);
console.groupEnd();

console.group("new A():");
inspect(new A());
console.groupEnd();

// class B {

// }

// class MixConstructing {
//     @Inject
//     public aa: A;

//     public constructor(@Inject public a: A, public tomcat: A, @Inject public cc: B) {
//         if (!a) {
//             console.log("No A!")
//         }
//         if (!tomcat) {
//             console.log("No A!")
//             this.tomcat = new A()
//         }
//     }
// }

// let instance = Container.get(MixConstructing);
// console.log(instance)
