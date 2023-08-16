import React, { useState } from 'react';
import './App.css';

import logo from './CAM5.jpg';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuOnSlideChange, setShowSubMenuOnSlideChange] = useState(false);

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setShowSubMenu(!showSubMenu);
      setShowSubMenuOnSlideChange(!showSubMenuOnSlideChange);
    } else {
      setSelectedCategory(category);
      setShowSubMenu(true);
      setShowSubMenuOnSlideChange(true);
    }
  };

  const handleSlideChange = () => {
    if (showSubMenuOnSlideChange) {
      setShowSubMenu(false);
    }
  };

  const categoryButtons = ['Centro de Atención Múltiple (CAM)', 'Educación Inicial', 'Preescolar', 'Primaria', 'Secundaria'];

  const categoryInfo = {
    'Centro de Atención Múltiple (CAM)': (
      <p>
        Los Centros de Atención Múltiple (CAM) son servicios escolarizados que atienden a alumnas y alumnos con discapacidad, discapacidad múltiple y Trastorno del Espectro Autista (TEA) en situaciones excepcionales, los cuales requieren de ajustes razonables significativos y en ocasiones de apoyos no solo más especializados sino permanentes. Estos centros ofrecen formación para la vida y a lo largo de la misma, así como el desarrollo de su autonomía e independencia, a través del tránsito de los niveles de educación inicial, preescolar, primaria y secundaria.
      </p>
    ),
    'Educación Inicial': (
      <p>
        Tiene como propósito favorecer el desarrollo motor, físico, cognitivo, afectivo y social de los menores de cuatro años de edad. Incluye orientación a padres de familia o tutores para la educación de sus hijas, hijos o pupilos.
      </p>
    ),
    Preescolar: (
      <p>
        Es el primer nivel de la educación básica. Busca el desarrollo integral y equilibrado que facilita la relación de los niños con sus pares y con adultos. Promueve la socialización y la afectividad, las capacidades de comunicación, el pensamiento matemático, el conocimiento de los entornos natural y social, el desarrollo y enriquecimiento físico y psicomotriz, y la expresión artística.
      </p>
    ),
    Primaria: (
      <p>
         Es el segundo nivel del tipo de educación básica. Su 
objetivo es sentar las bases en áreas 
fundamentales para la adquisición 
de conocimientos posteriores, esto 
es, el dominio de la lectoescritura, el 
conocimiento matemático aritmético 
y geométrico, el conocimiento básico 
de las ciencias naturales y sociales, el 
conocimiento del cuerpo, las posibilidades motrices y las emociones, las 
artes y las relaciones interpersonales.
      </p>
    ),
    Secundaria: (
      <p>
         Es el tercer nivel del tipo de educación básica. Su 
objetivo es ofrecer conocimientos y habilidades avanzados, que consoliden 
los procesos iniciados en los niveles 
anteriores, y que sienten bases para 
las áreas especializadas que se estudian en la educación media superior
      </p>
    ),
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title-container">
            <h1>Centro de Atención Múltiple No.5</h1>
            <h2>"Jorge Nieblas Pino"</h2>
          </div>
        </div>
        <div className="nav-buttons">
          <button onClick={() => handleCategoryClick('Inicio')}>Inicio</button>
          <button onClick={() => handleCategoryClick('Registrar')}>Registrar</button>
          <button onClick={() => handleCategoryClick('Entrar')}>Entrar</button>
          <button onClick={() => handleCategoryClick('Contacto')}>Contacto</button>
        </div>
      </header>
      <div className="category-buttons">
        {categoryButtons.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      {showSubMenu && selectedCategory !== 'Inicio' && selectedCategory !== 'Registrar' && selectedCategory !== 'Entrar' && selectedCategory !== 'Contacto' && (
        <div className="sub-menu">
          {/* Mostrar cuadro de texto con información */}
          {categoryInfo[selectedCategory]}
        </div>
      )}
    </div>
  );
}

export default App;

// Resto del código CSS ...







