import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders sql query builder', () => {
  render(<Home />);
  const linkElement = screen.getByText(/sql query builder/i);
  expect(linkElement).toBeInTheDocument();
});
