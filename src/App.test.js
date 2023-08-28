import { render, screen } from '@testing-library/react';
import { logRoles } from '@testing-library/dom';
import App from './App';

test('button has correct initial text', () => {
  const {container}=render(<App />)
  logRoles(container)
  // find an element with a role of button and text of 'Change to blue'
  const button= screen.getByRole('button', { name: /change to blue/i })
  // expect the background color to be red
  expect(button).toHaveStyle({ backgroundColor: 'red' })
});

test('button has correct initial background color', () => {
  render(<App />)

})

test('button turns blue when clicked', () => {
  render(<App />)

})

test('button turns red when clicked twice', () => {
  render(<App />)

})

