import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <ul className="item-list">
            {items.map(item => (
                <li key={item.id} className="item">
                    <Link to={`/item/${item.id}`}>
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h2>{item.name}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;