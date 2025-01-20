# Stale Closure in setInterval within useEffect Hook

This repository demonstrates a common error in React applications involving the use of `setInterval` within the `useEffect` hook.  The problem arises when `setInterval`'s callback function doesn't capture the latest state value, leading to unexpected behavior.

The `bug.js` file contains the buggy code, where `setInterval` repeatedly logs the initial value of `count` (0) even though `setCount` updates its value. The `bugSolution.js` file provides a corrected version, leveraging functional updates to ensure that the callback always uses the most up-to-date count.