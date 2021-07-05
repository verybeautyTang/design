import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
import { MenuItemProps } from "./menu-item";
interface ISubMenuProps {
  index?: string,
  title?: string,
  className?: string,
  children?: React.ReactNode
}
const SubMenu: React.FC<ISubMenuProps> = (props:ISubMenuProps) => {
  const { index, title, className, children} = props
  const context = useContext(MenuContext)
  const isOpenSubMenu = context.defaultOpenSubMenu as Array<string>
  const isOpened = (index && context.mode === 'vertical' ? isOpenSubMenu.includes(index) : false)
  const [menuOpen, setOpen] = useState(isOpened)
  console.log('context.index', context.index);
  console.log('index',index);
  const classes = classNames('menu-item submenu-item',className,  {
    'menu-item-active': context.index === index
  })
  const subMenuClasses = classNames('submenu',className,  {
    'menu-opened': menuOpen
  })
  const handleClick = (e : React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any ;
  const handleMove = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    setTimeout(() => {
      setOpen(toggle)
    }, 300);
  }
  const clickEvents = context.mode === 'vertical'? { onClick: handleClick } : {}
  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => {handleMove(e, true)},
    onMouseLeave: (e: React.MouseEvent) => {handleMove(e, false)}
  }: {}
  const renderSubMenu = () => {
    const ReactChildren = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if(displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`
        })
      } else {
        console.warn('Warning: subMenu has a child which is a MenuItem component');
      }
    })
    return (
      <ul className={subMenuClasses}>
        {ReactChildren}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-item-title" {...clickEvents}>
        {title}
      </div>
      {renderSubMenu()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu