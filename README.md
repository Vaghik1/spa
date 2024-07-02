# React SPA Technical Assignment

This project is a Single Page Application (SPA) showcasing React skills, including hooks, state management, and performance optimization.

## Features

- Home, User List, and User Details pages
- Theme switcher (light/dark mode)
- Pagination, sorting, and search functionality
- Responsive design
- Error boundary implementation

## Tech Stack

- React with TypeScript
- Create React App as the foundation
- React Router for navigation
- Styled-components for styling
- React Query for data fetching
- Context API for state management
- Webpack for bundling and optimization (provided by Create React App)

## Project Structure

The project follows a feature-based structure:

```
src/
  features/
    home/
    userList/
    userDetails/
  shared/
    components/
      ErrorBoundary/
      Navigation/
      Theme/
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Build for production: `npm run build`
4. Bundle analyze: `npm run bundle-analyze`

## Performance Considerations and Optimizations

Here's an overview of the techniques used to ensure optimal performance:

- Code splitting: Implemented using React.lazy and Suspense to load each page separately.
- Efficient data fetching: Utilized React Query for optimized data fetching, caching, and state management, reducing unnecessary network requests and improving user experience.
- Bundle optimization: Leveraged Webpack's built-in optimizations provided by Create React App to minimize bundle size and improve load times.
- Memoization: Used React's useMemo hook where appropriate to prevent unnecessary re-renders and optimize component performance. Have not seen the necessity to use useCallback.
- Bundle analysis: Employed webpack-bundle-analyzer to identify and address potential issues. For example, initially used the framer-motion package for page transitions, but after observing its significant impact on bundle size, removed it and implemented custom logic instead. This approach helped in keeping the bundle size optimized.

## Note on Server-Side Rendering (SSR)

Server-side rendering has not been implemented in this project due to the complexity of adding it to a Create React App setup. For projects requiring SSR, I would prefer to use a framework like Next.js or Remix from the beginning, as they provide built-in SSR capabilities and offer a more streamlined development experience for server-rendered React applications.