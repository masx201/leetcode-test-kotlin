// +build ignore

#include "../insert-into-a-binary-search-tree/LeetCodeTreeNodeToString.hpp"
#include "../insert-into-a-binary-search-tree/parseLeetCodeBinaryTree.hpp"
#include "../insert-into-a-binary-search-tree/printTreeNode.hpp"
#include "index.hpp"
#include "traversalTreeNode.hpp"
#include <gtest/gtest.h>
#include <iostream>
#include <string>
using namespace std;

void LeetCode1080TestExamples(std::string& root, int limit, std::string& output)
{
    TreeNode* tree = nullptr;
    int status = parseLeetCodeBinaryTree(root, &tree);

    EXPECT_EQ(0, status);

    auto nodes = vector<TreeNode*> {};
    traversalTreeNode(tree, nodes);
    printTreeNode(tree);

    // EXPECT_EQ(root, LeetCodeTreeNodeToString(tree));
    auto result = Solution().sufficientSubset(tree, limit);

    printTreeNode(result);
    EXPECT_EQ(output, LeetCodeTreeNodeToString(result));

    for (auto node : nodes) {

        delete node;
    }
};

TEST(LeetCode1080, test1)
{
    cout << "insufficient-nodes-in-root-to-leaf-paths" << endl;
    auto root = string { "[1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14]" };

    auto limit = 1;
    auto output = string("[1,2,3,4,null,null,7,8,9,null,14]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test2)
{

    auto root = string { "[5,4,8,11,null,17,4,7,1,null,null,5,3]" };

    auto limit = 22;
    auto output = string("[5,4,8,11,null,17,4,7,null,null,null,5]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test3)
{
    auto root = string { "[5,-6,-6]" };

    auto limit = 0;
    auto output = string("[]");
    LeetCode1080TestExamples(root, limit, output);
};
TEST(LeetCode1080, test4)
{
    auto root = string { "[1,2,-3,-5,null,4,null]" };

    auto limit = -1;
    auto output = string("[1,null,-3,4]");

    LeetCode1080TestExamples(root, limit, output);
};

int main(int argc, char** argv)
{
    testing::InitGoogleTest(&argc, argv);
    return RUN_ALL_TESTS();
}
