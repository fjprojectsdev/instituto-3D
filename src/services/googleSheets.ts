// Removido axios, usando fetch nativo

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendToGoogleSheets = async (data: ContactData) => {
  // URL do Google Apps Script Web App
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzz-rmAEsoUBYNxHtpsl5NniQ0xOoorFFwGAjZvv-9kzibQSVDEnfIV4TsZqsCzC7BhXg/exec';
  
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toLocaleString('pt-BR'));
    
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    });
    
    return await response.json();
  } catch (error) {
    console.error('Erro ao enviar para Google Sheets:', error);
    throw error;
  }
};