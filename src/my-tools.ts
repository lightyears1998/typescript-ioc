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
            console.log(obj, 'ownProperties:', Object.getOwnPropertyNames(obj));
            obj = Object.getPrototypeOf(obj);
        } else {
            break;
        }
    }

    while (level--) {
        console.groupEnd();
    }
}


export function getLine(): number {
    try {
        throw new Error();
    } catch(err) {
        return err.stack.split('\n')[2].split(':')[1];
    }
}
