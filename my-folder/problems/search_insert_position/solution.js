//inputs: [ 1,3,5,6]
//target: [5]


var searchInsert = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)}

    nums.push(target)
    let sortedArray = nums.sort((a,b) => {
        return a-b
    })
    return sortedArray.indexOf(target) 
};