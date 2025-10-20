# Generative AI for Web Developers: AI-Powered Pair Programming for Full-Stack Development

## Generative AI options

### Setup ChatGPT

- Several models
- Context window: 128K tokens

```js
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
```

### Interact with ChatGPT

### Github Copilot

- In vscode
- Custom ChatGPT models
- command + i -> ask Copilot

### Copilot best practices

- Chat
- #file
- #selection
- Command + > -> accept work
- Command + / -> ask for complition
- Use comments to generate code

### Google Gemini

[Site](https://gemini.google.com/app?hl=it)

- T5 model
- Context window: 1M tokens

### Interact with Google Gemini

```js
/**
 * Logs a string to the console in a specified color using ANSI escape codes.
 * This function requires no external libraries and works in environments
 * that support ANSI codes (like Node.js and modern browser consoles).
 *
 * @param {string} text The string to be printed.
 * @param {string} colorName The name of the color (e.g., 'red', 'blue', 'green'). Defaults to 'white'.
 */
function printInColor(text, colorName = "white") {
  // Mapping of common color names to their respective ANSI escape codes (foreground colors).
  const colors = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
  };

  // The reset code is mandatory to prevent subsequent console output from being colored.
  const resetColor = "\x1b[0m";

  // Look up the code for the color name, defaulting to white if not found.
  const colorCode = colors[colorName.toLowerCase()] || colors["white"];

  console.log(colorCode + text + resetColor);
}

// --- Example Usage ---

printInColor("This message is green.", "green");
printInColor("This message is red.", "red");
printInColor(
  "This message is cyan, and was requested without external libraries!",
  "cyan"
);
printInColor(
  "This message defaults to white because the color name is unrecognized.",
  "purple"
);
```

## Front-End development

### Design UI

### Tranlsate between frameworks
