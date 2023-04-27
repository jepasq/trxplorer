import { render, screen } from '@testing-library/react';
import CheckAddress from './CheckAddress';

test('renders the check address name', async () => {
    render(<CheckAddress />);
    const checkLabel = screen.getByText(/Check Address :/i);
    expect(checkLabel).toBeInTheDocument();
});

test('has a check button', async () => {
    render(<CheckAddress />);
    const checkButton = screen.getByRole('button');
    expect(checkButton).toBeInTheDocument();
});

test('has a line input widget', async () => {
    render(<CheckAddress />);
    const ch  = document.body.innerHTML.includes('input');
    expect(ch).toBe(true);

    // Check that it won't be true with a stupid string
    const ch2 = document.body.innerHTML.includes('inSTUPIDput');
    expect(ch2).toBe(false);

});
