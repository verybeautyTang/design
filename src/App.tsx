/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:22
 * @LastEditTime: 2021-06-21 23:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\App.tsx
 */
import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/button/index";
import Alert, { AlertType } from "./components/alert/index";
import Menu from "./components/menu/menu";
import MenuItem from "./components/menu/menu-item";
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Menu defaultIndex={0}>
          <MenuItem index={0}>111</MenuItem>
          <MenuItem index={1}>222</MenuItem>
          <MenuItem index={2}>333</MenuItem>
          <MenuItem index={3}>444</MenuItem>
        </Menu>
    </div>
  );
}

export default App;
