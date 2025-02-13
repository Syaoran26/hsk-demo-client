import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      Header
      <Outlet />
      Footer
    </div>
  );
};
export default MainLayout;
