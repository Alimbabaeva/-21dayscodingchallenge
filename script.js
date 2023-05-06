// 9. Palindrome Number
var isPalindrome = function(x) {
    //Short circuit 
    if(x < 0 || (x !== 0 && x % 10 == 0))
        return false;

    let reverse = 0;
    
    while (x > reverse) {
        reverse = reverse * 10 + x % 10;
        x = ~~(x/10);
    }
    
    return x === reverse || x === ~~(reverse/10);
};



//2652. Sum Multiples
let sumOfMultiples = function (n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      result = result + i;
    }
  }

  return result;
};

//23. Merge k Sorted Lists

var mergeKLists = function(lists) {
  if (!lists.length) return null;
  
  // dummy value for simplified algo
  if (lists.length == 1) lists.push(null);
  
  var merge = function(l1, l2) {
      if (!l1) return l2;
      if (!l2) return l1;
      
      // h is dummy listnode to use as head of list
      let h = new ListNode(), c = h, n = null;

      while (l1 && l2) {
          // l1 must point to list with smallest val
          if (l1.val > l2.val) {
              [l1, l2] = [l2, l1];
          }

          // n == smallest val
          n  = l1;
          l1 = l1.next;
          
          c.next = n;
          c      = n;
      }

      // if one list is empty add remaining nodes from other list
      if (l2) c.next = l2;
      
      // strip dummy head
      return h.next;
  }

  // merge to two list into one list
  let r = lists.pop();
  while (lists.length) {
      r = merge(r, lists.pop());
  }
  
  return r;
};

// 101. Symmetric Tree
//approach: recursion Pre-order (separating sides, two pointer-recursion check)
//since we know there is mirroring for the side, we will have to traversing in a opposite way for left and right sides
//we will have two pointers that will be moving at the same pace, for both left and right side,(can also think of it as separating sides)
//then for left side, we do (Root, Right, Left)
//then for right side, we do (Root, Left, Right)
//checks are: 
//if the nodes are both null  --> return true (works for the case for only root as well.)
//if one node is null and the other is not --> return false (we know the nodes are not the same)
//if the nodes have the same value --> if not return false

var isSymmetric = function(root) {
    
    function helper(lRoot, rRoot){
        
        if(lRoot == null && rRoot == null) return true; //if both are null, we know so far everything is the same
        
        if(!lRoot || !rRoot) return false;  //if one of them is null, we know the nodes dont match
        
        if(lRoot.val != rRoot.val) return false; //if the root.values dont match for both nodes, we know the nodes are not the same
        
        return helper(lRoot.right, rRoot.left) && helper(lRoot.left, rRoot.right);
    }
    return helper(root.left, root.right);
};
