var removeElement = function(nums,val) {
    nums=[3,2,3,1,5];
    for(var i=0; 0 <= nums.length <= 100; i++){
        if(nums[i] === val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums;
};

console.log(removeElement)
