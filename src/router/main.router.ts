import { RouteObject } from 'react-router';
import { routes } from '@/config';
import MainLayout from '@/layouts/main-layout';
import Home from '@/pages/Home';

const mainRouter: RouteObject[] = [
  {
    path: routes.home,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default mainRouter;
