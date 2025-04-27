# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Musanze Innovation Hub Website

## Three.js Compatibility Note

The project was initially built with React Three Fiber (R3F) components, but there's a compatibility issue between the current React version (19.0.0-rc) and R3F version (8.16.6). 

### Current status
- Three.js related components are temporarily disabled to make the application work
- Static UI elements are shown instead of 3D elements
- All ThreeCanvas, ParticlesAnimation, and other 3D components imports are commented out

### To properly fix this issue in the future:
1. Wait for stable versions of both React 19 and React Three Fiber
2. Install with: `npm install three @types/three @react-three/fiber@alpha @react-three/drei@alpha`
3. Make sure to uncomment the 3D component imports in:
   - src/pages/Gallery.tsx
   - src/components/home/HeroSection.tsx  
   - src/components/home/ServicesSection.tsx

The error was specifically: `Cannot read properties of undefined (reading 'S')` during React reconciliation process when using React Three Fiber with React 19.
