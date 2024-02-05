import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Tile from '../components/common/Tile';

test('Tile component contains the text default and content text', () => {
    render(
    <Router>
        <Tile id={'1'} content='Some content' />
    </Router>);

    const contentText = screen.getByText('Some content');
    const tileText = screen.getByText('I am a discount tile');

    expect(contentText).toBeTruthy();
    expect(tileText).toBeTruthy();
});

export default test;
