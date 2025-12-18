def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    if not root: return []
    leftvals = self.inorderTraversal(root.left)
    rootval = [root.val]
    rightvals = self.inorderTraversal(root.right)
    return leftvals + rootval + rightvals 
