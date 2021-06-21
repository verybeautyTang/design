/*
 * @Author: your name
 * @Date: 2021-06-16 23:08:40
 * @LastEditTime: 2021-06-21 22:27:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \beautytang-designs\src\components\button\button.test.tsx
 */
import React from "react";
import { render } from "@testing-library/react";
import Button,{ButtonType } from "./index";
test('test button',() => {
  const button = render(<Button>Test</Button>)
  const element = button.getByText('Test')
})
describe('button-test',() => {
  it('default button', () => {
    const button = render(<Button>Test</Button>)
    const element = button.getByText('Test')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
  })
  it('a link button', () => {
    const button = render(<Button href="www.baidu.com" types={ButtonType.Link}>Like River</Button>)
    const element = button.getByText('Like River')
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('disabled button', () => {
      const button = render(<Button disabled>Disabled</Button>)
      const element = button.getByText('Disabled')
      expect(element.tagName).toEqual('BUTTON')
      expect(element).toHaveClass('btn btn-default')
  })
})