import { render, screen } from '@testing-library/react';
import CharacterCount from './CharacterCount';

test('renders Character Count link', () => {
  render(<CharacterCount />);
  const linkElement = screen.getByText(/Character Count:/i);
  expect(linkElement).toBeInTheDocument();
});
