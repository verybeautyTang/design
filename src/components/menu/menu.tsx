/*
 * @Author: your name
 * @Date: 2021-06-21 22:46:24
 * @LastEditTime: 2021-06-28 23:34:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\menu\menu.tsx
 */
import React,{createContext, useState} from "react";
import classnames from "classnames";
import { MenuItemProps }  from "./menu-item";
export type MenuMode = 'horizon' | 'vertical'
export type SelectAction = (selectIndex: number) => void
export interface MenuProps {
  defaultIndex?: number,
  className?: string,
  style?: React.CSSProperties,
  mode?:MenuMode,
  onSelect?: SelectAction,
  children?: React.ReactNode
}
interface IMenuContext {
  index : number,
  onSelect?: SelectAction
}
export const MenuContext = createContext<IMenuContext>({index: 0})
function Menu(props:MenuProps) {
  const {defaultIndex, style, className, mode, children, onSelect} =  props
  const [activeItem, setActiveItem] = useState(defaultIndex)
  const handleClick = (index: number) => {
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
    index: activeItem ? activeItem :0,
    onSelect: handleClick,
  }
  const renderMenuItem = () => {
    return React.Children.map(children, (child,index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index
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
  defaultIndex:0
}
export default Menu