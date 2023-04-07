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
    const { container } = render(<CheckAddress />);
    const input = screen.getByRole('text');
    expect(input).toBeInTheDocument();

    console.log("LOG '"+input.innerHTML+"'");
    expect(input).toHaveAttribute('type', 'text');
});
