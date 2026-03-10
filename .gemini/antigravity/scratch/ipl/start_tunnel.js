// start_tunnel.js
const localtunnel = require('localtunnel');
const fs = require('fs');
const { exec } = require('child_process');

// Start simple HTTP server on 8080 if not running
exec('npx http-server -p 8080 -c-1', (error, stdout, stderr) => { });

(async () => {
    const tunnel = await localtunnel({ port: 8080 });

    // Write the tunnel URL to a file we can read
    fs.writeFileSync('tunnel_output.txt', tunnel.url);
    console.log('Tunnel started at:', tunnel.url);

    tunnel.on('close', () => {
        console.log('Tunnel closed');
    });
})();
