import React, { useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; // Importa los estilos de react-slick
import "slick-carousel/slick/slick-theme.css"; // Importa los estilos de react-slick
import Slider from 'react-slick'; // Importa el componente Slider de react-slick

import logo from './CAM5.jpg';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSubMenu(true);
  };

  const handleBackClick = () => {
    setSelectedCategory('');
    setShowSubMenu(false);
  };

  const categoryButtons = ['Centro de Atención Múltiple (CAM)','Conócenos','Escuela para Padres' ];
  const categoryInfo = {
    'Centro de Atención Múltiple (CAM)': (
      <div>
        <p>
          Los Centros de Atención Múltiple (CAM) son servicios escolarizados que atienden a alumnas y alumnos con discapacidad, discapacidad múltiple y Trastorno del Espectro Autista (TEA) en situaciones excepcionales, los cuales requieren de ajustes razonables significativos y en ocasiones de apoyos no solo más especializados sino permanentes. Estos centros ofrecen formación para la vida y a lo largo de la misma, así como el desarrollo de su autonomía e independencia, a través del tránsito de los niveles de educación inicial, preescolar, primaria y secundaria.
        </p>
        <div className="sub-links">
          <button onClick={() => handleCategoryClick('Discapacidad Intelectual')}>Discapacidad Intelectual</button>
          <button onClick={() => handleCategoryClick('Discapacidad Motriz')}>Discapacidad Motriz</button>
          <button onClick={() => handleCategoryClick('Discapacidad Auditiva')}>Discapacidad Auditiva</button>
          <button onClick={() => handleCategoryClick('Discapacidad Visual')}>Discapacidad Visual</button>
          <button onClick={() => handleCategoryClick('Discapacidad Múltiple')}>Discapacidad Múltiple</button>
          <button onClick={() => handleCategoryClick('Autismo')}>Trastorno del Espectro Autista (TEA)</button>
        </div>
      </div>
    )
    ,'Conócenos': (
        <div>
          <p>
          El Centro de Atención Múltiple No.5 "Jorge Nieblas Pino", de la zona 11B de Educación Especial de Caborca, Sonora, es un espacio dedicado a brindar educación especializada a estudiantes con diversas necesidades. Nuestro compromiso es ofrecer un entorno inclusivo y de calidad, adaptado a las particularidades de cada alumno, promoviendo su desarrollo académico, social y emocional. A través de un equipo multidisciplinario y recursos especializados, trabajamos para empoderar a nuestros estudiantes y facilitar su participación activa en la sociedad. Conoce nuestros niveles educativos.
          </p>
          <div className="sub-links">
            <button onClick={() => handleCategoryClick('Educación Inicial')}>Educación Inicial</button>
            <button onClick={() => handleCategoryClick('Educación Preescolar')}>Educación Preescolar</button>
            <button onClick={() => handleCategoryClick('Educación Primaria')}>Educación Primaria</button>
            <button onClick={() => handleCategoryClick('Educación Secundaria')}>Educación Secundaria</button>
            <button onClick={() => handleCategoryClick('Talleres')}>Talleres</button>
            
          </div>
        </div>
    ),
        'Escuela para Padres': (
          <div>
            <p>Selecciona un video:</p>
            <div className="video-carousel">
              <Slider>
                <div>
                  
                </div>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Agrega más iframes de videos aquí */}
              </Slider>
            </div>
          </div>
        ),
    // ... Códigos de las demás categorías ...
  };
  const videoThumbnails = [
    "https://img.youtube.com/vi/WZj97uGQ37I/0.jpg", // URL de la miniatura del primer video
    "https://img.youtube.com/vi/VIDEO_ID_2/0.jpg",   // URL de la miniatura del segundo video
    // Agrega más URLs de miniaturas de videos aquí
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/WZj97uGQ37I", // URL del primer video de YouTube
    "https://www.youtube.com/embed/VIDEO_ID_2",   // URL del segundo video de YouTube
    // Agrega más URLs de videos de YouTube aquí
  ];

  const categoryDetails = {
    'Discapacidad Intelectual': (
      <div>
        <p>La discapacidad intelectual puede presentarse en el ser humano antes del nacimiento, durante 
el parto o durante los cinco primeros años de vida, como resultado de altas temperaturas que 
producen meningitis y convulsiones, es decir, contracciones violentas e involuntarias que afectan 
el funcionamiento del cerebro; también por un traumatismo derivado de un golpe fuerte en el cerebro, que ocasiona diferentes formas y características de la discapacidad intelectual. Las discapacidades de tipo intelectual más comunes son:
<p>• Síndrome de Down. Se trata de una alteración genética ocasionada por la presencia de un 
cromosoma extra en el par 21, y se produce durante la división celular en el momento de 
la gestación, sin que alguno de los padres sea responsable de que esto suceda. Los niños 
con síndrome de Down presentan rasgos físicos similares, de modo que se parecen mucho 
entre sí, y enfrentan una condición de vida diferente, no una enfermedad. Tres características distinguen a los niños: bajo tono muscular, discapacidad intelectual y retardo en el 
lenguaje.
Las alteraciones cromosómicas llevan el apellido del médico que las descubrió, en este 
caso el doctor John Langdon Down (en 1866); otros síndromes, los de Raid y West, aunque poco comunes, también conllevan discapacidad intelectual. Síndrome significa conjunto de características</p>.
• Hidrocefalia (cráneo demasiado grande) o microcefalia (cráneo pequeño). Son más visibles 
y también provocan discapacidad intelectual; sin embargo, es poco el porcentaje en que 
se presentan.
Hay niños que en su apariencia física no parecen sufrir problemas, pero manifiestan una discapacidad intelectual severa, moderada o leve en su aprendizaje, lenguaje, forma de relacionarse, atención, comprensión y retención, lo que se traduce en necesidades educativas especiales que requieren satisfactores adecuados al nivel de esas necesidades.</p>
      </div>
    ),
    'Discapacidad Motriz': (
      <div>
        <p>La alteración 
del aparato motor que dificulta o imposibilita el desarrollo de capacidades que permitan participar 
en actividades propias de la vida cotidiana, como estar de pie, caminar, desplazarse, tomar y 
manipular objetos con las manos, hablar, hacer gestos, entre otras acciones que requieren 
movimiento y control de la postura corporal. La alteración es causada por un funcionamiento 
deficiente del sistema nervioso, del sistema muscular y de los sistemas óseo - articulatorio o de una 
interrelación de los tres sistemas, lo cual dificulta o imposibilita la movilidad funcional de algunas de 
las partes del cuerpo.</p>
      </div>
    ),
    'Discapacidad Auditiva': (
      <div>
        <p>Los niños con discapacidad auditiva enfrentan dificultad para adquirir el lenguaje. El lenguaje es 
una forma de conceptualizar el mundo, entenderlo y explicarlo; también, uno de los medios que 
nos permiten adquirir conocimientos e información acerca de nuestras experiencias y de los demás.
A un niño con pérdida auditiva que no logra desarrollar un lenguaje le será muy difícil adquirir 
conocimientos y comprender los eventos a su alrededor. </p>
      </div>
    ),
    'Discapacidad Visual': (
      <div>
        <p>Información sobre Discapacidad Visual</p>
      </div>
    ),
    'Discapacidad Múltiple': (
      <div>
        <p>Información sobre Discapacidad Múltiple</p>
      </div>
    ),
    'Trastorno del Espectro Autista (TEA)': (
      <div>
        <p></p>
      </div>
    ),
    'Educación Inicial': (
      <div>
        <p>El objetivo general de la educación inicial es potenciar el desarrollo integral de niñas y niños de cero a tres años en un 
ambiente rico en experiencias afectivas, educativas y sociales, y el 
acompañamiento a las familias en las prácticas de crianza</p>
<p>Quien está a cargo de educación inicial en el CAM No.5 es la maestra " "</p>
      </div>
    ),
    'Educación Preescolar':(
      <div>
        <p>El objetivo de la educación preescolar es favorecer el desarrollo de distintos tipos de lenguajes a través del juego, el canto, 
la lectura, y diversas expresiones artísticas que se realizan en interacción con otros niños y 
niñas.</p>
      </div>
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
      </header>
      <div className="category-buttons">
        {categoryButtons.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      {showSubMenu && (
        <div className="sub-menu">
          {categoryDetails[selectedCategory] || categoryInfo[selectedCategory]}
        </div>
      )}
    </div>
  );
}

export default App;

// Resto del código CSS ...









