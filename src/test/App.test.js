import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from "../App.js";

describe( 'TEST APP', () => {
  test('Menu links work', async () => {
   render(<App />);
   const user = userEvent.setup()
  //  testing main
   const mainLinkP =  screen.getByText(/ /i);
   expect(mainLinkP).toBeInTheDocument();
  //  testing login
   const mainLink =  screen.getByText(/login/i);
   await user.click(mainLink);
   expect(screen.getByText(/Subscribe to our updates/i)).toBeInTheDocument();
  //  testing posts
  const titleElement = screen.getByText(/posts/i);
  expect(titleElement).toBeInTheDocument();
 })}) 