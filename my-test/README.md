# 测试总结

## `@Inject`

- Inject 到属性：在原型上创建 Getter 和 Setter 方法。可以自行 `new`，也可以使用容器的 Get 方法。

  用 `Objbect.keys()` 或类似语法是无法遍历到这个属性的，因为是在原型上修改的嘛。
  如果 get 一次之后就可以遍历到了，但 `keys` 得到的并不是属性的名字，而是一个私用的名字（构成方式是在属性名称前附加两条下划线）。

- Inject 到构造器参数：自行 new 时必须自己确保参数，容器的 Get 方法可以自动注入。

Inject 在继承时也能生效。

### `@OnlyInstantiableByContainer`

确保由容器进行初始化。

## Scopes

### `@Singleton`

全局单例。

### `@InRequestScope`

在相同的构建上下文中共享一个实例。

### Local 默认Scope

在每次请求时都创建实例。

## Factories

在 IoC 容器内创建实例。

## Container 类
