// Step 1: Define all supported browsers
const allBrowsers = ["chromium", "firefox", "webkit"];
// Step 2: Define temporarily blocked browsers
const blockedBrowsers = ["firefox"];

// Step 3: Function to get execution plan
function getExecutionPlan(allBrowsers, blockedBrowsers) {
  // Step 3.1: Convert blockedBrowsers array to a Set for fast lookup
  const blockedSet = new Set(blockedBrowsers);
  // Step 3.2: Filter allBrowsers to get runnable browsers (not in blockedSet)
  const runnable = allBrowsers.filter(b => !blockedSet.has(b));
  // Step 3.3: Filter allBrowsers to get blocked browsers (in blockedSet)
  const blocked = allBrowsers.filter(b => blockedSet.has(b));
  // Step 3.4: Create a printable execution plan string
  const plan = `Run on: ${runnable.join(", ")} | Skip: ${blocked.join(", ")}`;
  // Step 3.5: Return the result object
  return { runnable, blocked, plan };
}

// Step 4: Example usage of the function
const result = getExecutionPlan(allBrowsers, blockedBrowsers);
// Step 5: Print the result
console.log(result);

