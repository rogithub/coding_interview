## TypeScript Project Setup

This project is set up to practice coding exercises in TypeScript.

### Project Structure

- `src/`: This directory holds all your TypeScript source files.
- `dist/`: This directory will contain the compiled JavaScript files.

### Usage

1.  **Place your TypeScript files in the `src` directory:** For each exercise, create a new `.ts` file inside the `src` folder (e.g., `src/exercise1.ts`).
2.  **Compile your TypeScript code:** To compile your TypeScript files into JavaScript, navigate to your project directory (`/home/ro/Documents/code/conding_interview`) in your terminal and run:
    ```bash
    npx tsc
    ```
    This will compile all `.ts` files in `src` and output the corresponding `.js` files into the `dist` directory.
3.  **Run your JavaScript code:** You can then run the compiled JavaScript files using Node.js:
    ```bash
    node dist/exercise1.js
    ```