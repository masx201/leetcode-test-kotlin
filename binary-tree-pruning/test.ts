import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";

import pruneTree from "./index.ts";

Deno.test("binary-tree-pruning", () => {
    const inputs = [
        {
            val: 1,
            left: {
                val: 0,
                left: { val: 0, left: null, right: null },
                right: { val: 0, left: null, right: null },
            },
            right: {
                val: 1,
                left: { val: 0, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
        },
        {
            val: 1,
            left: {
                val: 1,
                left: {
                    val: 1,
                    left: { val: 0, left: null, right: null },
                    right: null,
                },
                right: { val: 1, left: null, right: null },
            },
            right: {
                val: 0,
                left: { val: 0, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
        },
    ];
    const outputs = [
        {
            val: 1,
            left: null,
            right: {
                val: 1,
                left: null,
                right: { val: 1, left: null, right: null },
            },
        },
        {
            val: 1,
            left: {
                val: 1,
                left: { val: 1, left: null, right: null },
                right: { val: 1, left: null, right: null },
            },
            right: {
                val: 0,
                left: null,
                right: { val: 1, left: null, right: null },
            },
        },
    ];

    assertEquals(
        structuredClone(inputs.map((input) => pruneTree(input))),
        outputs,
    );
});
