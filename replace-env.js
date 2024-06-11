const fs = require('fs');

const envKeys = [
  'FIREBASE_API_KEY',
  'FIREBASE_AUTH_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_STORAGE_BUCKET',
  'FIREBASE_MESSAGING_SENDER_ID',
  'FIREBASE_APP_ID',
  'FIREBASE_MEASUREMENT_ID'
];

const filePath = 'index.html';
let fileContent = fs.readFileSync(filePath, 'utf8');

envKeys.forEach(key => {
  const value = process.env[key];
  const regex = new RegExp(`\\$\\{${key}\\}`, 'g');
  fileContent = fileContent.replace(regex, value);
});

fs.writeFileSync(filePath, fileContent);
console.log('Environment variables replaced in HTML.');
