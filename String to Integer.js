/**
 * @param {string} s
 * @return {number}
 */
myAtoi = function (s) {
    // Step 1: Trim leading whitespace
    s = s.trimStart();

    // Handle empty string
    if (!s) return 0;

    // Step 2: Determine sign
    let sign = 1;
    let start = 0;

    if (s[0] === '-') {
        sign = -1;
        start++;
    } else if (s[0] === '+') {
        start++;
    }

    // Step 3: Read digits
    let result = 0;
    for (let i = start; i < s.length; i++) {
        // Stop if non-digit encountered
        if (!/[0-9]/.test(s[i])) break;

        // Build result
        result = result * 10 + parseInt(s[i]);
    }

    // Apply sign
    result *= sign;

    // Step 4: Handle 32-bit integer bounds
    const INT_MAX = 2 ** 31 - 1;  // 2147483647
    const INT_MIN = -(2 ** 31);   // -2147483648

    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};