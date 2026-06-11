import { useState } from 'react'
import './App.css'


function Pelicula({ titulo }) {
    
   const [esFavorita, setEsFavorita] = useState(false);

    const toggleFavorita = () => {setEsFavorita(!esFavorita);};

  return (
        <div onClick={toggleFavorita} style={{
          border: '1px solid #ccc',
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: esFavorita ? '#f9f0b3' : '#f5f5f5',
            borderRadius: '5px'
        }}>
            <p>{titulo} {esFavorita ? '⭐' : ''}</p>
        </div>
    );
}


function App() {
  // Array de peliculas (strings)
    const peliculas = [
        'The Sheep Detectives',
        'Obsesión',
        'Hoppers',
        'The Housemaid'
    ];

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
              {peliculas.map((pelicula, indice) => (
                <Pelicula key={indice} titulo={pelicula} />
            ))}
    </div>
  )
}



export default App
