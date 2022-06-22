import { searchSegmentLeaf } from "../mod.ts";
import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

export default class RangeModule {
    #SegmentTree_to_isRangeTracked = new WeakMap<SegmentTree, boolean>();
    #isRangeTracked(left: number, right: number, node: SegmentTree): boolean {
        // console.log("isRangeTracked", left, right, node);
        if (left > right || left > node.end || right < node.start) {
            return true;
        }
        // if (left <= node.start && right >= node.end) {
        if (node.children.length) {
            const can_cache_result = left <= node.start && right >= node.end;
            if (can_cache_result) {
                const isRangeTrackedCached = this.#SegmentTree_to_isRangeTracked
                    .get(node);
                if (typeof isRangeTrackedCached !== "undefined") {
                    return isRangeTrackedCached;
                }
            }
            // const isRangeTrackedCached = SegmentTree_to_isRangeTracked.get(node);
            // if (typeof isRangeTrackedCached !== "undefined") {
            //     console.log(node, isRangeTrackedCached);
            //     return isRangeTrackedCached;
            // } else {
            const isRangeTracked_result = node.children.every((child) =>
                this.#isRangeTracked(left, right, child)
            );
            // console.log(node, isRangeTracked_result);
            if (can_cache_result) {
                this.#SegmentTree_to_isRangeTracked.set(
                    node,
                    isRangeTracked_result,
                );
            }
            return isRangeTracked_result;
            // }
        } else {
            return node.value >= node.end - node.start + 1;
        }
        // }

        // if (node.children.length) {
        //     return node.children.every((node) => isRangeTracked(left, right, node));
        // }
    }
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0,
    );

    addRange(left: number, right: number): void {
        // console.log("addRange", left, right);
        const nodes = searchSegmentLeaf(left, right - 1, this.#root, {
            each: (node) => {
                this.#SegmentTree_to_isRangeTracked.delete(node);
                // return console.log(node);
            },
        });
        for (const node of nodes) {
            node.value = node.end - node.start + 1;
        }
        // console.log("addRange", JSON.stringify(this.#root, null, 4));
        // console.log(SegmentTree_to_isRangeTracked);
    }

    queryRange(left: number, right: number): boolean {
        // const nodes = searchSegmentLeaf(left, right - 1, this.#root);
        // return nodes.every((node) => node.value === 1);
        // console.log(SegmentTree_to_isRangeTracked);
        return this.#isRangeTracked(left, right - 1, this.#root);
    }

    removeRange(left: number, right: number): void {
        // console.log("removeRange", left, right);
        const nodes = searchSegmentLeaf(left, right - 1, this.#root, {
            each: (node) => {
                this.#SegmentTree_to_isRangeTracked.delete(node);
                // return console.log(node);
            },
        });
        for (const node of nodes) {
            node.value = 0;
        }
        // console.log(SegmentTree_to_isRangeTracked);
        // console.log("removeRange", JSON.stringify(this.#root, null, 4));
    }
}
// const SegmentTree_to_isRangeTracked = new Map<SegmentTree, boolean>();
