const http = require('http')

// Após criar um servidor, necessário criar sistema de req e resposta
// onde está os códigos de resposta de onde virá a resposta
// apontando para os locais que se deseja

const server = http.createServer((req, res) => {
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>contato</h1'
    resp['semURL'] = '<h1>Sem resposta</h1'
    res.end(resp[req.url] || resp['semURL'])
})

server.listen(3001, 'localhost', () => {
    console.log('Servidor de pé em: http://localhost:3001')
})