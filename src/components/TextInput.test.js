import { render, screen } from '@testing-library/react';
import TextInput from './TextInput';

test('renders Echo: link', () => {
  render(<TextInput />);
  const linkElement = screen.getByText(/Echo:/i);
  expect(linkElement).toBeInTheDocument();
});
