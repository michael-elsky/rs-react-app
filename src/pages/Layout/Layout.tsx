import { Outlet } from 'react-router-dom';
import Main from '../../components/Main';

const Layout = () => {
  return (
    <Main>
      <Outlet />
    </Main>
  );
};

export default Layout;
