import QRCode from 'qrcode'
import { writeFileSync } from 'fs'

const sourceQR = 'oxwich50-source-qr.png';
const sourceURL = 'https://github.com/richdawe/oxwich50';

const keymapQR = 'oxwich50-keymap-qr.png';
const keymapURL = 'https://github.com/richdawe/qmk_firmware/blob/master/keyboards/oxwich50/keymaps/richdawe/keymap.c';

await QRCode.toFile(sourceQR, sourceURL);
await QRCode.toFile(keymapQR, keymapURL);

const content = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Oxwich50 Links</title>
  </head>
  <body>
    <div>
      <p><strong>Oxwich50 Keyboard Source</strong></p>
      <p><img src="${sourceQR}"></p>
      <p><a href="${sourceURL}">${sourceURL}</a></p>
    </div>
    <div style="margin-top:200px">
      <p><strong>richdawe's keymap for the Oxwich50</strong></p>
      <p><img src="${keymapQR}"></p>
      <p><a href="${keymapURL}">${keymapURL}</a></p>
    </div>
  </body>
</html>
`;
writeFileSync('index.html', content, 'utf8');
