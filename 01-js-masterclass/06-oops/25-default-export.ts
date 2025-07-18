// ✅ 3. Default Export & Import
// Useful when exporting only one main thing from a file (e.g., a class or function).

export default class LoginPage {
    login(user: string, pass: string) {
        console.log(`Logging in with ${user}`);
    }
}

// 📝 Note: Default exports don't use {} in the import.

