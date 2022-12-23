import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

test('can import TronWeb', () => {
    const TronWeb = require('tronweb');
    expect(TronWeb).not.toBeNull();
});

