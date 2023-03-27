import { render, screen } from '@testing-library/react';
import CheckAddress from './CheckAddress';

test('renders the check address name', async () => {
    render(<CheckAddress />);
    const checkLabel = screen.getByText(/Check Address :/i);
    expect(checkLabel).toBeInTheDocument();
});

test('has a check button', async () => {
    render(<CheckAddress />);
    const checkButton = screen.getByText(/check/i);
    expect(checkButton).toBeInTheDocument();
});

test('has a line input widget', async () => {
    const { container } = render(<CheckAddress />);
    const input = screen.getByText(/Check Address :/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
});



