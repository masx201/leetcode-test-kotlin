/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
export default function permute(nums: number[]): number[][] {
    if (nums.length == 0) {
        return [];
    }
    if (nums.length == 1) {
        return [nums];
    }
    if (nums.length == 2) {
        return [nums, [nums[1], nums[0]]];
    }

    const len = nums.length;
    // let result = Array.from({ length: len }).map((_v, i) => [i]);
    // // console.log(result);

    // for (let i = 0; i < len - 1; i++) {
    //     result = Array.from({ length: len })
    //         .map((_v, i) => result.map((c) => [i, ...c]))
    //         .flat()
    //         .filter((a) => a.length === new Set(a).size);
    //     // console.log(result);
    // }
    const result = storage.get(len);
    if (!result) {
        throw new Error("not found");
    }
    return result.map((a) => a.map((v) => nums[v]));
}
const entries: Array<[number, number[][]]> = [
    [
        3,
        [
            [0, 1, 2],
            [0, 2, 1],
            [1, 0, 2],
            [1, 2, 0],
            [2, 0, 1],
            [2, 1, 0],
        ],
    ],
    [
        4,
        [
            [0, 1, 2, 3],
            [0, 1, 3, 2],
            [0, 2, 1, 3],
            [0, 2, 3, 1],
            [0, 3, 1, 2],
            [0, 3, 2, 1],
            [1, 0, 2, 3],
            [1, 0, 3, 2],
            [1, 2, 0, 3],
            [1, 2, 3, 0],
            [1, 3, 0, 2],
            [1, 3, 2, 0],
            [2, 0, 1, 3],
            [2, 0, 3, 1],
            [2, 1, 0, 3],
            [2, 1, 3, 0],
            [2, 3, 0, 1],
            [2, 3, 1, 0],
            [3, 0, 1, 2],
            [3, 0, 2, 1],
            [3, 1, 0, 2],
            [3, 1, 2, 0],
            [3, 2, 0, 1],
            [3, 2, 1, 0],
        ],
    ],
    [
        5,
        [
            [0, 1, 2, 3, 4],
            [0, 1, 2, 4, 3],
            [0, 1, 3, 2, 4],
            [0, 1, 3, 4, 2],
            [0, 1, 4, 2, 3],
            [0, 1, 4, 3, 2],
            [0, 2, 1, 3, 4],
            [0, 2, 1, 4, 3],
            [0, 2, 3, 1, 4],
            [0, 2, 3, 4, 1],
            [0, 2, 4, 1, 3],
            [0, 2, 4, 3, 1],
            [0, 3, 1, 2, 4],
            [0, 3, 1, 4, 2],
            [0, 3, 2, 1, 4],
            [0, 3, 2, 4, 1],
            [0, 3, 4, 1, 2],
            [0, 3, 4, 2, 1],
            [0, 4, 1, 2, 3],
            [0, 4, 1, 3, 2],
            [0, 4, 2, 1, 3],
            [0, 4, 2, 3, 1],
            [0, 4, 3, 1, 2],
            [0, 4, 3, 2, 1],
            [1, 0, 2, 3, 4],
            [1, 0, 2, 4, 3],
            [1, 0, 3, 2, 4],
            [1, 0, 3, 4, 2],
            [1, 0, 4, 2, 3],
            [1, 0, 4, 3, 2],
            [1, 2, 0, 3, 4],
            [1, 2, 0, 4, 3],
            [1, 2, 3, 0, 4],
            [1, 2, 3, 4, 0],
            [1, 2, 4, 0, 3],
            [1, 2, 4, 3, 0],
            [1, 3, 0, 2, 4],
            [1, 3, 0, 4, 2],
            [1, 3, 2, 0, 4],
            [1, 3, 2, 4, 0],
            [1, 3, 4, 0, 2],
            [1, 3, 4, 2, 0],
            [1, 4, 0, 2, 3],
            [1, 4, 0, 3, 2],
            [1, 4, 2, 0, 3],
            [1, 4, 2, 3, 0],
            [1, 4, 3, 0, 2],
            [1, 4, 3, 2, 0],
            [2, 0, 1, 3, 4],
            [2, 0, 1, 4, 3],
            [2, 0, 3, 1, 4],
            [2, 0, 3, 4, 1],
            [2, 0, 4, 1, 3],
            [2, 0, 4, 3, 1],
            [2, 1, 0, 3, 4],
            [2, 1, 0, 4, 3],
            [2, 1, 3, 0, 4],
            [2, 1, 3, 4, 0],
            [2, 1, 4, 0, 3],
            [2, 1, 4, 3, 0],
            [2, 3, 0, 1, 4],
            [2, 3, 0, 4, 1],
            [2, 3, 1, 0, 4],
            [2, 3, 1, 4, 0],
            [2, 3, 4, 0, 1],
            [2, 3, 4, 1, 0],
            [2, 4, 0, 1, 3],
            [2, 4, 0, 3, 1],
            [2, 4, 1, 0, 3],
            [2, 4, 1, 3, 0],
            [2, 4, 3, 0, 1],
            [2, 4, 3, 1, 0],
            [3, 0, 1, 2, 4],
            [3, 0, 1, 4, 2],
            [3, 0, 2, 1, 4],
            [3, 0, 2, 4, 1],
            [3, 0, 4, 1, 2],
            [3, 0, 4, 2, 1],
            [3, 1, 0, 2, 4],
            [3, 1, 0, 4, 2],
            [3, 1, 2, 0, 4],
            [3, 1, 2, 4, 0],
            [3, 1, 4, 0, 2],
            [3, 1, 4, 2, 0],
            [3, 2, 0, 1, 4],
            [3, 2, 0, 4, 1],
            [3, 2, 1, 0, 4],
            [3, 2, 1, 4, 0],
            [3, 2, 4, 0, 1],
            [3, 2, 4, 1, 0],
            [3, 4, 0, 1, 2],
            [3, 4, 0, 2, 1],
            [3, 4, 1, 0, 2],
            [3, 4, 1, 2, 0],
            [3, 4, 2, 0, 1],
            [3, 4, 2, 1, 0],
            [4, 0, 1, 2, 3],
            [4, 0, 1, 3, 2],
            [4, 0, 2, 1, 3],
            [4, 0, 2, 3, 1],
            [4, 0, 3, 1, 2],
            [4, 0, 3, 2, 1],
            [4, 1, 0, 2, 3],
            [4, 1, 0, 3, 2],
            [4, 1, 2, 0, 3],
            [4, 1, 2, 3, 0],
            [4, 1, 3, 0, 2],
            [4, 1, 3, 2, 0],
            [4, 2, 0, 1, 3],
            [4, 2, 0, 3, 1],
            [4, 2, 1, 0, 3],
            [4, 2, 1, 3, 0],
            [4, 2, 3, 0, 1],
            [4, 2, 3, 1, 0],
            [4, 3, 0, 1, 2],
            [4, 3, 0, 2, 1],
            [4, 3, 1, 0, 2],
            [4, 3, 1, 2, 0],
            [4, 3, 2, 0, 1],
            [4, 3, 2, 1, 0],
        ],
    ],
    [
        6,
        [
            [0, 1, 2, 3, 4, 5],
            [0, 1, 2, 3, 5, 4],
            [0, 1, 2, 4, 3, 5],
            [0, 1, 2, 4, 5, 3],
            [0, 1, 2, 5, 3, 4],
            [0, 1, 2, 5, 4, 3],
            [0, 1, 3, 2, 4, 5],
            [0, 1, 3, 2, 5, 4],
            [0, 1, 3, 4, 2, 5],
            [0, 1, 3, 4, 5, 2],
            [0, 1, 3, 5, 2, 4],
            [0, 1, 3, 5, 4, 2],
            [0, 1, 4, 2, 3, 5],
            [0, 1, 4, 2, 5, 3],
            [0, 1, 4, 3, 2, 5],
            [0, 1, 4, 3, 5, 2],
            [0, 1, 4, 5, 2, 3],
            [0, 1, 4, 5, 3, 2],
            [0, 1, 5, 2, 3, 4],
            [0, 1, 5, 2, 4, 3],
            [0, 1, 5, 3, 2, 4],
            [0, 1, 5, 3, 4, 2],
            [0, 1, 5, 4, 2, 3],
            [0, 1, 5, 4, 3, 2],
            [0, 2, 1, 3, 4, 5],
            [0, 2, 1, 3, 5, 4],
            [0, 2, 1, 4, 3, 5],
            [0, 2, 1, 4, 5, 3],
            [0, 2, 1, 5, 3, 4],
            [0, 2, 1, 5, 4, 3],
            [0, 2, 3, 1, 4, 5],
            [0, 2, 3, 1, 5, 4],
            [0, 2, 3, 4, 1, 5],
            [0, 2, 3, 4, 5, 1],
            [0, 2, 3, 5, 1, 4],
            [0, 2, 3, 5, 4, 1],
            [0, 2, 4, 1, 3, 5],
            [0, 2, 4, 1, 5, 3],
            [0, 2, 4, 3, 1, 5],
            [0, 2, 4, 3, 5, 1],
            [0, 2, 4, 5, 1, 3],
            [0, 2, 4, 5, 3, 1],
            [0, 2, 5, 1, 3, 4],
            [0, 2, 5, 1, 4, 3],
            [0, 2, 5, 3, 1, 4],
            [0, 2, 5, 3, 4, 1],
            [0, 2, 5, 4, 1, 3],
            [0, 2, 5, 4, 3, 1],
            [0, 3, 1, 2, 4, 5],
            [0, 3, 1, 2, 5, 4],
            [0, 3, 1, 4, 2, 5],
            [0, 3, 1, 4, 5, 2],
            [0, 3, 1, 5, 2, 4],
            [0, 3, 1, 5, 4, 2],
            [0, 3, 2, 1, 4, 5],
            [0, 3, 2, 1, 5, 4],
            [0, 3, 2, 4, 1, 5],
            [0, 3, 2, 4, 5, 1],
            [0, 3, 2, 5, 1, 4],
            [0, 3, 2, 5, 4, 1],
            [0, 3, 4, 1, 2, 5],
            [0, 3, 4, 1, 5, 2],
            [0, 3, 4, 2, 1, 5],
            [0, 3, 4, 2, 5, 1],
            [0, 3, 4, 5, 1, 2],
            [0, 3, 4, 5, 2, 1],
            [0, 3, 5, 1, 2, 4],
            [0, 3, 5, 1, 4, 2],
            [0, 3, 5, 2, 1, 4],
            [0, 3, 5, 2, 4, 1],
            [0, 3, 5, 4, 1, 2],
            [0, 3, 5, 4, 2, 1],
            [0, 4, 1, 2, 3, 5],
            [0, 4, 1, 2, 5, 3],
            [0, 4, 1, 3, 2, 5],
            [0, 4, 1, 3, 5, 2],
            [0, 4, 1, 5, 2, 3],
            [0, 4, 1, 5, 3, 2],
            [0, 4, 2, 1, 3, 5],
            [0, 4, 2, 1, 5, 3],
            [0, 4, 2, 3, 1, 5],
            [0, 4, 2, 3, 5, 1],
            [0, 4, 2, 5, 1, 3],
            [0, 4, 2, 5, 3, 1],
            [0, 4, 3, 1, 2, 5],
            [0, 4, 3, 1, 5, 2],
            [0, 4, 3, 2, 1, 5],
            [0, 4, 3, 2, 5, 1],
            [0, 4, 3, 5, 1, 2],
            [0, 4, 3, 5, 2, 1],
            [0, 4, 5, 1, 2, 3],
            [0, 4, 5, 1, 3, 2],
            [0, 4, 5, 2, 1, 3],
            [0, 4, 5, 2, 3, 1],
            [0, 4, 5, 3, 1, 2],
            [0, 4, 5, 3, 2, 1],
            [0, 5, 1, 2, 3, 4],
            [0, 5, 1, 2, 4, 3],
            [0, 5, 1, 3, 2, 4],
            [0, 5, 1, 3, 4, 2],
            [0, 5, 1, 4, 2, 3],
            [0, 5, 1, 4, 3, 2],
            [0, 5, 2, 1, 3, 4],
            [0, 5, 2, 1, 4, 3],
            [0, 5, 2, 3, 1, 4],
            [0, 5, 2, 3, 4, 1],
            [0, 5, 2, 4, 1, 3],
            [0, 5, 2, 4, 3, 1],
            [0, 5, 3, 1, 2, 4],
            [0, 5, 3, 1, 4, 2],
            [0, 5, 3, 2, 1, 4],
            [0, 5, 3, 2, 4, 1],
            [0, 5, 3, 4, 1, 2],
            [0, 5, 3, 4, 2, 1],
            [0, 5, 4, 1, 2, 3],
            [0, 5, 4, 1, 3, 2],
            [0, 5, 4, 2, 1, 3],
            [0, 5, 4, 2, 3, 1],
            [0, 5, 4, 3, 1, 2],
            [0, 5, 4, 3, 2, 1],
            [1, 0, 2, 3, 4, 5],
            [1, 0, 2, 3, 5, 4],
            [1, 0, 2, 4, 3, 5],
            [1, 0, 2, 4, 5, 3],
            [1, 0, 2, 5, 3, 4],
            [1, 0, 2, 5, 4, 3],
            [1, 0, 3, 2, 4, 5],
            [1, 0, 3, 2, 5, 4],
            [1, 0, 3, 4, 2, 5],
            [1, 0, 3, 4, 5, 2],
            [1, 0, 3, 5, 2, 4],
            [1, 0, 3, 5, 4, 2],
            [1, 0, 4, 2, 3, 5],
            [1, 0, 4, 2, 5, 3],
            [1, 0, 4, 3, 2, 5],
            [1, 0, 4, 3, 5, 2],
            [1, 0, 4, 5, 2, 3],
            [1, 0, 4, 5, 3, 2],
            [1, 0, 5, 2, 3, 4],
            [1, 0, 5, 2, 4, 3],
            [1, 0, 5, 3, 2, 4],
            [1, 0, 5, 3, 4, 2],
            [1, 0, 5, 4, 2, 3],
            [1, 0, 5, 4, 3, 2],
            [1, 2, 0, 3, 4, 5],
            [1, 2, 0, 3, 5, 4],
            [1, 2, 0, 4, 3, 5],
            [1, 2, 0, 4, 5, 3],
            [1, 2, 0, 5, 3, 4],
            [1, 2, 0, 5, 4, 3],
            [1, 2, 3, 0, 4, 5],
            [1, 2, 3, 0, 5, 4],
            [1, 2, 3, 4, 0, 5],
            [1, 2, 3, 4, 5, 0],
            [1, 2, 3, 5, 0, 4],
            [1, 2, 3, 5, 4, 0],
            [1, 2, 4, 0, 3, 5],
            [1, 2, 4, 0, 5, 3],
            [1, 2, 4, 3, 0, 5],
            [1, 2, 4, 3, 5, 0],
            [1, 2, 4, 5, 0, 3],
            [1, 2, 4, 5, 3, 0],
            [1, 2, 5, 0, 3, 4],
            [1, 2, 5, 0, 4, 3],
            [1, 2, 5, 3, 0, 4],
            [1, 2, 5, 3, 4, 0],
            [1, 2, 5, 4, 0, 3],
            [1, 2, 5, 4, 3, 0],
            [1, 3, 0, 2, 4, 5],
            [1, 3, 0, 2, 5, 4],
            [1, 3, 0, 4, 2, 5],
            [1, 3, 0, 4, 5, 2],
            [1, 3, 0, 5, 2, 4],
            [1, 3, 0, 5, 4, 2],
            [1, 3, 2, 0, 4, 5],
            [1, 3, 2, 0, 5, 4],
            [1, 3, 2, 4, 0, 5],
            [1, 3, 2, 4, 5, 0],
            [1, 3, 2, 5, 0, 4],
            [1, 3, 2, 5, 4, 0],
            [1, 3, 4, 0, 2, 5],
            [1, 3, 4, 0, 5, 2],
            [1, 3, 4, 2, 0, 5],
            [1, 3, 4, 2, 5, 0],
            [1, 3, 4, 5, 0, 2],
            [1, 3, 4, 5, 2, 0],
            [1, 3, 5, 0, 2, 4],
            [1, 3, 5, 0, 4, 2],
            [1, 3, 5, 2, 0, 4],
            [1, 3, 5, 2, 4, 0],
            [1, 3, 5, 4, 0, 2],
            [1, 3, 5, 4, 2, 0],
            [1, 4, 0, 2, 3, 5],
            [1, 4, 0, 2, 5, 3],
            [1, 4, 0, 3, 2, 5],
            [1, 4, 0, 3, 5, 2],
            [1, 4, 0, 5, 2, 3],
            [1, 4, 0, 5, 3, 2],
            [1, 4, 2, 0, 3, 5],
            [1, 4, 2, 0, 5, 3],
            [1, 4, 2, 3, 0, 5],
            [1, 4, 2, 3, 5, 0],
            [1, 4, 2, 5, 0, 3],
            [1, 4, 2, 5, 3, 0],
            [1, 4, 3, 0, 2, 5],
            [1, 4, 3, 0, 5, 2],
            [1, 4, 3, 2, 0, 5],
            [1, 4, 3, 2, 5, 0],
            [1, 4, 3, 5, 0, 2],
            [1, 4, 3, 5, 2, 0],
            [1, 4, 5, 0, 2, 3],
            [1, 4, 5, 0, 3, 2],
            [1, 4, 5, 2, 0, 3],
            [1, 4, 5, 2, 3, 0],
            [1, 4, 5, 3, 0, 2],
            [1, 4, 5, 3, 2, 0],
            [1, 5, 0, 2, 3, 4],
            [1, 5, 0, 2, 4, 3],
            [1, 5, 0, 3, 2, 4],
            [1, 5, 0, 3, 4, 2],
            [1, 5, 0, 4, 2, 3],
            [1, 5, 0, 4, 3, 2],
            [1, 5, 2, 0, 3, 4],
            [1, 5, 2, 0, 4, 3],
            [1, 5, 2, 3, 0, 4],
            [1, 5, 2, 3, 4, 0],
            [1, 5, 2, 4, 0, 3],
            [1, 5, 2, 4, 3, 0],
            [1, 5, 3, 0, 2, 4],
            [1, 5, 3, 0, 4, 2],
            [1, 5, 3, 2, 0, 4],
            [1, 5, 3, 2, 4, 0],
            [1, 5, 3, 4, 0, 2],
            [1, 5, 3, 4, 2, 0],
            [1, 5, 4, 0, 2, 3],
            [1, 5, 4, 0, 3, 2],
            [1, 5, 4, 2, 0, 3],
            [1, 5, 4, 2, 3, 0],
            [1, 5, 4, 3, 0, 2],
            [1, 5, 4, 3, 2, 0],
            [2, 0, 1, 3, 4, 5],
            [2, 0, 1, 3, 5, 4],
            [2, 0, 1, 4, 3, 5],
            [2, 0, 1, 4, 5, 3],
            [2, 0, 1, 5, 3, 4],
            [2, 0, 1, 5, 4, 3],
            [2, 0, 3, 1, 4, 5],
            [2, 0, 3, 1, 5, 4],
            [2, 0, 3, 4, 1, 5],
            [2, 0, 3, 4, 5, 1],
            [2, 0, 3, 5, 1, 4],
            [2, 0, 3, 5, 4, 1],
            [2, 0, 4, 1, 3, 5],
            [2, 0, 4, 1, 5, 3],
            [2, 0, 4, 3, 1, 5],
            [2, 0, 4, 3, 5, 1],
            [2, 0, 4, 5, 1, 3],
            [2, 0, 4, 5, 3, 1],
            [2, 0, 5, 1, 3, 4],
            [2, 0, 5, 1, 4, 3],
            [2, 0, 5, 3, 1, 4],
            [2, 0, 5, 3, 4, 1],
            [2, 0, 5, 4, 1, 3],
            [2, 0, 5, 4, 3, 1],
            [2, 1, 0, 3, 4, 5],
            [2, 1, 0, 3, 5, 4],
            [2, 1, 0, 4, 3, 5],
            [2, 1, 0, 4, 5, 3],
            [2, 1, 0, 5, 3, 4],
            [2, 1, 0, 5, 4, 3],
            [2, 1, 3, 0, 4, 5],
            [2, 1, 3, 0, 5, 4],
            [2, 1, 3, 4, 0, 5],
            [2, 1, 3, 4, 5, 0],
            [2, 1, 3, 5, 0, 4],
            [2, 1, 3, 5, 4, 0],
            [2, 1, 4, 0, 3, 5],
            [2, 1, 4, 0, 5, 3],
            [2, 1, 4, 3, 0, 5],
            [2, 1, 4, 3, 5, 0],
            [2, 1, 4, 5, 0, 3],
            [2, 1, 4, 5, 3, 0],
            [2, 1, 5, 0, 3, 4],
            [2, 1, 5, 0, 4, 3],
            [2, 1, 5, 3, 0, 4],
            [2, 1, 5, 3, 4, 0],
            [2, 1, 5, 4, 0, 3],
            [2, 1, 5, 4, 3, 0],
            [2, 3, 0, 1, 4, 5],
            [2, 3, 0, 1, 5, 4],
            [2, 3, 0, 4, 1, 5],
            [2, 3, 0, 4, 5, 1],
            [2, 3, 0, 5, 1, 4],
            [2, 3, 0, 5, 4, 1],
            [2, 3, 1, 0, 4, 5],
            [2, 3, 1, 0, 5, 4],
            [2, 3, 1, 4, 0, 5],
            [2, 3, 1, 4, 5, 0],
            [2, 3, 1, 5, 0, 4],
            [2, 3, 1, 5, 4, 0],
            [2, 3, 4, 0, 1, 5],
            [2, 3, 4, 0, 5, 1],
            [2, 3, 4, 1, 0, 5],
            [2, 3, 4, 1, 5, 0],
            [2, 3, 4, 5, 0, 1],
            [2, 3, 4, 5, 1, 0],
            [2, 3, 5, 0, 1, 4],
            [2, 3, 5, 0, 4, 1],
            [2, 3, 5, 1, 0, 4],
            [2, 3, 5, 1, 4, 0],
            [2, 3, 5, 4, 0, 1],
            [2, 3, 5, 4, 1, 0],
            [2, 4, 0, 1, 3, 5],
            [2, 4, 0, 1, 5, 3],
            [2, 4, 0, 3, 1, 5],
            [2, 4, 0, 3, 5, 1],
            [2, 4, 0, 5, 1, 3],
            [2, 4, 0, 5, 3, 1],
            [2, 4, 1, 0, 3, 5],
            [2, 4, 1, 0, 5, 3],
            [2, 4, 1, 3, 0, 5],
            [2, 4, 1, 3, 5, 0],
            [2, 4, 1, 5, 0, 3],
            [2, 4, 1, 5, 3, 0],
            [2, 4, 3, 0, 1, 5],
            [2, 4, 3, 0, 5, 1],
            [2, 4, 3, 1, 0, 5],
            [2, 4, 3, 1, 5, 0],
            [2, 4, 3, 5, 0, 1],
            [2, 4, 3, 5, 1, 0],
            [2, 4, 5, 0, 1, 3],
            [2, 4, 5, 0, 3, 1],
            [2, 4, 5, 1, 0, 3],
            [2, 4, 5, 1, 3, 0],
            [2, 4, 5, 3, 0, 1],
            [2, 4, 5, 3, 1, 0],
            [2, 5, 0, 1, 3, 4],
            [2, 5, 0, 1, 4, 3],
            [2, 5, 0, 3, 1, 4],
            [2, 5, 0, 3, 4, 1],
            [2, 5, 0, 4, 1, 3],
            [2, 5, 0, 4, 3, 1],
            [2, 5, 1, 0, 3, 4],
            [2, 5, 1, 0, 4, 3],
            [2, 5, 1, 3, 0, 4],
            [2, 5, 1, 3, 4, 0],
            [2, 5, 1, 4, 0, 3],
            [2, 5, 1, 4, 3, 0],
            [2, 5, 3, 0, 1, 4],
            [2, 5, 3, 0, 4, 1],
            [2, 5, 3, 1, 0, 4],
            [2, 5, 3, 1, 4, 0],
            [2, 5, 3, 4, 0, 1],
            [2, 5, 3, 4, 1, 0],
            [2, 5, 4, 0, 1, 3],
            [2, 5, 4, 0, 3, 1],
            [2, 5, 4, 1, 0, 3],
            [2, 5, 4, 1, 3, 0],
            [2, 5, 4, 3, 0, 1],
            [2, 5, 4, 3, 1, 0],
            [3, 0, 1, 2, 4, 5],
            [3, 0, 1, 2, 5, 4],
            [3, 0, 1, 4, 2, 5],
            [3, 0, 1, 4, 5, 2],
            [3, 0, 1, 5, 2, 4],
            [3, 0, 1, 5, 4, 2],
            [3, 0, 2, 1, 4, 5],
            [3, 0, 2, 1, 5, 4],
            [3, 0, 2, 4, 1, 5],
            [3, 0, 2, 4, 5, 1],
            [3, 0, 2, 5, 1, 4],
            [3, 0, 2, 5, 4, 1],
            [3, 0, 4, 1, 2, 5],
            [3, 0, 4, 1, 5, 2],
            [3, 0, 4, 2, 1, 5],
            [3, 0, 4, 2, 5, 1],
            [3, 0, 4, 5, 1, 2],
            [3, 0, 4, 5, 2, 1],
            [3, 0, 5, 1, 2, 4],
            [3, 0, 5, 1, 4, 2],
            [3, 0, 5, 2, 1, 4],
            [3, 0, 5, 2, 4, 1],
            [3, 0, 5, 4, 1, 2],
            [3, 0, 5, 4, 2, 1],
            [3, 1, 0, 2, 4, 5],
            [3, 1, 0, 2, 5, 4],
            [3, 1, 0, 4, 2, 5],
            [3, 1, 0, 4, 5, 2],
            [3, 1, 0, 5, 2, 4],
            [3, 1, 0, 5, 4, 2],
            [3, 1, 2, 0, 4, 5],
            [3, 1, 2, 0, 5, 4],
            [3, 1, 2, 4, 0, 5],
            [3, 1, 2, 4, 5, 0],
            [3, 1, 2, 5, 0, 4],
            [3, 1, 2, 5, 4, 0],
            [3, 1, 4, 0, 2, 5],
            [3, 1, 4, 0, 5, 2],
            [3, 1, 4, 2, 0, 5],
            [3, 1, 4, 2, 5, 0],
            [3, 1, 4, 5, 0, 2],
            [3, 1, 4, 5, 2, 0],
            [3, 1, 5, 0, 2, 4],
            [3, 1, 5, 0, 4, 2],
            [3, 1, 5, 2, 0, 4],
            [3, 1, 5, 2, 4, 0],
            [3, 1, 5, 4, 0, 2],
            [3, 1, 5, 4, 2, 0],
            [3, 2, 0, 1, 4, 5],
            [3, 2, 0, 1, 5, 4],
            [3, 2, 0, 4, 1, 5],
            [3, 2, 0, 4, 5, 1],
            [3, 2, 0, 5, 1, 4],
            [3, 2, 0, 5, 4, 1],
            [3, 2, 1, 0, 4, 5],
            [3, 2, 1, 0, 5, 4],
            [3, 2, 1, 4, 0, 5],
            [3, 2, 1, 4, 5, 0],
            [3, 2, 1, 5, 0, 4],
            [3, 2, 1, 5, 4, 0],
            [3, 2, 4, 0, 1, 5],
            [3, 2, 4, 0, 5, 1],
            [3, 2, 4, 1, 0, 5],
            [3, 2, 4, 1, 5, 0],
            [3, 2, 4, 5, 0, 1],
            [3, 2, 4, 5, 1, 0],
            [3, 2, 5, 0, 1, 4],
            [3, 2, 5, 0, 4, 1],
            [3, 2, 5, 1, 0, 4],
            [3, 2, 5, 1, 4, 0],
            [3, 2, 5, 4, 0, 1],
            [3, 2, 5, 4, 1, 0],
            [3, 4, 0, 1, 2, 5],
            [3, 4, 0, 1, 5, 2],
            [3, 4, 0, 2, 1, 5],
            [3, 4, 0, 2, 5, 1],
            [3, 4, 0, 5, 1, 2],
            [3, 4, 0, 5, 2, 1],
            [3, 4, 1, 0, 2, 5],
            [3, 4, 1, 0, 5, 2],
            [3, 4, 1, 2, 0, 5],
            [3, 4, 1, 2, 5, 0],
            [3, 4, 1, 5, 0, 2],
            [3, 4, 1, 5, 2, 0],
            [3, 4, 2, 0, 1, 5],
            [3, 4, 2, 0, 5, 1],
            [3, 4, 2, 1, 0, 5],
            [3, 4, 2, 1, 5, 0],
            [3, 4, 2, 5, 0, 1],
            [3, 4, 2, 5, 1, 0],
            [3, 4, 5, 0, 1, 2],
            [3, 4, 5, 0, 2, 1],
            [3, 4, 5, 1, 0, 2],
            [3, 4, 5, 1, 2, 0],
            [3, 4, 5, 2, 0, 1],
            [3, 4, 5, 2, 1, 0],
            [3, 5, 0, 1, 2, 4],
            [3, 5, 0, 1, 4, 2],
            [3, 5, 0, 2, 1, 4],
            [3, 5, 0, 2, 4, 1],
            [3, 5, 0, 4, 1, 2],
            [3, 5, 0, 4, 2, 1],
            [3, 5, 1, 0, 2, 4],
            [3, 5, 1, 0, 4, 2],
            [3, 5, 1, 2, 0, 4],
            [3, 5, 1, 2, 4, 0],
            [3, 5, 1, 4, 0, 2],
            [3, 5, 1, 4, 2, 0],
            [3, 5, 2, 0, 1, 4],
            [3, 5, 2, 0, 4, 1],
            [3, 5, 2, 1, 0, 4],
            [3, 5, 2, 1, 4, 0],
            [3, 5, 2, 4, 0, 1],
            [3, 5, 2, 4, 1, 0],
            [3, 5, 4, 0, 1, 2],
            [3, 5, 4, 0, 2, 1],
            [3, 5, 4, 1, 0, 2],
            [3, 5, 4, 1, 2, 0],
            [3, 5, 4, 2, 0, 1],
            [3, 5, 4, 2, 1, 0],
            [4, 0, 1, 2, 3, 5],
            [4, 0, 1, 2, 5, 3],
            [4, 0, 1, 3, 2, 5],
            [4, 0, 1, 3, 5, 2],
            [4, 0, 1, 5, 2, 3],
            [4, 0, 1, 5, 3, 2],
            [4, 0, 2, 1, 3, 5],
            [4, 0, 2, 1, 5, 3],
            [4, 0, 2, 3, 1, 5],
            [4, 0, 2, 3, 5, 1],
            [4, 0, 2, 5, 1, 3],
            [4, 0, 2, 5, 3, 1],
            [4, 0, 3, 1, 2, 5],
            [4, 0, 3, 1, 5, 2],
            [4, 0, 3, 2, 1, 5],
            [4, 0, 3, 2, 5, 1],
            [4, 0, 3, 5, 1, 2],
            [4, 0, 3, 5, 2, 1],
            [4, 0, 5, 1, 2, 3],
            [4, 0, 5, 1, 3, 2],
            [4, 0, 5, 2, 1, 3],
            [4, 0, 5, 2, 3, 1],
            [4, 0, 5, 3, 1, 2],
            [4, 0, 5, 3, 2, 1],
            [4, 1, 0, 2, 3, 5],
            [4, 1, 0, 2, 5, 3],
            [4, 1, 0, 3, 2, 5],
            [4, 1, 0, 3, 5, 2],
            [4, 1, 0, 5, 2, 3],
            [4, 1, 0, 5, 3, 2],
            [4, 1, 2, 0, 3, 5],
            [4, 1, 2, 0, 5, 3],
            [4, 1, 2, 3, 0, 5],
            [4, 1, 2, 3, 5, 0],
            [4, 1, 2, 5, 0, 3],
            [4, 1, 2, 5, 3, 0],
            [4, 1, 3, 0, 2, 5],
            [4, 1, 3, 0, 5, 2],
            [4, 1, 3, 2, 0, 5],
            [4, 1, 3, 2, 5, 0],
            [4, 1, 3, 5, 0, 2],
            [4, 1, 3, 5, 2, 0],
            [4, 1, 5, 0, 2, 3],
            [4, 1, 5, 0, 3, 2],
            [4, 1, 5, 2, 0, 3],
            [4, 1, 5, 2, 3, 0],
            [4, 1, 5, 3, 0, 2],
            [4, 1, 5, 3, 2, 0],
            [4, 2, 0, 1, 3, 5],
            [4, 2, 0, 1, 5, 3],
            [4, 2, 0, 3, 1, 5],
            [4, 2, 0, 3, 5, 1],
            [4, 2, 0, 5, 1, 3],
            [4, 2, 0, 5, 3, 1],
            [4, 2, 1, 0, 3, 5],
            [4, 2, 1, 0, 5, 3],
            [4, 2, 1, 3, 0, 5],
            [4, 2, 1, 3, 5, 0],
            [4, 2, 1, 5, 0, 3],
            [4, 2, 1, 5, 3, 0],
            [4, 2, 3, 0, 1, 5],
            [4, 2, 3, 0, 5, 1],
            [4, 2, 3, 1, 0, 5],
            [4, 2, 3, 1, 5, 0],
            [4, 2, 3, 5, 0, 1],
            [4, 2, 3, 5, 1, 0],
            [4, 2, 5, 0, 1, 3],
            [4, 2, 5, 0, 3, 1],
            [4, 2, 5, 1, 0, 3],
            [4, 2, 5, 1, 3, 0],
            [4, 2, 5, 3, 0, 1],
            [4, 2, 5, 3, 1, 0],
            [4, 3, 0, 1, 2, 5],
            [4, 3, 0, 1, 5, 2],
            [4, 3, 0, 2, 1, 5],
            [4, 3, 0, 2, 5, 1],
            [4, 3, 0, 5, 1, 2],
            [4, 3, 0, 5, 2, 1],
            [4, 3, 1, 0, 2, 5],
            [4, 3, 1, 0, 5, 2],
            [4, 3, 1, 2, 0, 5],
            [4, 3, 1, 2, 5, 0],
            [4, 3, 1, 5, 0, 2],
            [4, 3, 1, 5, 2, 0],
            [4, 3, 2, 0, 1, 5],
            [4, 3, 2, 0, 5, 1],
            [4, 3, 2, 1, 0, 5],
            [4, 3, 2, 1, 5, 0],
            [4, 3, 2, 5, 0, 1],
            [4, 3, 2, 5, 1, 0],
            [4, 3, 5, 0, 1, 2],
            [4, 3, 5, 0, 2, 1],
            [4, 3, 5, 1, 0, 2],
            [4, 3, 5, 1, 2, 0],
            [4, 3, 5, 2, 0, 1],
            [4, 3, 5, 2, 1, 0],
            [4, 5, 0, 1, 2, 3],
            [4, 5, 0, 1, 3, 2],
            [4, 5, 0, 2, 1, 3],
            [4, 5, 0, 2, 3, 1],
            [4, 5, 0, 3, 1, 2],
            [4, 5, 0, 3, 2, 1],
            [4, 5, 1, 0, 2, 3],
            [4, 5, 1, 0, 3, 2],
            [4, 5, 1, 2, 0, 3],
            [4, 5, 1, 2, 3, 0],
            [4, 5, 1, 3, 0, 2],
            [4, 5, 1, 3, 2, 0],
            [4, 5, 2, 0, 1, 3],
            [4, 5, 2, 0, 3, 1],
            [4, 5, 2, 1, 0, 3],
            [4, 5, 2, 1, 3, 0],
            [4, 5, 2, 3, 0, 1],
            [4, 5, 2, 3, 1, 0],
            [4, 5, 3, 0, 1, 2],
            [4, 5, 3, 0, 2, 1],
            [4, 5, 3, 1, 0, 2],
            [4, 5, 3, 1, 2, 0],
            [4, 5, 3, 2, 0, 1],
            [4, 5, 3, 2, 1, 0],
            [5, 0, 1, 2, 3, 4],
            [5, 0, 1, 2, 4, 3],
            [5, 0, 1, 3, 2, 4],
            [5, 0, 1, 3, 4, 2],
            [5, 0, 1, 4, 2, 3],
            [5, 0, 1, 4, 3, 2],
            [5, 0, 2, 1, 3, 4],
            [5, 0, 2, 1, 4, 3],
            [5, 0, 2, 3, 1, 4],
            [5, 0, 2, 3, 4, 1],
            [5, 0, 2, 4, 1, 3],
            [5, 0, 2, 4, 3, 1],
            [5, 0, 3, 1, 2, 4],
            [5, 0, 3, 1, 4, 2],
            [5, 0, 3, 2, 1, 4],
            [5, 0, 3, 2, 4, 1],
            [5, 0, 3, 4, 1, 2],
            [5, 0, 3, 4, 2, 1],
            [5, 0, 4, 1, 2, 3],
            [5, 0, 4, 1, 3, 2],
            [5, 0, 4, 2, 1, 3],
            [5, 0, 4, 2, 3, 1],
            [5, 0, 4, 3, 1, 2],
            [5, 0, 4, 3, 2, 1],
            [5, 1, 0, 2, 3, 4],
            [5, 1, 0, 2, 4, 3],
            [5, 1, 0, 3, 2, 4],
            [5, 1, 0, 3, 4, 2],
            [5, 1, 0, 4, 2, 3],
            [5, 1, 0, 4, 3, 2],
            [5, 1, 2, 0, 3, 4],
            [5, 1, 2, 0, 4, 3],
            [5, 1, 2, 3, 0, 4],
            [5, 1, 2, 3, 4, 0],
            [5, 1, 2, 4, 0, 3],
            [5, 1, 2, 4, 3, 0],
            [5, 1, 3, 0, 2, 4],
            [5, 1, 3, 0, 4, 2],
            [5, 1, 3, 2, 0, 4],
            [5, 1, 3, 2, 4, 0],
            [5, 1, 3, 4, 0, 2],
            [5, 1, 3, 4, 2, 0],
            [5, 1, 4, 0, 2, 3],
            [5, 1, 4, 0, 3, 2],
            [5, 1, 4, 2, 0, 3],
            [5, 1, 4, 2, 3, 0],
            [5, 1, 4, 3, 0, 2],
            [5, 1, 4, 3, 2, 0],
            [5, 2, 0, 1, 3, 4],
            [5, 2, 0, 1, 4, 3],
            [5, 2, 0, 3, 1, 4],
            [5, 2, 0, 3, 4, 1],
            [5, 2, 0, 4, 1, 3],
            [5, 2, 0, 4, 3, 1],
            [5, 2, 1, 0, 3, 4],
            [5, 2, 1, 0, 4, 3],
            [5, 2, 1, 3, 0, 4],
            [5, 2, 1, 3, 4, 0],
            [5, 2, 1, 4, 0, 3],
            [5, 2, 1, 4, 3, 0],
            [5, 2, 3, 0, 1, 4],
            [5, 2, 3, 0, 4, 1],
            [5, 2, 3, 1, 0, 4],
            [5, 2, 3, 1, 4, 0],
            [5, 2, 3, 4, 0, 1],
            [5, 2, 3, 4, 1, 0],
            [5, 2, 4, 0, 1, 3],
            [5, 2, 4, 0, 3, 1],
            [5, 2, 4, 1, 0, 3],
            [5, 2, 4, 1, 3, 0],
            [5, 2, 4, 3, 0, 1],
            [5, 2, 4, 3, 1, 0],
            [5, 3, 0, 1, 2, 4],
            [5, 3, 0, 1, 4, 2],
            [5, 3, 0, 2, 1, 4],
            [5, 3, 0, 2, 4, 1],
            [5, 3, 0, 4, 1, 2],
            [5, 3, 0, 4, 2, 1],
            [5, 3, 1, 0, 2, 4],
            [5, 3, 1, 0, 4, 2],
            [5, 3, 1, 2, 0, 4],
            [5, 3, 1, 2, 4, 0],
            [5, 3, 1, 4, 0, 2],
            [5, 3, 1, 4, 2, 0],
            [5, 3, 2, 0, 1, 4],
            [5, 3, 2, 0, 4, 1],
            [5, 3, 2, 1, 0, 4],
            [5, 3, 2, 1, 4, 0],
            [5, 3, 2, 4, 0, 1],
            [5, 3, 2, 4, 1, 0],
            [5, 3, 4, 0, 1, 2],
            [5, 3, 4, 0, 2, 1],
            [5, 3, 4, 1, 0, 2],
            [5, 3, 4, 1, 2, 0],
            [5, 3, 4, 2, 0, 1],
            [5, 3, 4, 2, 1, 0],
            [5, 4, 0, 1, 2, 3],
            [5, 4, 0, 1, 3, 2],
            [5, 4, 0, 2, 1, 3],
            [5, 4, 0, 2, 3, 1],
            [5, 4, 0, 3, 1, 2],
            [5, 4, 0, 3, 2, 1],
            [5, 4, 1, 0, 2, 3],
            [5, 4, 1, 0, 3, 2],
            [5, 4, 1, 2, 0, 3],
            [5, 4, 1, 2, 3, 0],
            [5, 4, 1, 3, 0, 2],
            [5, 4, 1, 3, 2, 0],
            [5, 4, 2, 0, 1, 3],
            [5, 4, 2, 0, 3, 1],
            [5, 4, 2, 1, 0, 3],
            [5, 4, 2, 1, 3, 0],
            [5, 4, 2, 3, 0, 1],
            [5, 4, 2, 3, 1, 0],
            [5, 4, 3, 0, 1, 2],
            [5, 4, 3, 0, 2, 1],
            [5, 4, 3, 1, 0, 2],
            [5, 4, 3, 1, 2, 0],
            [5, 4, 3, 2, 0, 1],
            [5, 4, 3, 2, 1, 0],
        ],
    ],
];
const storage: Map<number, number[][]> = new Map(entries);
// @lc code=end
