import { useState } from 'react';
import { Button, Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true); // Tema padrão escuro
  const [collapsed, setCollapsed] = useState(false); // Estado para colapso

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const toggleCollapsed = () => {
    setCollapsed(prevCollapsed => !prevCollapsed);
  };

  return (
    <Router>
      <Layout className={darkTheme ? '' : 'light-mode'}>
        <Sider
          theme={darkTheme ? 'dark' : 'light'}
          className={`sidebar ${darkTheme ? '' : 'light-mode'}`}
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
        >
          <Logo className={darkTheme ? '' : 'light-mode'} />
          <MenuList darkTheme={darkTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: darkTheme ? '#001529' : '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              {/* <Button
                type='text'
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleCollapsed}
              /> */}
              <div style={{ marginLeft: 'auto', marginRight: '10px' }}>
                <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
              </div>
            </div>
          </Header>
          <Content style={{ padding: '24px', minHeight: '100vh' }}>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              {/* Adicione outras rotas conforme necessário */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
