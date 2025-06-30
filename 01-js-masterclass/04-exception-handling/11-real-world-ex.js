async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("API call failed:", error);
  }
}

// Call the function to see the result
fetchData();

/**
 * Output:
 * API call failed: TypeError: fetch failed
    at node:internal/deps/undici/undici:13510:13
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async fetchData (C:\Users\prince.kumar.pandey\Desktop\sid\01-js-masterclass\04-exception-handling\11-real-world-ex.js:3:20) {
  [cause]: Error: getaddrinfo ENOTFOUND api.example.com
      at GetAddrInfoReqWrap.onlookupall [as oncomplete] (node:dns:122:26) {
    errno: -3008,
    code: 'ENOTFOUND',
    syscall: 'getaddrinfo',
    hostname: 'api.example.com'
  }
}
 */

console.log()
console.log()

async function fetchData1() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("API call failed Error Message :", error.message);
  }
}

// Call the function to see the result
fetchData1();

/**
 * Output:
 * API call failed Error Message : fetch failed
 */
