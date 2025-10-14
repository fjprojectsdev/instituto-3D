import axios from 'axios';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendToGoogleSheets = async (data: ContactData) => {
  // URL do Google Apps Script Web App
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVOG3RET0bAlsC7mssMKtz1fgyRzSZYImhPw1mvtSOKloaC_iKpBGg1Ydg57VSY_pT8w/exec';
  
  try {
    const response = await axios.post(SCRIPT_URL, {
      ...data,
      timestamp: new Date().toLocaleString('pt-BR')
    });
    
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    throw error;
  }
};