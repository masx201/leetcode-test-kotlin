import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

import MyLinkedList from "./index.ts";

Deno.test("design-linked-list", () => {
    assertEquals(
        runScript(
            [
                "MyLinkedList",
                "addAtHead",
                "addAtTail",
                "addAtIndex",
                "get",
                "deleteAtIndex",
                "get",
            ],
            [[], [1], [3], [1, 2], [1], [1], [1]],
            MyLinkedList,
        ),
        [null, null, null, null, 2, null, 3],
    );
});
Deno.test("design-linked-list", () => {
    assertEquals(
        runScript(
            [
                "MyLinkedList",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "addAtTail",
                "addAtTail",
                "addAtTail",
                "addAtTail",
                "deleteAtIndex",
                "addAtHead",
                "addAtHead",
                "get",
                "addAtTail",
                "addAtHead",
                "get",
                "addAtTail",
                "addAtIndex",
                "addAtTail",
                "addAtHead",
                "addAtHead",
                "addAtHead",
                "get",
                "addAtIndex",
                "addAtHead",
                "get",
                "addAtHead",
                "deleteAtIndex",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "addAtIndex",
                "addAtTail",
                "addAtHead",
                "get",
                "addAtTail",
                "deleteAtIndex",
                "addAtIndex",
                "deleteAtIndex",
                "addAtHead",
                "addAtTail",
                "addAtHead",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "get",
                "get",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "addAtTail",
                "addAtIndex",
                "get",
                "addAtHead",
                "addAtIndex",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "addAtIndex",
                "deleteAtIndex",
                "addAtIndex",
                "addAtHead",
                "addAtHead",
                "deleteAtIndex",
                "addAtTail",
                "deleteAtIndex",
                "addAtIndex",
                "addAtTail",
                "addAtHead",
                "get",
                "addAtIndex",
                "addAtTail",
                "addAtHead",
                "addAtHead",
                "addAtHead",
                "addAtHead",
                "addAtHead",
                "addAtHead",
                "deleteAtIndex",
                "get",
                "get",
                "addAtHead",
                "get",
                "addAtTail",
                "addAtTail",
                "addAtIndex",
                "addAtIndex",
                "addAtHead",
                "addAtTail",
                "addAtTail",
                "get",
                "addAtIndex",
                "addAtHead",
                "deleteAtIndex",
                "addAtTail",
                "get",
                "addAtHead",
                "get",
                "addAtHead",
                "deleteAtIndex",
                "get",
                "addAtTail",
                "addAtTail",
            ],
            [
                [],
                [38],
                [66],
                [61],
                [76],
                [26],
                [37],
                [8],
                [5],
                [4],
                [45],
                [4],
                [85],
                [37],
                [5],
                [93],
                [10, 23],
                [21],
                [52],
                [15],
                [47],
                [12],
                [6, 24],
                [64],
                [4],
                [31],
                [6],
                [40],
                [17],
                [15],
                [19, 2],
                [11],
                [86],
                [17],
                [55],
                [15],
                [14, 95],
                [22],
                [66],
                [95],
                [8],
                [47],
                [23],
                [39],
                [30],
                [27],
                [0],
                [99],
                [45],
                [4],
                [9, 11],
                [6],
                [81],
                [18, 32],
                [20],
                [13],
                [42],
                [37, 91],
                [36],
                [10, 37],
                [96],
                [57],
                [20],
                [89],
                [18],
                [41, 5],
                [23],
                [75],
                [7],
                [25, 51],
                [48],
                [46],
                [29],
                [85],
                [82],
                [6],
                [38],
                [14],
                [1],
                [12],
                [42],
                [42],
                [83],
                [13],
                [14, 20],
                [17, 34],
                [36],
                [58],
                [2],
                [38],
                [33, 59],
                [37],
                [15],
                [64],
                [56],
                [0],
                [40],
                [92],
                [63],
                [35],
                [62],
                [32],
            ],
            MyLinkedList,
        ),
        [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            61,
            null,
            null,
            61,
            null,
            null,
            null,
            null,
            null,
            null,
            85,
            null,
            null,
            37,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            23,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            -1,
            95,
            null,
            null,
            null,
            null,
            null,
            31,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            8,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            6,
            47,
            null,
            23,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            93,
            null,
            null,
            null,
            null,
            48,
            null,
            93,
            null,
            null,
            59,
            null,
            null,
        ],
    );
});
