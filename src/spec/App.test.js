import { fireEvent, render } from '@testing-library/react';
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

test('"Get Song" button is greyed out before artist and song title are inputted and clickable after', () => {
  const { getByText, getByLabelText } = render(<App/>);
  
  const getSongButton = getByText('Get Song').closest('button');
  expect(getSongButton).toBeInTheDocument();

  expect(getSongButton).toBeDisabled();

  const artistSearch = getByLabelText('Artist:');
  const songSearch = getByLabelText('Song:');
  fireEvent.change(artistSearch, {target: {value: 'Herbie Hancock'} });
  fireEvent.change(songSearch, {target: {value: 'Chameleon'} });

  expect(getSongButton).not.toBeDisabled();
})