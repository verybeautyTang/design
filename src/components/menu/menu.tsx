/*
 * @Author: your name
 * @Date: 2021-06-21 22:46:24
 * @LastEditTime: 2021-06-21 23:28:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\menu\menu.tsx
 */
import React,{createContext, useState} from "react";
import classnames from "classnames";

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
  const classes = classnames('menu',classnames, {
    'menu-horizon': mode === 'horizon'
  })
  const passedContext: IMenuContext = {
    index: activeItem ? activeItem :0,
    onSelect: handleClick,
  }
  return (
    <ul className={classes} style={style}><MenuContext.Provider value={passedContext}> {children} </MenuContext.Provider></ul>
  )
}
Menu.defaultProps = {
  defaultIndex:0
}
export default Menu