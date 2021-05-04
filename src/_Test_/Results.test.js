import { render, screen } from '@testing-library/react';
import Results from '../Results.js';
let jsonData;
let data;

beforeAll(async()=>{
     data = await fetch("https://swapi.dev/api/people/");
     jsonData = await data.json();
     console.log("dddddddddddddddd")
})
test('it should render star wars list', () => {
  
  
  render(<Results  send={jsonData} />);
  const Section = screen.getByText('results');
  expect(Section).toBeInTheDocument();
});


