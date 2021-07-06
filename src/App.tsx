/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:22
 * @LastEditTime: 2021-07-06 22:32:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\App.tsx
 */
import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/button/index";
import Alert, { AlertType } from "./components/alert/index";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menu-item";
import SubMenu from "./components/menu/sub-menu";
import Icon from './components/icon/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="spinner" size="10x" theme="info"></Icon>
        <Button>GOOD JOB</Button>
        <Button types={ButtonType.Link}  target="_blank" href="https://www.baidu.com">Link</Button>
        <p></p>
        <Button types={ButtonType.Danger} disabled={true} size={ButtonSize.large}>不可以被编辑哦</Button>
        <p></p>
        <Button types={ButtonType.Default} size={ButtonSize.small}>我是小号的button</Button>
        <p></p>
        <Button types={ButtonType.Primary} size={ButtonSize.large}>Primary</Button>
      </header>

        <Alert/>
        <Alert types={AlertType.Danger} title="nihao" />
        <Alert types={AlertType.Warning} hasClose={true} />
        <Alert types={AlertType.Success} title="成功的Alert" hasClose={true} />
        {/* Menu */}
        <Menu defaultIndex='0' onSelect={(index)=> alert(index)} defaultOpenSubMenu={['2']}>
          <MenuItem>111</MenuItem>
          <MenuItem>222</MenuItem>
          <SubMenu title="open It" index="2-0">
            <MenuItem>333</MenuItem> 
          </SubMenu>
          <MenuItem>555</MenuItem>
          <MenuItem>444</MenuItem>
        </Menu>
    </div>
  );
}

export default App;
