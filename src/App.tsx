/*
 * @Author: your name
 * @Date: 2021-06-08 20:45:22
 * @LastEditTime: 2021-06-15 23:24:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\App.tsx
 */
import React from 'react';
import Button, {ButtonType, ButtonSize} from "./components/button/index";
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
    </div>
  );
}

export default App;
