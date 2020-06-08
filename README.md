# Code Scanning JavaScript Demo

This repository demonstrates an instance of CWE-020: Improper Imput Validation. 

1. Run through the setup flow in the security tab to enable code scanning. Commit directly to master. 
2. Go to actions, and confirm that the analysis has run successfully.
3. Edit script.js and add this code snippet. Create a PR. Wait for validation. 


```js

function endsWith(x, y) {
  return x.lastIndexOf(y) === x.length - y.length;
}

```
