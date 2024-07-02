import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './shared/components/Navigation/Navigation';
import { ThemeProvider } from './shared/components/Theme/Theme';
import ErrorBoundary from './shared/components/ErrorBoundary/ErrorBoundary';

const Home = lazy(() => import('./features/home/components/Home'));
const UserList = lazy(() => import('./features/userList/components/UserList'));
const UserDetails = lazy(() => import('./features/userDetails/components/UserDetails'));
const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <BrowserRouter>
            <Navigation />
            <Suspense fallback={<div />}>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/users" Component={UserList} />
                <Route path="/user/:id" Component={UserDetails} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;