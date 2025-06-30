import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application', () => {
  render(<App />);
  // Update this test as needed for your application
  const appElement = screen.getByRole('main') || screen.getByText(/medwide/i) || document.querySelector('#root > div');
  expect(appElement).toBeInTheDocument();
});
