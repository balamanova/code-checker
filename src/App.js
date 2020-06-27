import React, {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import WithMain from './pages/WithMain';
import WithoutMain from './pages/WithoutMain';

function App() {

  const [screen, setScreen] = useState('zip');
 
  const  handleClick = e => setScreen(e.key)

  return (
    <div className="App">
      <Menu onClick={handleClick} selectedKeys={[screen]} mode="horizontal">
        <Menu.Item key="zip" icon={<MailOutlined />}>
          Checking Without Main Class
        </Menu.Item>
        <Menu.Item key="zipMain" icon={<MailOutlined />}>
          Checking With Test Class
        </Menu.Item>
      </Menu>
      <header className="App-header">
       { screen === "zip" ?  <WithoutMain /> : <WithMain />}
     </header>
    </div>
  );
}

export default App;
