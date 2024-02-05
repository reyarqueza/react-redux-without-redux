# Redux without Redux

If you are using classic redux, you can migrate to the following React hooks:
useReducer, useContext, and createContext.

The purpose is to separate shared application state from localized component
state. If the state is only used internally by the component, use the useState
hook as usual. For state that needs to be shared among various components, use
a shared application state with useReducer, useContext, and createContext.

This example demonstrates the redux pattern described above "without redux"!

## Instructions

```
npm install
```

### Development

1. Start the local server:

```
npm start
```

2. Open the browser at the url specified in the terminal.

3. Open another terminal and run the following to start developing:

```
npm run dev
```

4. Add/edit React files in the src folder.

5. After saving, your files are built automaticallty. 
The file /public/js/bundle.js will be created in development mode.

6. Refresh the browser window.

### Production

Build the app:

```
npm run build
```

The file /public/js/bundle.js will be overwritten and minfied in production 
mode (with source maps as a separate file).
