import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('database.db', (erro) => {
    if(erro) {
        console.log(`Erro: ${erro.message}`);
    }else {
        console.log('Banco de dados conectado com sucesso.');
    }
});

process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);

export default db