var twoSum = function(nums, target) {
    // my
    let i = 0
    let j = 0

    while (i < nums.length) {
        const index = nums.findIndex((num) => num + nums[i] === target)
        if (index !== -1 && index !== i) {
            j = index
            break
        }
        i = i + 1
    }
    return [i, j]
};

// map solution
var twoSum_1 = function(nums, target) {
    const diffMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        const diffIndex = diffMap.get(target - nums[i])
        if (diffIndex >= 0) {
            return [diffIndex, i]
        }
        diffMap.set(nums[i], i)
    }
    return []
}

console.log(twoSum_1([2,3, 4], 6))