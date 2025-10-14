# Configuração Google Sheets

## Passo 1: Criar Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie nova planilha chamada "Contatos Projeto 3D"
3. Na primeira linha, adicione os cabeçalhos:
   - A1: Nome
   - B1: Email  
   - C1: Telefone
   - D1: Mensagem
   - E1: Data/Hora

## Passo 2: Criar Google Apps Script
1. Na planilha, vá em **Extensões > Apps Script**
2. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.name,
      data.email, 
      data.phone,
      data.message,
      data.timestamp
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Passo 3: Publicar Script
1. Clique em **Implantar > Nova implantação**
2. Tipo: **Aplicativo da Web**
3. Executar como: **Eu**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique **Implantar**
6. Copie a **URL do aplicativo da Web**

## Passo 4: Configurar no Código
1. Abra `src/services/googleSheets.ts`
2. Substitua `YOUR_SCRIPT_ID` pela URL copiada
3. Salve o arquivo

## Teste
Após configurar, teste o formulário no site. Os dados aparecerão na planilha automaticamente.