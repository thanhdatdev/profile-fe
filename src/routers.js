import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/Home') )

const router = [
  {
    path: '/',
    exact: true,
    public: true,
    component: HomePage
  }
];

export default router;
