import React, { useState } from 'react';
import './App.css';

import logo from './CAM5.jpg';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showSubMenuOnSlideChange, setShowSubMenuOnSlideChange] = useState(false);
  const [showPostCarousel, setShowPostCarousel] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setShowSubMenu(!showSubMenu);
      setShowSubMenuOnSlideChange(!showSubMenuOnSlideChange);
      setShowPostCarousel(false);
      setSelectedPost(null);
    } else {
      setSelectedCategory(category);
      setShowSubMenu(true);
      setShowSubMenuOnSlideChange(true);
      setShowPostCarousel(false);
      setSelectedPost(null);
    }
  };

  const handleSlideChange = () => {
    if (showSubMenuOnSlideChange) {
      setShowSubMenu(false);
    }
  };

  const handleSubMenuButtonClick = () => {
    setShowSubMenu(!showSubMenu);
    setShowSubMenuOnSlideChange(!showSubMenuOnSlideChange);
    setShowPostCarousel(false);
    setSelectedPost(null);
  };

  const handleBlogButtonClick = () => {
    setShowSubMenu(!showSubMenu);
    setShowSubMenuOnSlideChange(!showSubMenuOnSlideChange);
    setShowPostCarousel(true);
    setSelectedPost(null);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const categoryButtons = ['Educación Inicial', 'Preescolar', 'Primaria', 'Secundaria', 'Talleres'];

  const posts = [
    {
      id: 1,
      title: 'Título del Post 1',
      content: 'Contenido completo del Post 1',
    },
    {
      id: 2,
      title: 'Título del Post 2',
      content: 'Contenido completo del Post 2',
    },
    // Agrega más posts aquí
  ];

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
          <button onClick={handleBlogButtonClick}>Blog</button>
          <button>Videos</button>
        </div>
      )}
      {showPostCarousel && selectedPost === null && (
        <div className="post-carousel">
          {/* Carrusel de posts */}
          {posts.map((post) => (
            <div key={post.id} className="post-slide" onClick={() => handlePostClick(post)}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      )}
      {selectedPost && (
        <div className="full-post" onClick={() => setSelectedPost(null)}>
          {/* Muestra el texto completo del post */}
          <h3>{selectedPost.title}</h3>
          <p>{selectedPost.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// Resto del código CSS ...





