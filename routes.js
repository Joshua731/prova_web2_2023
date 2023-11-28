const express = require('express');
const { Usuario } = require('./models.js');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/usuarios', async (req, res) => {
    try {
        const newUser = await Usuario.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); 
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id); 
        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.patch('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Usuario.update(req.body, { where: { id } }); 
        if (updated) {
            const updatedUsuario = await Usuario.findByPk(id);
            res.json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Usuario.destroy({ where: { id } }); 
        if (deleted) {
            res.json({ message: 'Usuário excluído com sucesso' });
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});