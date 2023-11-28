const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'banco/database.sqlite',
    logging: false,
});

const Usuario = sequelize.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
    },
    data_nascimento: {
        type: Sequelize.DATE,
    },
    email: {
        type: Sequelize.STRING,
    },
});

sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados com o banco de dados.');
    })
    .catch(err => {
        console.error('Erro ao sincronizar modelos:', err);
    });

module.exports = {
    Usuario,
};
