import { render, screen } from '@testing-library/react';
import ToFrom from './ToFrom';

test('renders the widget name', async () => {
    render(<ToFrom />);
    const linkElement = screen.getByText(/Address converter/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class widget', async () => {
    const { container } = render(<ToFrom />);
    expect(container.firstChild).toHaveClass('widget')
});

