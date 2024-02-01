import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Tile from '../components/common/Tile';

test('Tile component contains the text "I am a tile"', () => {
    render(<Tile id={'1'} content='Some content' />);
    const tileText = screen.getByText('I am a discount tile');
    expect(tileText).toBeTruthy();
});

export default test;
