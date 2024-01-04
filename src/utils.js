// Your code here
export function isPallindrome(str) {
    if (str === "") {
        return false;
    }
    else {
        return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
    }
}