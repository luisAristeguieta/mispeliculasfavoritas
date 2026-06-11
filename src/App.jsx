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
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      <Pelicula titulo="The Sheep Detectives" />
      <Pelicula titulo="Obsesión" />
      <Pelicula titulo="Hoppers" />
      <Pelicula titulo="The Housemaid" />
    </div>
  )
}



export default App
