#include <iostream>
#include <vector>
#include <unordered_map>

// Map O(n)
bool solution_one(std::vector<int>& nums) {
    std::unordered_map<int, bool> numMap;
    for(int num: nums){
        if(numMap.count(num)){
            return true;
        }
        numMap[num] = true;
    }
    return false;
}

int main() {
    std:: vector<int> nums{1, 5, 7, 3, 7};

    std::cout << solution_one(nums) << std::endl;
    return 0;
}