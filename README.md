# Silent Error in React Native useEffect Cleanup

This repository demonstrates a common, yet subtle bug in React Native applications involving the `useEffect` hook and its cleanup function.  The cleanup function might throw an error silently, without providing any indication in the console or error reporting.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows how to address this issue using robust error handling.

## Reproduction

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the application using your preferred React Native development environment.
4. Observe the behavior (or lack thereof) when the error occurs.

## Solution

The solution provided in `bugSolution.js` demonstrates how to gracefully handle potential errors in the `useEffect` cleanup function. This involves using a `try...catch` block to catch and log the error, preventing the application from silently failing.