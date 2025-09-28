// 🛠️ 5. map() in Automation / Real Scripts

// ✅ Use Case 1: Extracting email IDs from API response
// below we have arr of users objects with name and email.

const users = [
  { name: 'Amit', email: 'amit@gmail.com' },
  { name: 'Rita', email: 'rita@yahoo.com' },
];

const emails = users.map((user) => user.email);
console.log(emails); // ["amit@gmail.com", "rita@yahoo.com"]
