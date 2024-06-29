import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

// Simulación de una llamada a un API
const mockItems = [
    { id: '1', category: 'documentacion', name: 'Documentación de Procesos', image: "/images/controlbotella.jpg" },
    { id: '2', category: 'implementacion', name: 'Implementación BPM', image: "/images/control.jpg" },
    { id: '3', category: 'auditorias', name: 'Auditoría Interna', image: "/images/inspeccion.jpg" },
    { id: '4', category: 'prevencion', name: 'Prevención de Riesgos', image: "/images/listachequeo.jpg" }
];

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedItem = mockItems.find(item => item.id === id);
        setItem(selectedItem);
    }, [id]);

    if (!item) return <div>Cargando...</div>;

    return (
        <div className="item-detail-container">
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} className="item-detail-image" />
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetailContainer;