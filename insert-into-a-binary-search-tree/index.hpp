// +build ignore

#pragma once

#include <stdio.h>
import leetcode_treenode_cpp.TreeNode;
using namespace leetcode_treenode_cpp;

namespace insert_into_a_binary_search_tree
{
    class Solution
    {
    public:
        TreeNode *insertIntoBST(TreeNode *root, int val)
        {
            if (root == NULL)
            {
                TreeNode *node = new TreeNode(val);
                return node;
            }
            if (root->val > val)
                root->left = insertIntoBST(root->left, val);
            if (root->val < val)
                root->right = insertIntoBST(root->right, val);
            return root;
        }
    };

}
