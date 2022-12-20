import { assertEquals } from "asserts";
import { default as plusOne } from "./index.ts";

Deno.test({
    name: `
  Input: [0]
  Output: [1]
  Explanation: The array represents the integer 0.
  `,
    fn(): void {
        const result = plusOne([0]);
        assertEquals(result, [1]);
    },
});

Deno.test({
    name: `
  Input: [1,2,3]
  Output: [1,2,4]
  Explanation: The array represents the integer 123.
  `,
    fn(): void {
        const result = plusOne([1, 2, 3]);
        assertEquals(result, [1, 2, 4]);
    },
});

Deno.test({
    name: `
  Input: [4,3,2,1]
  Output: [4,3,2,2]
  Explanation: The array represents the integer 4321.
  `,
    fn(): void {
        const result = plusOne([4, 3, 2, 1]);
        assertEquals(result, [4, 3, 2, 2]);
    },
});

Deno.test({
    name: `
  Input: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]
  Output: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
  Explanation: The array represents the integer 6145390195186705543.
  `,
    fn(): void {
        const result = plusOne([
            6,
            1,
            4,
            5,
            3,
            9,
            0,
            1,
            9,
            5,
            1,
            8,
            6,
            7,
            0,
            5,
            5,
            4,
            3,
        ]);
        assertEquals(
            result,
            [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4],
        );
    },
});

