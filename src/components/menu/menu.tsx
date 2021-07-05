/*
 * @Author: your name
 * @Date: 2021-06-21 22:46:24
 * @LastEditTime: 2021-07-05 22:45:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\menu\menu.tsx
 */
import React,{createContext, useState} from "react";
import classnames from "classnames";
import { MenuItemProps }  from "./menu-item";
export type MenuMode = 'horizon' | 'vertical'
export type SelectAction = (selectIndex: string) => void
export interface MenuProps {
  defaultIndex?: string,
  className?: string,
  style?: React.CSSProperties,
  mode?:MenuMode,
  onSelect?: SelectAction,
  children?: React.ReactNode,
  defaultOpenSubMenu?: string[],
}
interface IMenuContext {
  index : string,
  onSelect?: SelectAction,
  mode?: MenuMode,
  defaultOpenSubMenu?: string[],
}
export const MenuContext = createContext<IMenuContext>({index: '0'})
function Menu(props:MenuProps) {
  const {defaultIndex, style, className, mode, children, onSelect, defaultOpenSubMenu} =  props
  const [activeItem, setActiveItem] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActiveItem(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const classes = classnames('menu',className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const passedContext: IMenuContext = {
    index: activeItem ? activeItem : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenu,
  }
  const renderMenuItem = () => {
    return React.Children.map(children, (child,index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.warn('The component not depend on Menu');
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="menu-test"><MenuContext.Provider value={passedContext} > {renderMenuItem()} </MenuContext.Provider></ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenu: []
}
export default Menu