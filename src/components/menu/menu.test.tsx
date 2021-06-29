/*
 * @Author: your name
 * @Date: 2021-06-26 22:37:16
 * @LastEditTime: 2021-06-28 22:55:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\menu\menu.test.tsx
 */
import React from "react";
import { fireEvent, render, RenderResult, cleanup } from "@testing-library/react";
import Menu, {MenuProps} from "./menu";
import MenuItem from "./menu-item";
const ITestProps: MenuProps = {
  defaultIndex: 0,
  className: 'test',
  onSelect: jest.fn(),
}
const ITestModeProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}
const MenuFunc = (props: MenuProps) => {
  return (
    <Menu defaultIndex={props.defaultIndex} mode = {props.mode}>
      <MenuItem>1</MenuItem>
      <MenuItem>active</MenuItem>
      <MenuItem>disabled</MenuItem>
      <MenuItem>designs</MenuItem>
      <li>helloWorld</li>
    </Menu>
  )
}
let wrapper:RenderResult, menuElement:HTMLElement, activeElement:HTMLElement, disabledElement:HTMLElement
describe('menu-test', () => {
  beforeEach(() => {
    wrapper = render(MenuFunc(ITestProps));
    menuElement = wrapper.getByTestId('menu-test');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  })
  it('default menu', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu')
    expect(menuElement.getElementsByTagName('li').length).toEqual(4)
  })
  it('menu props', () => {
    const fourthItem = wrapper.getByText('designs')
    fireEvent.click(fourthItem)
    expect(fourthItem).toHaveClass('menu-item-active')
    expect(fourthItem).not.toHaveClass('menu-item-disabled')
    // expect(ITestProps.onSelect).toHaveBeenCalledWith(3)
  })
  it('menu mode', () => {
    cleanup()
    const wrapper = render(MenuFunc(ITestModeProps))
    const menuElement = wrapper.getByTestId('menu-test')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})