Deno.test({
    name: `
  Input: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
  Output: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  Explanation: The array represents the integer 99999999999999999999999.
  `,
    fn(): void {
        const result = plusOne([
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
            9,
        ]);
        assertEquals(
            result,
            [
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
        );
    },
});
Deno.test("plus-one", () => {
    const inputs = [
        [8, 9, 9],
        [9, 9, 9],
        [1, 2, 3],
        [4, 3, 2, 1],
        [9],
        [0],
        [
            2,
            3,
            0,
            1,
            8,
            3,
            0,
            1,
            5,
            4,
            9,
            8,
            1,
            2,
            1,
            9,
            9,
            9,
            8,
            0,
            2,
            1,
            8,
            8,
            2,
            9,
            9,
            1,
            5,
            1,
            8,
            5,
            9,
            1,
        ],
        [3, 4, 9, 4, 8, 9, 7, 3, 5, 5, 9, 8, 5, 3, 6, 4, 4, 8, 5, 7],
        [
            5,
            1,
            9,
            3,
            4,
            5,
            0,
            5,
            5,
            5,
            6,
            6,
            3,
            7,
            0,
            9,
            1,
            7,
            3,
            9,
            1,
            0,
            6,
            0,
            0,
            7,
            7,
            5,
            5,
            4,
            6,
            3,
            9,
            6,
            6,
            4,
            4,
            8,
            5,
            4,
            9,
            2,
            2,
            1,
            6,
            3,
            6,
            2,
            6,
            7,
        ],
        [
            7,
            0,
            0,
            8,
            8,
            2,
            4,
            5,
            0,
            0,
            6,
            2,
            5,
            7,
            1,
            1,
            7,
            8,
            3,
            7,
            6,
            0,
            1,
            7,
            6,
            3,
        ],
        [
            6,
            8,
            9,
            1,
            3,
            4,
            1,
            5,
            0,
            0,
            4,
            1,
            6,
            5,
            3,
            7,
            5,
            5,
            4,
            3,
            7,
            0,
            6,
            0,
            1,
            5,
            6,
            3,
            4,
            5,
            9,
            0,
            3,
            0,
            2,
            9,
            9,
            6,
            8,
            3,
            0,
            5,
            7,
            9,
            4,
            5,
            5,
            9,
            1,
            5,
            0,
            3,
            3,
            8,
            6,
            8,
            8,
            8,
            5,
            8,
            3,
            3,
            9,
            2,
            2,
            4,
            8,
            4,
            6,
            5,
            1,
            3,
            2,
            1,
            5,
            6,
            4,
            4,
            0,
            9,
            2,
            1,
            9,
            5,
            9,
            6,
            4,
            1,
            5,
            4,
            8,
            8,
            2,
            7,
            8,
            7,
            3,
        ],
        [
            1,
            0,
            9,
            1,
            1,
            3,
            1,
            5,
            9,
            2,
            7,
            9,
            6,
            8,
            9,
            9,
            3,
            7,
            2,
            4,
            5,
            6,
            1,
            4,
            4,
            7,
            8,
            9,
            8,
            8,
            5,
            1,
            7,
            8,
            2,
            5,
            5,
            6,
            5,
            6,
            1,
            5,
            1,
            7,
            2,
            8,
            7,
            2,
            3,
            3,
            5,
            0,
            9,
            0,
            7,
            7,
            0,
            0,
            5,
            5,
            4,
            1,
            6,
            4,
            1,
            4,
            5,
            7,
            5,
            9,
            5,
            0,
            4,
            5,
            1,
            7,
            8,
            9,
            4,
            7,
            9,
            4,
            3,
            6,
            8,
            3,
            4,
            4,
            2,
            0,
            8,
        ],
        [
            1,
            0,
            2,
            3,
            1,
            8,
            2,
            9,
            3,
            7,
            3,
            7,
            7,
            0,
            7,
            0,
            6,
            1,
            2,
            8,
            6,
            2,
            5,
            2,
            8,
            6,
            3,
            6,
            6,
            6,
            4,
            0,
            9,
            5,
            1,
            1,
            8,
            3,
            6,
            0,
            2,
            1,
            8,
            0,
            3,
            6,
            2,
            8,
            5,
            9,
            4,
            8,
            2,
            6,
            9,
            9,
            7,
            3,
            6,
            7,
            9,
            8,
            8,
            6,
            1,
            9,
            9,
            4,
            0,
            3,
            4,
            2,
            7,
            2,
            1,
            7,
            2,
            3,
            6,
            6,
            0,
            6,
            3,
            4,
            7,
            4,
            5,
            3,
            8,
        ],
        [
            9,
            2,
            8,
            2,
            8,
            6,
            4,
            3,
            8,
            4,
            8,
            0,
            7,
            9,
            0,
            2,
            6,
            0,
            9,
            7,
            5,
            3,
            4,
            7,
            7,
            6,
            4,
            3,
            6,
            5,
            7,
            3,
            0,
            1,
            9,
            2,
            4,
            5,
            7,
            6,
            1,
            6,
            9,
            3,
            5,
            3,
            5,
            2,
            5,
            9,
            1,
            1,
            5,
            2,
            5,
            1,
            0,
            0,
            9,
            1,
            0,
            3,
            5,
            6,
            3,
            8,
            1,
            9,
            6,
        ],
        [9, 1, 4, 5, 3, 4, 4, 8, 4, 6, 1, 8, 7, 0, 1, 1, 1, 8],
        [
            4,
            6,
            9,
            6,
            9,
            4,
            9,
            3,
            2,
            3,
            0,
            5,
            5,
            6,
            4,
            7,
            3,
            4,
            7,
            0,
            2,
            4,
            0,
            1,
            5,
            4,
            9,
            3,
            6,
            9,
            4,
            6,
            0,
            5,
            8,
            5,
            2,
            8,
            9,
            3,
            1,
            7,
            0,
            7,
            9,
            4,
            9,
            6,
            4,
            0,
            5,
            1,
            5,
            3,
            2,
            6,
            8,
            4,
            8,
            5,
            6,
            8,
            5,
            5,
            5,
            4,
            8,
            5,
            2,
            1,
            2,
            5,
            3,
        ],
        [7, 5, 9, 6, 2, 5, 5, 2, 3, 3, 7, 8, 6, 5, 8, 8, 5],
        [
            5,
            7,
            4,
            4,
            9,
            6,
            4,
            6,
            5,
            7,
            9,
            1,
            0,
            8,
            6,
            9,
            8,
            3,
            5,
            7,
            8,
            5,
            9,
            9,
            0,
            2,
            3,
            5,
            2,
            5,
            3,
            3,
            4,
            3,
            0,
            5,
            6,
            6,
            6,
            3,
            4,
            7,
            4,
            3,
            8,
            3,
            8,
            1,
            7,
            2,
            6,
            3,
            4,
            2,
            2,
            3,
            2,
            6,
            3,
            7,
            9,
            8,
            5,
            1,
            1,
            7,
            8,
            7,
            8,
            5,
            0,
            7,
            6,
            8,
            4,
            7,
            3,
            6,
            2,
            8,
            0,
            7,
            4,
        ],
        [5, 7, 3, 5, 3, 6, 5, 1, 3, 8, 9, 9, 9, 1, 9, 0, 4, 8],
        [
            8,
            9,
            5,
            8,
            5,
            5,
            6,
            9,
            1,
            6,
            4,
            2,
            4,
            8,
            7,
            7,
            9,
            3,
            1,
            6,
            6,
            4,
            2,
            3,
            9,
            6,
            1,
            1,
            8,
            2,
            2,
            4,
            5,
            7,
            0,
            3,
            9,
            0,
            6,
            5,
            1,
            7,
            4,
            1,
            8,
        ],
        [1, 0, 1, 3, 2, 9, 8, 3, 8, 1, 3, 7, 0, 3, 5, 1, 7, 8, 0, 9, 7, 8],
        [
            8,
            7,
            3,
            2,
            8,
            8,
            0,
            3,
            7,
            5,
            3,
            5,
            4,
            3,
            7,
            8,
            3,
            4,
            5,
            0,
            1,
            7,
            1,
            8,
            5,
            0,
            8,
            1,
            2,
            3,
            6,
            1,
            7,
            3,
            3,
            3,
            4,
            1,
            1,
            3,
            0,
            0,
            4,
            8,
            0,
            0,
            9,
            7,
            1,
            0,
            8,
            3,
            4,
            2,
            2,
            2,
            5,
            9,
            4,
            3,
        ],
        [
            8,
            6,
            7,
            0,
            2,
            4,
            6,
            8,
            2,
            2,
            6,
            6,
            5,
            9,
            8,
            3,
            5,
            3,
            8,
            7,
            9,
            7,
            8,
            5,
            6,
            5,
            7,
            1,
            1,
            9,
            4,
            1,
        ],
        [5, 2, 2, 2],
        [9, 8],
    ];
    const outputs = [
        [9, 0, 0],
        [1, 0, 0, 0],
        [1, 2, 4],
        [4, 3, 2, 2],
        [1, 0],
        [1],
        [
            2,
            3,
            0,
            1,
            8,
            3,
            0,
            1,
            5,
            4,
            9,
            8,
            1,
            2,
            1,
            9,
            9,
            9,
            8,
            0,
            2,
            1,
            8,
            8,
            2,
            9,
            9,
            1,
            5,
            1,
            8,
            5,
            9,
            2,
        ],
        [3, 4, 9, 4, 8, 9, 7, 3, 5, 5, 9, 8, 5, 3, 6, 4, 4, 8, 5, 8],
        [
            5,
            1,
            9,
            3,
            4,
            5,
            0,
            5,
            5,
            5,
            6,
            6,
            3,
            7,
            0,
            9,
            1,
            7,
            3,
            9,
            1,
            0,
            6,
            0,
            0,
            7,
            7,
            5,
            5,
            4,
            6,
            3,
            9,
            6,
            6,
            4,
            4,
            8,
            5,
            4,
            9,
            2,
            2,
            1,
            6,
            3,
            6,
            2,
            6,
            8,
        ],
        [
            7,
            0,
            0,
            8,
            8,
            2,
            4,
            5,
            0,
            0,
            6,
            2,
            5,
            7,
            1,
            1,
            7,
            8,
            3,
            7,
            6,
            0,
            1,
            7,
            6,
            4,
        ],
        [
            6,
            8,
            9,
            1,
            3,
            4,
            1,
            5,
            0,
            0,
            4,
            1,
            6,
            5,
            3,
            7,
            5,
            5,
            4,
            3,
            7,
            0,
            6,
            0,
            1,
            5,
            6,
            3,
            4,
            5,
            9,
            0,
            3,
            0,
            2,
            9,
            9,
            6,
            8,
            3,
            0,
            5,
            7,
            9,
            4,
            5,
            5,
            9,
            1,
            5,
            0,
            3,
            3,
            8,
            6,
            8,
            8,
            8,
            5,
            8,
            3,
            3,
            9,
            2,
            2,
            4,
            8,
            4,
            6,
            5,
            1,
            3,
            2,
            1,
            5,
            6,
            4,
            4,
            0,
            9,
            2,
            1,
            9,
            5,
            9,
            6,
            4,
            1,
            5,
            4,
            8,
            8,
            2,
            7,
            8,
            7,
            4,
        ],
        [
            1,
            0,
            9,
            1,
            1,
            3,
            1,
            5,
            9,
            2,
            7,
            9,
            6,
            8,
            9,
            9,
            3,
            7,
            2,
            4,
            5,
            6,
            1,
            4,
            4,
            7,
            8,
            9,
            8,
            8,
            5,
            1,
            7,
            8,
            2,
            5,
            5,
            6,
            5,
            6,
            1,
            5,
            1,
            7,
            2,
            8,
            7,
            2,
            3,
            3,
            5,
            0,
            9,
            0,
            7,
            7,
            0,
            0,
            5,
            5,
            4,
            1,
            6,
            4,
            1,
            4,
            5,
            7,
            5,
            9,
            5,
            0,
            4,
            5,
            1,
            7,
            8,
            9,
            4,
            7,
            9,
            4,
            3,
            6,
            8,
            3,
            4,
            4,
            2,
            0,
            9,
        ],
        [
            1,
            0,
            2,
            3,
            1,
            8,
            2,
            9,
            3,
            7,
            3,
            7,
            7,
            0,
            7,
            0,
            6,
            1,
            2,
            8,
            6,
            2,
            5,
            2,
            8,
            6,
            3,
            6,
            6,
            6,
            4,
            0,
            9,
            5,
            1,
            1,
            8,
            3,
            6,
            0,
            2,
            1,
            8,
            0,
            3,
            6,
            2,
            8,
            5,
            9,
            4,
            8,
            2,
            6,
            9,
            9,
            7,
            3,
            6,
            7,
            9,
            8,
            8,
            6,
            1,
            9,
            9,
            4,
            0,
            3,
            4,
            2,
            7,
            2,
            1,
            7,
            2,
            3,
            6,
            6,
            0,
            6,
            3,
            4,
            7,
            4,
            5,
            3,
            9,
        ],
        [
            9,
            2,
            8,
            2,
            8,
            6,
            4,
            3,
            8,
            4,
            8,
            0,
            7,
            9,
            0,
            2,
            6,
            0,
            9,
            7,
            5,
            3,
            4,
            7,
            7,
            6,
            4,
            3,
            6,
            5,
            7,
            3,
            0,
            1,
            9,
            2,
            4,
            5,
            7,
            6,
            1,
            6,
            9,
            3,
            5,
            3,
            5,
            2,
            5,
            9,
            1,
            1,
            5,
            2,
            5,
            1,
            0,
            0,
            9,
            1,
            0,
            3,
            5,
            6,
            3,
            8,
            1,
            9,
            7,
        ],
        [9, 1, 4, 5, 3, 4, 4, 8, 4, 6, 1, 8, 7, 0, 1, 1, 1, 9],
        [
            4,
            6,
            9,
            6,
            9,
            4,
            9,
            3,
            2,
            3,
            0,
            5,
            5,
            6,
            4,
            7,
            3,
            4,
            7,
            0,
            2,
            4,
            0,
            1,
            5,
            4,
            9,
            3,
            6,
            9,
            4,
            6,
            0,
            5,
            8,
            5,
            2,
            8,
            9,
            3,
            1,
            7,
            0,
            7,
            9,
            4,
            9,
            6,
            4,
            0,
            5,
            1,
            5,
            3,
            2,
            6,
            8,
            4,
            8,
            5,
            6,
            8,
            5,
            5,
            5,
            4,
            8,
            5,
            2,
            1,
            2,
            5,
            4,
        ],
        [7, 5, 9, 6, 2, 5, 5, 2, 3, 3, 7, 8, 6, 5, 8, 8, 6],
        [
            5,
            7,
            4,
            4,
            9,
            6,
            4,
            6,
            5,
            7,
            9,
            1,
            0,
            8,
            6,
            9,
            8,
            3,
            5,
            7,
            8,
            5,
            9,
            9,
            0,
            2,
            3,
            5,
            2,
            5,
            3,
            3,
            4,
            3,
            0,
            5,
            6,
            6,
            6,
            3,
            4,
            7,
            4,
            3,
            8,
            3,
            8,
            1,
            7,
            2,
            6,
            3,
            4,
            2,
            2,
            3,
            2,
            6,
            3,
            7,
            9,
            8,
            5,
            1,
            1,
            7,
            8,
            7,
            8,
            5,
            0,
            7,
            6,
            8,
            4,
            7,
            3,
            6,
            2,
            8,
            0,
            7,
            5,
        ],
        [5, 7, 3, 5, 3, 6, 5, 1, 3, 8, 9, 9, 9, 1, 9, 0, 4, 9],
        [
            8,
            9,
            5,
            8,
            5,
            5,
            6,
            9,
            1,
            6,
            4,
            2,
            4,
            8,
            7,
            7,
            9,
            3,
            1,
            6,
            6,
            4,
            2,
            3,
            9,
            6,
            1,
            1,
            8,
            2,
            2,
            4,
            5,
            7,
            0,
            3,
            9,
            0,
            6,
            5,
            1,
            7,
            4,
            1,
            9,
        ],
        [1, 0, 1, 3, 2, 9, 8, 3, 8, 1, 3, 7, 0, 3, 5, 1, 7, 8, 0, 9, 7, 9],
        [
            8,
            7,
            3,
            2,
            8,
            8,
            0,
            3,
            7,
            5,
            3,
            5,
            4,
            3,
            7,
            8,
            3,
            4,
            5,
            0,
            1,
            7,
            1,
            8,
            5,
            0,
            8,
            1,
            2,
            3,
            6,
            1,
            7,
            3,
            3,
            3,
            4,
            1,
            1,
            3,
            0,
            0,
            4,
            8,
            0,
            0,
            9,
            7,
            1,
            0,
            8,
            3,
            4,
            2,
            2,
            2,
            5,
            9,
            4,
            4,
        ],
        [
            8,
            6,
            7,
            0,
            2,
            4,
            6,
            8,
            2,
            2,
            6,
            6,
            5,
            9,
            8,
            3,
            5,
            3,
            8,
            7,
            9,
            7,
            8,
            5,
            6,
            5,
            7,
            1,
            1,
            9,
            4,
            2,
        ],
        [5, 2, 2, 3],
        [9, 9],
    ];
    assertEquals(inputs.map(plusOne), outputs);
});
