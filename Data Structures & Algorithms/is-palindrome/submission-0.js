class Solution {
    isAlphanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
      // Skip non-alphanumeric
      while (l < r && !this.isAlphanumeric(s[l])) {
        l++;
      }

      while (l < r && !this.isAlphanumeric(s[r])) {
        r--;
      }

      // Compare case-insensitive
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }

      l++;
      r--;
    }

    return true;
  }
}
