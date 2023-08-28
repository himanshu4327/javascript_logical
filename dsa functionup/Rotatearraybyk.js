function Rotate (arr, K) {
    let tmp = 0;
    const n = arr.length;
    K = K % n;
    for (let i = 0; i < K; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };

  console.log(Rotate([1,2,3,4,5,6,7],1))