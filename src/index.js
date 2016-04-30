'use strict';

export const sum = (...args) => {
    let arr = args.map(num => {
        if (!/^\d+$/.test(num)) {
            throw new Error(`"${num}" is illegal`);
        }
        return String(num).split('');
    });

    const ret = [];

    var prt = 0;

    const arrSum = (arr) => {
        let ret = 0;
        for (let j = 0; j < arr.length; ++j) {
            ret += (arr[j] | 0);
        }
        return ret;
    };

    do {
        let sum = prt + (arr.length ? arrSum(arr.map(num => num.pop())) : 0);

        ret.unshift(sum % 10);
        prt = Math.floor(sum / 10);
        arr = arr.filter(num => !!num.length);
        if (!arr.length && prt === 0) {
            return ret.join('');
        }
    } while (1);

};