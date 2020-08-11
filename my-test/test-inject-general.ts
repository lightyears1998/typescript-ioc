import { Inject, Container } from "../src/typescript-ioc";
import { inspect } from "../src/my-tools";


class InjectDirect {
    @Inject
    public injected: Date

    public later?: Date
}

console.group('Test 1')
let instance = new InjectDirect();
inspect(instance);
// []
// 原型链上存在关于 injected 属性的 Getter/Setter，但属性上不存在 injected 属性。

inspect(instance.injected);

inspect(instance);
// [ '__injected' ]
// 这个属性是实际 Get 之后再创建的。
console.groupEnd();

console.group('Test 2');
let instance2 = new InjectDirect();
for (let key of Object.keys(instance2)) {
    console.log(key);
}
// 这时候还无法遍历到属性
console.groupEnd();

let variable = Container.get(InjectDirect)
console.log('即使', variable, '通过 Container 的方式也是不可能的。');
for (let k of Object.keys(variable)) {
    console.log(k);
} // [ __BuildContext ]
inspect(variable);

console.group('Test 3');

class EmbDate {
    @Inject
    date: Date
}

class InjectConstructor {
    public constructor(@Inject public createTime?: EmbDate) {
    }
}

let instanceByNew = new InjectConstructor();
let instanceByGet = Container.get(InjectConstructor);
inspect(instanceByNew);  // 魔法不生效
inspect(instanceByGet);  // 魔法成功

console.groupEnd();


console.group('Test 4');

class InjectConstructorParam {
    public createTime: Date

    public constructor(@Inject createTime?: Date) {
        this.createTime = createTime;
    }
}

let instance4 = new InjectConstructorParam();
inspect(instance4);

console.groupEnd();
