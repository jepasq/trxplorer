import { render, screen } from '@testing-library/react';
import NetworkStatus from './NetworkStatus';

test('renders the widget name', async () => {
    render(<NetworkStatus />);
    const linkElement = screen.getByText(/Network Status/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class widget', async () => {
    const { container } = render(<NetworkStatus />);
    expect(container.firstChild).toHaveClass('widget')
});

