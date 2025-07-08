/**
 * 📘 Setting Up TypeScript with ts-node in a Node.js Project
 * 
 * This guide helps you set up and run .ts files using ts-node, with proper tsconfig.json and package.json setup. No need to manually compile .ts to .js.
 * 
 * 🔧 Prerequisites
 * Node.js installed (LTS recommended)
 * 
 * Check versions:
 * node -v
 * npm -v
 * 
 * 
 * 🛠️ Step-by-Step Setup
 * 
 * ✅ 1. Create a new project folder
 * mkdir ts-project
 * cd ts-project
 * 
 * ✅ 2. Initialize package.json
 * npm init -y
 * 
 * This creates a basic package.json file to manage dependencies and scripts.
 * 📌 Why important?

        Tracks project dependencies
        Allows custom scripts like "start", "dev", etc.
        Required for npm install, ts-node, etc.

        ✅ 3. Install dependencies

        npm install --save-dev typescript ts-node @types/node

        📍 It installs locally to your project folder, not globally.

        That means: These packages will go into:
        your-project/
            ├── node_modules/
            ├── package.json
            └── package-lock.json
        You’ll see them listed under devDependencies in package.json


                | Package       | Purpose                                                         |
        | ------------- | --------------------------------------------------------------- |
        | `typescript`  | TypeScript compiler (`tsc`)                                     |
        | `ts-node`     | Directly run `.ts` files without compiling to `.js`             |
        | `@types/node` | Type definitions for Node.js global modules (e.g. `fs`, `path`) |

        ✅ Why Local Install is Better (Best Practice)
        Ensures same version across team members/projects
        Doesn't require others to globally install packages
        Safer for CI/CD pipelines
        npx allows local tools to run as if they were global

        🔧 When Should You Use Global Install?
        Use global install only for tools you use across projects repeatedly, like:
        npm install -g nodemon
        npm install -g typescript   # if you want `tsc` available globally

        But for team/shared projects, always prefer local install + npx ✅



        ✅ 4. Create tsconfig.json 
        npx tsc --init

        Now edit the file as below:

        {
        "compilerOptions": {
            "target": "ES2020",              
            "module": "CommonJS",           
            "moduleResolution": "node",     
            "esModuleInterop": true,        
            "strict": true,                 
            "skipLibCheck": true,           
            "forceConsistentCasingInFileNames": true
        }
        }

        📌 Why important?

        Controls how TypeScript compiles your code
        CommonJS is standard for Node.js
        strict enables strong typing and catches errors early

        ✅ 5. Create your .ts file
        Create a file named `index.ts` and write your typescript code

        ✅ 6. Run the .ts file using ts-node
        You have 2 options:
        Option A: Use npx (without installing globally)
        npx ts-node index.ts

        Option B: Add a custom script in package.json
        "scripts": {
        "start": "ts-node index.ts"
        }

        Now run with: npm start

        📌 Importance of Files
🔹 package.json
• Defines your project as a Node.js package
• Lists your dependencies (like TypeScript and ts-node)
• Contains scripts for running, building, and testing your code
• Helps VSCode understand what tools are available to run your code


🔹 tsconfig.json
• Configures the TypeScript compiler options
• Defines how strict the type checking should be
• Specifies input/output directories for your TypeScript files
• Controls which JavaScript features to target
• Tells VSCode how to interpret your TypeScript code


🔍 What is npx?

👉 npx is a command that comes with npm (version 5.2+)
It lets you run Node.js packages without installing them globally.

🧠 Why npx is useful?
You can run CLI tools (like ts-node, create-react-app, eslint, etc.) directly from node_modules or temporarily without installing globally.
Prevents version conflicts between global and local tools.
Keeps your system clean — no need to do npm install -g.








 */