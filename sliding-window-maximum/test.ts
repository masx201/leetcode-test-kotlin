import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import maxSlidingWindow from "./index.ts";

Deno.test("sliding-window-maximum", () => {
    const inputs = [
        [[1, 3, -1, -3, 5, 3, 6, 7], 3],
        [[1], 1],
        [[6], 1],

        [
            [
                1,
                3,
                -1,
                -31,
                3,
                -1,
                -3,
                5,
                3,
                6,
                7,
                3,
                3,
                5,
                5,
                6,
                71,
                3,
                -1,
                -3,
                5,
                3,
                6,
                7,
                3,
                3,
                5,
                5,
                6,
                7,
                5,
                3,
                6,
                7,
                3,
                3,
                5,
                5,
                6,
                71,
                3,
                -1,
                -3,
                5,
                3,
                6,
                7,
                3,
                3,
                5,
                5,
                6,
                7,
            ],
            16,
        ],
        [[], 7],
        [[2], 0],
    ] as Array<Parameters<typeof maxSlidingWindow>>;
    const outputs = [
        [3, 3, 5, 5, 6, 7],
        [1],
        [6],

        [
            7,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
            71,
        ],
        [],
        [],
    ];
    assertEquals(
        inputs.map(([input, k]) => maxSlidingWindow(input, k)),
        outputs,
    );
});
