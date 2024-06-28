import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <img src={item.image} alt={item.name} className="item-detail-image" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button>Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetail;