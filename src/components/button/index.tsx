/*
 * @Author: your name
 * @Date: 2021-06-08 22:13:18
 * @LastEditTime: 2021-06-15 22:50:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\button\index.tsx
 */
import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classnames from "classnames";
export enum ButtonSize {
  'base' =  'm',
  'large' = 'lg',
  'small' = 'sm'
}
export enum ButtonType {
  'Default' = 'default',
  'Primary' = 'primary',
  'Danger' = 'danger',
  'Warning' = 'warning',
  'Link' = 'link',

}
interface IProp {
  className?: string,
  types?: ButtonType,
  size?: ButtonSize
  disabled?: boolean,
  href?: string,
  children?: React.ReactNode
}
// &是ts的联合类型 , 将两个不同的数据类型联合起来
//  Partial是可选类型，可以在两个里面选其中一个
// ButtonHTMLAttributes: 原生button的所有属性
// AnchorHTMLAttributes：原生a标签的所有属性
// 这里的这样做是为了保持拿到原生的数据的所有属性 不用人工一点点去写
type BottonNativeProps = IProp & ButtonHTMLAttributes<HTMLElement>
type BottonAnchorProps = IProp & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<BottonNativeProps & BottonAnchorProps>
const Button = (props: ButtonProps)  => {
  const {className, types, size, disabled, href, children, ...restProps } = props
  const classes = classnames('btn', className,  {
    [`btn-${types}`]: ButtonType,
    [`btn-${size}`]: ButtonSize,
    'disabled': (types === 'link') && disabled
  })
  if(types === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>{children}</a>
    )
  } else {
    return (
      <button className={classes}  disabled= {disabled} {...restProps}>{children}</button>
    )
  }
}
Button.defaultProps = {types: 'default', size: 'm'}
export default Button