import Skiplist from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.151.0/testing/asserts.ts";

Deno.test("design-skiplist", () => {
    const skiplist: Skiplist = Skiplist();
    skiplist.add(1);
    skiplist.add(2);
    skiplist.add(3);
    assertEquals(false, skiplist.search(0)); // 返回 false
    skiplist.add(4);
    assertEquals(true, skiplist.search(1)); // 返回 true
    assertEquals(false, skiplist.erase(0)); // 返回 false，0 不在跳表中
    assertEquals(true, skiplist.erase(1)); // 返回 true
    assertEquals(false, skiplist.search(1)); // 返回 false，1 已被擦除
});
