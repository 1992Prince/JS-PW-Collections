// Overriding example for method with parameters
class Logger {

    logMessage(message: string, level: string): void {
        console.log(`[${level.toUpperCase()}] ${message}`);
    }

}

class AdvancedLogger extends Logger {

    override logMessage(message: string, level: string): void {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
    }

}

// 🔍 Usage
const basicLogger = new Logger();
basicLogger.logMessage("Server started", "info");
// Output: [INFO] Server started

const advLogger = new AdvancedLogger();
advLogger.logMessage("Server crashed", "error");
// Output: [2025-07-08T16:51:42.544Z] [ERROR] Server crashed
