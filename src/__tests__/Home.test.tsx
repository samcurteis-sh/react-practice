import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('Home component', () => {
    test('renders without errors', () => {
        render(
            <Router>
                <Home />
            </Router>)
        const homeElement = screen.getByText('Home');
        expect(homeElement).toBeInTheDocument();
    });

    test('renders eleven tiles', () => {
        render(
            <Router>
                <Home />
            </Router>)
        const tileElements = screen.getAllByTestId('tile');
        expect(tileElements.length).toBe(11);
    });
});
