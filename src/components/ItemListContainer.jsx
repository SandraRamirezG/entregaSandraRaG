import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import " /ItemListContainer.css";

// Simulación de una llamada a un API
const mockItems = [
    { id: '1', category: 'documentacion', name: 'Documentación de Procesos', image: "/images/DF Generico restaurante.jpg"},
    { id: '2', category: 'implementacion', name: 'Implementación BPM', image: "/images/control.jpg" },
    { id: '3', category: 'auditorias', name: 'Auditoría Interna', image: "/images/controlbotella.jpg" },
    { id: '4', category: 'prevencion', name: 'Prevención de Riesgos', image: "/images/listachequeo.jpg" }
];

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const filteredItems = categoryId 
            ? mockItems.filter(item => item.category === categoryId) 
            : mockItems;
        setItems(filteredItems);
    }, [categoryId]);

    return (
        <div>
            <h1>{categoryId ? `Categoría: ${categoryId}` : 'Lista de Productos'}</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;