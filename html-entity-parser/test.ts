import { assert } from "../deps.ts";
import { htmlEntityParser } from "../mod.ts";

Deno.test("html-entity-parser", () => {
    const testData: { input: string; output: string }[] = [
        {
            input: "&amp; is an HTML entity but &ambassador; is not.",
            output: "& is an HTML entity but &ambassador; is not.",
        },
        {
            input: "and I quote: &quot;...&quot;",
            output: 'and I quote: "..."',
        },
        {
            input: "Stay home! Practice on Leetcode :)",
            output: "Stay home! Practice on Leetcode :)",
        },
        {
            input: "x &gt; y &amp;&amp; x &lt; y is always false",
            output: "x > y && x < y is always false",
        },
        {
            input: "leetcode.com&frasl;problemset&frasl;all",
            output: "leetcode.com/problemset/all",
        },
    ];

    assert(
        testData.every(
            ({ input, output }) => htmlEntityParser(input) === output,
        ),
    );
});
