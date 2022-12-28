import { render, screen } from '@testing-library/react';
import NetworkStatus from './NetworkStatus';

test('renders the widget name', () => {
    render(<NetworkStatus />);
    const linkElement = screen.getByText(/Network Status/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class widget', () => {
    const { container } = render(<NetworkStatus />);
    expect(container.firstChild).toHaveClass('widget')
});

