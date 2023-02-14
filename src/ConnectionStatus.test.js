import { render, screen } from '@testing-library/react';
import ConnectionStatus from './ConnectionStatus';

test('renders the label', () => {
    render(<ConnectionStatus label="Aze" value="false"/>);
    const linkElement = screen.getByText(/Aze/i);
    expect(linkElement).toBeInTheDocument();
});

test('is of class danger if value is false', () => {
    render(<ConnectionStatus label="Aze" value="false"/>);
    const linkElement = screen.getByText(/Aze/i);
    linkElement.getElementsByClassName('danger').toBeInTheDocument();
/*    linkElement.childs({e =>
	console.log(e);
	})
	*/
//    console.log(linkElement)
//    expect(cs.firstChild).toHaveClass('widget')
});

