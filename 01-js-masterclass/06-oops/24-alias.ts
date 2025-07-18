// ✅ 2. Exporting with as (Rename)
// You can rename the import or export for clarity.

import { multiply as mul } from './23-mathUtils';
import LoginPage from './25-default-export';

console.log(mul(4, 5)); // Output: 20

console.log();

const page = new LoginPage();
page.login('admin', 'password');  // Logging in with admin

// 📝 Note: Default exports don't use {} in the import.
