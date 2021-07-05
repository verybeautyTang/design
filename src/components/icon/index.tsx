/*
 * @Author| your name
 * @Date| 2021-07-05 23|20|14
 * @LastEditTime: 2021-07-05 23:36:43
 * @LastEditors: Please set LastEditors
 * @Description| In User Settings Edit
 * @FilePath| \beautytang-designs\src\components\icon\index.tsx
 */
import React from "react";
import classnames from "classnames";
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

export type ThemeColor = 'primary'|'secondary'|'success'|'info'|'warning'|'danger'|'light'|'dark'
export interface ThemeProps extends FontAwesomeIconProps {
  theme?:  ThemeColor
}
const Icons: React.FC<ThemeProps> = (props: ThemeProps) => {
  const {className, theme, ...restProps} = props
  const classes = classnames('icons', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps}></FontAwesomeIcon>
  )
}
export default Icons

