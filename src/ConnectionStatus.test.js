import { render, screen } from '@testing-library/react';
import ConnectionStatus from './ConnectionStatus';

test('renders the label', () => {
    render(<ConnectionStatus label="Aze" value="false"/>);
    const linkElement = screen.getByText(/Aze/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class danger if value is false', async () => {
    render(<ConnectionStatus label="Aze" value="false"/>);

    const falseElement = screen.getByText(/false/i);;
    expect(falseElement).toHaveClass('text-danger');
    expect(falseElement).not.toHaveClass('text-success');

    const trueElement = screen.queryByText(/true/i);;
    expect(trueElement).not.toBeInTheDocument();
});

test('is of class success if value is false', async () => {
    render(<ConnectionStatus label="Aze" value="true"/>);
    const trueElement = screen.getByText(/true/i);;
    expect(trueElement).toHaveClass('text-success');
    expect(trueElement).not.toHaveClass('text-danger');

    const falseElement = screen.queryByText(/false/i);;
    expect(falseElement).not.toBeInTheDocument();
});

