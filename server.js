const express = require('express');
const { renderToString } = require('@vue/server-renderer');
const { createSSRApp } = require('vue');
const { resolve } = require('path');
const fs = require('fs');

const app = express();

// Обработка статических файлов (например, main.js и main.css)
app.use(express.static(resolve(__dirname, './dist')));

app.get('*', async (req, res) => {
    const appInstance = createSSRApp(require('./dist/server/main.js').default);

    try {
        const appContent = await renderToString(appInstance);
        const template = fs.readFileSync(resolve(__dirname, './dist/index.html'), 'utf-8');
        const html = template.replace('<div id="app"></div>', `<div id="app">${appContent}</div>`);

        res.setHeader('Content-Type', 'text/html');
        res.send(html);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
