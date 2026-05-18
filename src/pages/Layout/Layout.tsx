import { Outlet } from 'react-router-dom';
import Main from '../../components/Main';
import MainMenu from '../../components/MainMenu/MainMenu';

const Layout = () => {
  return (
    <>
      <MainMenu />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default Layout;
