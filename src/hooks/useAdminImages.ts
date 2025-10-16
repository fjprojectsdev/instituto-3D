import { useState, useEffect } from 'react';

export const useAdminImages = () => {
  const [images, setImages] = useState({
    hero: '',
    about: '',
    project1: '',
    project2: '',
    project3: ''
  });

  const loadImages = () => {
    const loadedImages = {
      hero: localStorage.getItem('image_hero') || '',
      about: localStorage.getItem('image_about') || '',
      project1: localStorage.getItem('image_project1') || '',
      project2: localStorage.getItem('image_project2') || '',
      project3: localStorage.getItem('image_project3') || ''
    };
    setImages(loadedImages);
  };

  useEffect(() => {
    loadImages();
    
    // Escutar mudanças no localStorage
    const handleStorageChange = () => {
      loadImages();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Verificar mudanças a cada segundo (para mudanças na mesma aba)
    const interval = setInterval(loadImages, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return images;
};