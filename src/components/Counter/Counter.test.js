import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

it('should render component title from props', () => {
  render(<Counter counterName='Push ups' />);
  const headerEl = screen.getByRole('heading', { name: 'Push ups' });
  expect(headerEl).toBeInTheDocument();
});

it('should render 4 buttons', () => {
  render(<Counter counterName='Push ups' />);
  const buttonsArr = screen.getAllByRole('button');
  expect(buttonsArr.length).toBe(4);
});

it('should increase the counter by 1 after i press Add', () => {
  render(<Counter counterName='Push ups' />);
  const addBtn = screen.getByRole('button', { name: 'Add' });
  fireEvent.click(addBtn);
  const counterEl = screen.getByRole('heading', { name: 1 });
  expect(counterEl).toHaveTextContent('1');
});
