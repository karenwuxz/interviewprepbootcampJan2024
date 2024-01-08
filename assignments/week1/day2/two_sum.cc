#include <iostream>
#include <vector>
#include <unordered_map>

// brute force O(n^2) - nested for loop

std::vector<int> solution_one(std::vector<int>& nums, int target){
    for(int i = 0; i < nums.size() - 1; i++){
        for(int j = 1; j < nums.size(); j++){
            if(nums[i] + nums[j] == target){
                return {i, j};
            }
        }
    }
    return {};
}

// Maps O(n)
// - using map to store seen elements
// - to loop up and access elements in a map has a faster time complexity

std::vector<int> solution_two(std::vector<int>& nums, int target){
    std::unordered_map<int, int> numMap;
    int size = nums.size();

    for(int i = 0; i < size; i++){
        int complement = target - nums[i];
        // count checks if element exist and will return true or false
        if(numMap.count(complement)){
            return {numMap[complement], i};
        }
        numMap[nums[i]] = i;
    }
    return {};
}

int main() {

    std::vector<int> nums{10, 6, 29, 51, 7};
    int target = 61;

    for(int i: solution_one(nums, target)) {
        std::cout << i << std::endl;
    }

    for(int i: solution_two(nums, target)) {
        std::cout << i << std::endl;
    }


    return 0;
}
