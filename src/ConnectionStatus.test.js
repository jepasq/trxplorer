import { render, screen } from '@testing-library/react';
import ConnectionStatus from './ConnectionStatus';

test('renders the label', () => {
    render(<ConnectionStatus label="Aze" value="false"/>);
    const linkElement = screen.getByText(/Aze/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class danger if value is false', async () => {
    render(<ConnectionStatus label="Aze" value="false"/>);
    const linkElement = screen.getByText(/false/i);;
    expect(linkElement).toHaveClass('text-danger');
/*    linkElement.childs({e =>
	console.log(e);
	})
	*/
//    console.log(linkElement)
//    expect(cs.firstChild).toHaveClass('widget')
});

