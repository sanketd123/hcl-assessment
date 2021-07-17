/**
 * NG_DIR_PATH = /app
 * NG_PORT = 3000
 */
const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const hsts = require('hsts');
const helmet = require('helmet');
// const request = require('request');
const jwt = require('jsonwebtoken');
const config = require('./config');

// Api of Every Module
const dataRoutes = require('./api/routes/data');

app.use(helmet({
    frameguard: {
        action: 'deny'
    }
}));
app.use(hsts({
    maxAge: 31536000, // 12 months
    includeSubDomains: true,
    preload: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const NG_DIR_PATH = "/dist/HCL" || '/app';
app.use(express.static(path.join(__dirname, NG_DIR_PATH)));

// Mask Server version disclosure via HTTP response headers
app.use(function(req, res, next) {
    res.setHeader('Server', 'Next Gen');
    next();
});

app.use('/data', dataRoutes);


/* To validate login */
app.post('/validateLogin', bodyParser.json(), (req, res) => {
    const username = req.body.username;

    const password = req.body.password;

    if (username && password) {
        if (username === 'admin' && password === 'adminadmin') {
            const token = jwt.sign({ username: username },
                config.secret, { expiresIn: '2h' } // expires in 2 hours
            );
            // return the JWT token for the future API calls
            res.json({
                success: true,
                message: 'Authentication successful',
                token: token
            });
        } else {
            res.send(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.send(400).json({
            success: false,
            message: 'Authentication failed. Please check the request'
        });
    }
});



/* Handle all application URL(s) */
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

/* Create the server for application */
const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log('HCL server is running on port ' + port + '...'));