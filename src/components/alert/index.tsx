/*
 * @Author: your name
 * @Date: 2021-06-15 23:54:28
 * @LastEditTime: 2021-06-16 22:36:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\a\index.tsx
 */
import React from "react";
import classnames from "classnames";
export enum AlertType {
  'Success' = 'success',
  'Danger' = 'danger',
  'Default' = 'default',
  'Warning' = 'warning',
}
interface IProp {
types?: AlertType,
hasClose?: boolean,
title?: string,
children?:React.ReactNode
}
const Alert = (props: IProp) => {
  const {types, hasClose, title, children} = props
  const classes = classnames('alert', 'alert-flex', {
    [`alert-${types}`]: AlertType,
  })
  const deleteAlert = (e: any) => {
    e.target.parentElement.remove() 
  }
    return (
      <div className={classes}>
        <>
          {title && <h5>{title}</h5> }
          <span>{children}</span>
        </>
        {hasClose && <span className="alert-delete" onClick={(e) => deleteAlert(e)}>X</span>}
      </div>
    )
}
Alert.defaultProps = {types: 'default', children: 'This is Alert', hasClose: false}
export default Alert