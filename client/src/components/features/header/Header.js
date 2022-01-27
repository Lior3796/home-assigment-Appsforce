import React, { useEffect, useState } from 'react';
import '../../styles/style.css';

export const Header = ({ favoriteCity }) => {
    const [favorite, setFavorite] = useState('');


    return (
        <div className="text-container">
            <h1 className="header">{"Favorite cities"}</h1>
        </div>
    )
}
