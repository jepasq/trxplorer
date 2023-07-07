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
    const convertBtn = screen.getByRole('button', { name: /convert/i});
    expect(convertBtn).toBeInTheDocument();
    
});

// From https://stackoverflow.com/a/54250578
test('has at least one option HTML element', async () => {
    const { container } = render(<ToFrom />);
    const opt = document.querySelector('option');
    expect(opt).toBeInTheDocument();
});

test('has options HTML elements with given IDs', async () => {
    const dom = render(<ToFrom />);

    const o1 = dom.container.querySelector('#fromtype');
    expect(o1).toBeInTheDocument();

    const o2 = dom.container.querySelector('#totype');
    expect(o2).toBeInTheDocument();
});



