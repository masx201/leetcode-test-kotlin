export default function isHappy(n: number): boolean {
    while (n > 1000) {
        // console.log(n)
        n = gethappynext(n);
    }
    return smallerthan1000happy.has(n);
}
function gethappynext(n: number) {
    let sum = 0;
    while (n) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }
    return sum;
}

const smallerthan1000happy = new Set([
    1,
    7,
    10,
    13,
    19,
    23,
    28,
    31,
    32,
    44,
    49,
    68,
    70,
    79,
    82,
    86,
    91,
    94,
    97,
    100,
    103,
    109,
    129,
    130,
    133,
    139,
    167,
    176,
    188,
    190,
    192,
    193,
    203,
    208,
    219,
    226,
    230,
    236,
    239,
    262,
    263,
    280,
    291,
    293,
    301,
    302,
    310,
    313,
    319,
    320,
    326,
    329,
    331,
    338,
    356,
    362,
    365,
    367,
    368,
    376,
    379,
    383,
    386,
    391,
    392,
    397,
    404,
    409,
    440,
    446,
    464,
    469,
    478,
    487,
    490,
    496,
    536,
    556,
    563,
    565,
    566,
    608,
    617,
    622,
    623,
    632,
    635,
    637,
    638,
    644,
    649,
    653,
    655,
    656,
    665,
    671,
    673,
    680,
    683,
    694,
    700,
    709,
    716,
    736,
    739,
    748,
    761,
    763,
    784,
    790,
    793,
    802,
    806,
    818,
    820,
    833,
    836,
    847,
    860,
    863,
    874,
    881,
    888,
    899,
    901,
    904,
    907,
    910,
    912,
    913,
    921,
    923,
    931,
    932,
    937,
    940,
    946,
    964,
    970,
    973,
    989,
    998,
]);
