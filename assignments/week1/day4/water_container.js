var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;

    var maxArea = 0;
    while (left < right) {
        var tempArea = 0;
        if (height[left] > height[right]) {
            tempArea = height[right] * (right - left);
            right--;
        }else {
            tempArea = height[left] * (right - left);
            left++;
        }
        if (tempArea > maxArea) {
            maxArea = tempArea;
        }
    }
    return maxArea;
};

console.log(maxArea([4, 5,3,1,7,2,1]));
// maxArea[1,8,6,2,5,4,8,3,7];