import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to TrxPlorer', async () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to TrXplorer/i);
    expect(linkElement).toBeInTheDocument();
});

test('can import TronWeb', () => {
    const TronWeb = require('tronweb');
    expect(TronWeb).not.toBeNull();
});

