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
