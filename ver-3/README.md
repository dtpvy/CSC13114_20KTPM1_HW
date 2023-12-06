# Todo App

## Ver 3 - Integrate API

1. Install redux

```bash
  yarn add @reduxjs/toolkit react-redux
```

2. Install axios, react-hook-form, react-router-dom

```bash
  yarn add axios react-hook-form react-router-dom
```

3. Alias

- Add alias for vite

```bash
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
```

- Add alias for tsconfig

```bash
/* Alias */
"baseUrl": "src",
"paths": {
  "@/*": ["./*"]
}
```

4. Config router by createBrowserRouter
5. Add Authorized layout and setup User global state
6. Update Todo reducer, use redux thunk
