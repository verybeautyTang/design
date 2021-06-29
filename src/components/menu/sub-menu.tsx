import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menu-item";
interface ISubMenuProps {
  index?: number,
  title?: string,
  className?: string,
  children?: React.ReactNode
}
const SubMenu: React.FC<ISubMenuProps> = (props:ISubMenuProps) => {
  const { index, title, className, children} = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item, submenu-item',className,  {
    'menu-item-active': context.index === index
  })
  const renderSubMenu = () => {
    const ReactChildren = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem') {
        return childElement
      } else {
        console.warn('Warning: subMenu has a child which is a MenuItem component');
      }
    })
    return (
      <ul className="submenu">
        {ReactChildren}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-item-title">
        {title}
      </div>
      {renderSubMenu()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu