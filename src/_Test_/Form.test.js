import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from '../Form.js';
test('need to run the handler on button click', async () => {
  let getData = jest.fn();
  render(<Form  recive={getData} />);
  let button = screen.getByText('GO!');
//   let url=screen.getByText("URL")
//   fireEvent.change(url, { target: { value: "https://swapi.dev/api/people/" } })
    expect(button).toBeInTheDocument();
  fireEvent.submit(button);
  await waitFor(() => expect(getData).toHaveBeenCalled());
});