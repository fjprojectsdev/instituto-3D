function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1oVXr2DHwi85vkw-hvCf0_lTgWKW4z5b_iL2yFevWEGQ').getActiveSheet();
    
    // Pega os dados do formulário
    const name = e.parameter.name;
    const email = e.parameter.email;
    const phone = e.parameter.phone;
    const message = e.parameter.message;
    const timestamp = e.parameter.timestamp;
    
    // Adiciona uma nova linha com os dados
    sheet.appendRow([name, email, phone, message, timestamp]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}