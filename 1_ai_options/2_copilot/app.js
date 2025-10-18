// app.js
// Computes median, mode (array of most frequent values), and average for a numeric array.

function computeStats(input) {
  if (!Array.isArray(input))
    throw new TypeError("Expected an array of numbers");

  // keep only finite numbers
  const nums = input.map(Number).filter(n => Number.isFinite(n));
  if (nums.length === 0) return { median: null, mode: [], average: null };

  // AVERAGE
  const sum = nums.reduce((s, v) => s + v, 0);
  const average = sum / nums.length;

  // MEDIAN
  const sorted = nums.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  // MODE (may be multiple)
  const freq = new Map();
  let maxFreq = 0;
  for (const n of nums) {
    const f = (freq.get(n) || 0) + 1;
    freq.set(n, f);
    if (f > maxFreq) maxFreq = f;
  }
  const mode = Array.from(freq.entries())
    .filter(([, f]) => f === maxFreq)
    .map(([v]) => Number(v));

  // If every value is unique, return empty array for mode
  const uniqueMode = maxFreq === 1 ? [] : mode;

  return { median, mode: uniqueMode, average };
}

// Example usage:
// console.log(computeStats([1,2,2,3,4])); // { median: 2, mode: [2], average: 2.4 }

module.exports = { computeStats };
