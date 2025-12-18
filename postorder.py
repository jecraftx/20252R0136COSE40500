def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    if not root: return []
    leftvals = self.postorderTraversal(root.left)
    rightvals = self.postorderTraversal(root.right)
    rootval = [root.val]
    return leftvals + rightvals + rootval 
