// two pointer
var twoSum = function(numbers, target) {
    var left = 0
    var right = numbers.length - 1;

    while (left < right) {
        if(numbers[left] + numbers[right] > target){
            // we start at the max, to decrease the sum is to decrease the mex value
            right--;
        }else if(numbers[left] + numbers[right] < target){
            // we start at the min, to increase the sum is to increase the min value
            left++;
        }else{
            // as per instruction, they want to add one to the index
            return [left + 1, right + 1];
        }
    }
    return -1;
}