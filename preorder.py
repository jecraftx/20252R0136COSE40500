def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    # root, left, right 
    if not root: return []
    rootval = [root.val]
    leftvals = self.preorderTraversal(root.left)
    rightvals = self.preorderTraversal(root.right)
    return rootval + leftvals + rightvals
