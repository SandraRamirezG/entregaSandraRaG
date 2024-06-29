import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';

// Simulación de una llamada a un API
const mockItems = [
    { id: '1', category: 'documentacion', name: 'Documentación de Procesos', image: "/images/controlbotella.jpg" },
    { id: '2', category: 'implementacion', name: 'Implementación BPM', image: "/images/control.jpg" },
    { id: '3', category: 'auditorias', name: 'Auditoría Interna', image: "/images/inspeccion.jpg" },
    { id: '4', category: 'prevencion', name: 'Prevención de Riesgos', image: "/images/listachequeo.jpg" }
];

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const filteredItems = id 
            ? mockItems.filter(item => item.category === id) 
            : mockItems;
        setItems(filteredItems);
    }, [id]);

    return (
        <div className="item-list-container">
            <h1>{id ? `Categoría: ${id}` : 'Lista de Productos'}</h1>
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
        </div>
    );
};

export default ItemListContainer;