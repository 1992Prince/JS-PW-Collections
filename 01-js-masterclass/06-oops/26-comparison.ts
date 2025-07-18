/**
🔹 1. Named Export

    // mathUtils.ts
    export function add(x: number, y: number): number {
    return x + y;
    }

    export function subtract(x: number, y: number): number {
    return x - y;
    }

    ✅ Importing:

    import { add, subtract } from './mathUtils';

🔸 2. Default Export

        ➕ You export a single default value from the module.

        // greet.ts
        export default function greet(name: string) {
        return `Hello, ${name}`;
        }

        ✅ Importing:

        import greet from './greet';

📊 Comparison Table: Named Export vs Default Export
| Feature                   | Named Export                           | Default Export                        |
| ------------------------- | -------------------------------------- | ------------------------------------- |
| Export Syntax             | `export { item }` or `export function` | `export default item`                 |
| Import Syntax             | `import { item }`                      | `import item`                         |
| Curly Braces in Import    | ✅ Yes                                  | ❌ No                                  |
| Multiple per file allowed | ✅ Yes (can export many things)         | ❌ Only one default export per file    |
| Rename while importing    | ✅ Yes (using `as`)                     | ✅ Yes (any name can be used)          |
| Auto-complete friendly    | ✅ Better (IDE shows all exports)       | ❌ Less clear in large modules         |
| Use case                  | Utility functions, constants, models   | Components, main config, single class |


✅ Best Practice (Recommended)

| Situation                      | Use                |
| ------------------------------ | ------------------ |
| Exporting multiple items       | **Named exports**  |
| Exporting a single main entity | **Default export** |

 */