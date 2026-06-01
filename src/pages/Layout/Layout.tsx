import { Outlet } from 'react-router-dom'
import Main from '../../components/Main'
import MainMenu from '../../components/MainMenu/MainMenu'
import ThemeToggle from '../../components/ThemeToggle/ThemeToggle'

const Layout = () => {
  return (
    <>
      <ThemeToggle />

      <MainMenu />

      <Main>
        <Outlet />
      </Main>
    </>
  )
}

export default Layout
