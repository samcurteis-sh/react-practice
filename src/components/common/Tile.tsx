import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TileProps {
    content: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    id: string;
}

const Tile: React.FC<TileProps> = ({content}) => {
    const navigate = useNavigate();
  const navigateToDiscountPage = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget.id as string
    navigate(`/${target}`)
  }

    return (
        <div className='tile' data-testid='tile' id={content} onClick={navigateToDiscountPage}>
            <h1>I am a discount tile</h1>
            <p>{content}</p>
        </div>
    );
};

export default Tile;
