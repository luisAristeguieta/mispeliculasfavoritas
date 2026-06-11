import { useState } from 'react'
import './App.css'


function Pelicula({ titulo, imagen }) {
    
   const [esFavorita, setEsFavorita] = useState(false);

    const toggleFavorita = () => {setEsFavorita(!esFavorita);};

  return (
        <div onClick={toggleFavorita} style={{
          border: '1px solid #ccc',
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: esFavorita ? '#f9f0b3' : '#f5f5f5',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
        }}>
          {/* Imagen de la película */}
            {imagen && (
                <img 
                    src={imagen} 
                    alt={titulo}
                    style={{
                        width: '50px',
                        height: '70px',
                        objectFit: 'cover',
                        borderRadius: '5px'
                    }}
                />
            )}
            <p style={{ flex: 1, margin: 0 }}>
              {titulo} {esFavorita ? '⭐' : ''}</p>
        </div>
    );
}


function App() {
  // Array de peliculas (strings)
    const [peliculas, setPeliculas] = useState([
        { id: 1, titulo: 'The Sheep Detectives', imagen: '/2.jpg' },
        { id: 2, titulo: 'Obsesión', imagen: '/3.jpg' },
        { id: 3, titulo: 'Hoppers', imagen: '/4.jpeg' },
        { id: 4, titulo: 'The Housemaid', imagen: '/1.jpg' }
    ]);

    const [nuevaPelicula, setNuevaPelicula] = useState('');

    // Función para agregar (solo título, sin imagen)
    const agregarPelicula = () => {
        if (nuevaPelicula.trim() === '') return;
        
        const nuevaPeli = {
            id: peliculas.length + 1,
            titulo: nuevaPelicula,
            imagen: ''  // Sin imagen por ahora
        };
        
        setPeliculas([...peliculas, nuevaPeli]);
        setNuevaPelicula('');
    };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }} >Mis Películas Favoritas</h1>

      {/* Input y botón juntos */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    type="text"
                    value={nuevaPelicula}
                    onChange={(e) => setNuevaPelicula(e.target.value)}
                    placeholder="Nueva película..."
                    style={{
                        flex: 1,
                        padding: '10px',
                        fontSize: '16px',
                        border: '1px solid #ccc',
                        borderRadius: '5px'
                    }}
                />
                <button
                    onClick={agregarPelicula}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Agregar
                </button>
            </div>

              {peliculas.map((pelicula, indice) => (
                <Pelicula key={indice} titulo={pelicula.titulo} imagen={pelicula.imagen} />
            ))}
    </div>
  )
}



export default App
