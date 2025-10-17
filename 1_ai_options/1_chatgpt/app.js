/**
 * Sorts an array of values in ascending or descending order.
 *
 * @param {Array} arr - The array to sort.
 * @param {boolean} [ascending=true] - If true, sorts in ascending order; if false, descending.
 * @returns {Array} A new sorted array.
 */
function sortArray(arr, ascending = true) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // Create a copy so the original array isn't modified
  const sorted = [...arr].sort((a, b) => {
    if (typeof a === "string" && typeof b === "string") {
      return ascending ? a.localeCompare(b) : b.localeCompare(a);
    }
    return ascending ? a - b : b - a;
  });

  return sorted;
}

// Example usage:
console.log(sortArray([5, 3, 9, 1])); // [1, 3, 5, 9]
console.log(sortArray([5, 3, 9, 1], false)); // [9, 5, 3, 1]
console.log(sortArray(["apple", "banana", "pear"], false)); // ["pear", "banana", "apple"]
