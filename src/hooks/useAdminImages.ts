import { useState, useEffect } from 'react';

export const useAdminImages = () => {
  const [images, setImages] = useState({
    hero: '',
    about: '',
    project1: '',
    project2: '',
    project3: ''
  });

  useEffect(() => {
    // Carregar imagens do localStorage
    const loadedImages = {
      hero: localStorage.getItem('image_hero') || '',
      about: localStorage.getItem('image_about') || '',
      project1: localStorage.getItem('image_project1') || '',
      project2: localStorage.getItem('image_project2') || '',
      project3: localStorage.getItem('image_project3') || ''
    };
    setImages(loadedImages);
  }, []);

  return images;
};