import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';

test('renders the title of the page', () => {
  const { getByText } = render(<App />);
  const title = getByText('Song Rater');
  expect(title).toBeInTheDocument();
});

test('renders the choose artist and song title inputs', () => {
  const { getByText } = render(<App />);
  const artistSearch = getByText('Artist:');
  const songSearch = getByText('Song:');
  expect(artistSearch).toBeInTheDocument();
  expect(songSearch).toBeInTheDocument();
});
