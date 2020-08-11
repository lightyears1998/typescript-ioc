export function inspect(obj: Object) {
    const name = typeof obj + ' ' + obj.constructor.name;
    let level = 0, shouldIter = true;

    while (obj !== null) {
        console.log(`>> ${name}${" -> prototype".repeat(level)}`);

        console.group(); ++level;

        for (let builtIn of [Object, Date]) {
            if (obj === builtIn.prototype) {
                console.log(builtIn.name + '.prototype');
                shouldIter = false;
            }
        }

        if (shouldIter) {
            console.log(obj, 'properties:', Object.getOwnPropertyNames(obj));
            obj = Object.getPrototypeOf(obj);
        } else {
            break;
        }
    }

    while (level--) {
        console.groupEnd();
    }
}
