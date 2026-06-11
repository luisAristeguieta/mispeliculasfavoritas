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
    const peliculas = [
        { titulo: 'The Sheep Detectives', imagen: '/2.jpg' },
        { titulo: 'Obsesión', imagen: '/3.jpg' },
        { titulo: 'Hoppers', imagen: '/4.jpeg' },
        { titulo: 'The Housemaid', imagen: '/1.jpg' }
    ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }} >Mis Películas Favoritas</h1>
              {peliculas.map((pelicula, indice) => (
                <Pelicula key={indice} titulo={pelicula.titulo} imagen={pelicula.imagen} />
            ))}
    </div>
  )
}



export default App
