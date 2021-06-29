/*
 * @Author: your name
 * @Date: 2021-06-21 22:55:35
 * @LastEditTime: 2021-06-28 22:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\menu\menu-item.tsx
 */
import React,{useContext} from "react";
import classnames from "classnames";
import { MenuContext } from "./menu";
export interface MenuItemProps {
  className?: string,
  style?: React.CSSProperties,
  index?: number,
  disabled?: boolean,
  children?: React.ReactNode
}
function MenuItem(props:MenuItemProps) {
  const MenuItemContext = useContext(MenuContext)
  const {className, style, disabled, index, children} = props
  const classes = classnames('menu-item',className, {
    'menu-item-active': MenuItemContext.index === index,
    'menu-item-disabled': disabled
  })
  const handleClick = () => {
    if(MenuItemContext.onSelect && !disabled && typeof(index) === 'number')
      MenuItemContext.onSelect(index)
  }
  return (
    <li style={style} className={classes} onClick={handleClick}>{children}</li>
  )
}
MenuItem.displayName = 'MenuItem'
export default MenuItem