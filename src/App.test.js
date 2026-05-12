import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders brand and navigation', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /Kayu Nusantara/i })).toBeInTheDocument();
  const mainNav = screen.getByRole('navigation', { name: 'Utama' });
  expect(within(mainNav).getByRole('link', { name: /^Home$/i })).toBeInTheDocument();
});
