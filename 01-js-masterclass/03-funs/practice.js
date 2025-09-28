function fetchData(callback) {
  console.log('Fetching data from server');

  setTimeout(function () {
    const data = { name: 'Aman', age: 25 };
    callback(data);
  }, 2000);
}

// this is callback function
function displayData(data) {
  console.log('Data received:', data);
}

fetchData(displayData);
