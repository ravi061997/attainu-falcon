function reverse(head) {
   if (!head || !head.next) {
     return head;
   }
   let tmp = reverse(head.next);
   head.next.next = head;
   head.next = undefined;
   return tmp;
 }
 console.log(reverse([1,2,3,4,5]));