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

test('has a convert button', async () => {
    render(<ToFrom />);

    // May be here from a copy/past from CheckAddress widget
    const checkBtn = screen.queryByText(/Check/i);
    expect(checkBtn).not.toBeInTheDocument();

    const convertBtn = screen.getByText(/Convert/i);
    expect(convertBtn).toBeInTheDocument();
});

// From https://stackoverflow.com/a/54250578
test('has at least one option HTML element', async () => {
    const {container } = render(<ToFrom />);
    const opt = document.querySelector('option');
    expect(opt).toBeInTheDocument();
});


