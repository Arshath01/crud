const express = require('express');
const bodyParser = require('body-parser');
const { pool } = require('./db');
const cors = require('cors');
const app = express();
app.use(bodyParser.json())
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.put('/user/:id', async (req, res) => {
    let client;
    try {
        const { id } = req.params;
        const { name, Description } = req.body;
        client = await pool.connect();
        const query = await client.query(
            'UPDATE crud SET name=$1, Description=$2 WHERE id=$3', [name, Description, id]
        );
        console.log(query);
        res.send('user updated succesfully');
    }
    catch (err) {
        console.log(err)
    }
    finally{
        client.release();
    }
})


app.get('/userdata', async (req, res) => {
    let client;
    try {
        client = await pool.connect();
        const query = await client.query('SELECT * FROM crud ORDER BY id');
        console.log(query.rows);
        res.send(query.rows);
    }
    catch (err) {
        console.log(err)
    }
    finally{
        client.release();
    }
})

app.post('/newuser', async (req, res) => {
    let client;
    try {
        const { name, Description } = req.body;
        client = await pool.connect();
        const query = await client.query(
            'INSERT INTO crud (name,Description) VALUES ($1,$2)', [name, Description]
        );
        console.log(query);
        res.send('user created succesfully');

    }
    catch (err) {
        console.log(err);
    }
    finally{
        client.release();
    }
})

app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    let client;
    try {
        client = await pool.connect();
        const query = await client.query('DELETE FROM crud WHERE id = $1', [id]);
        console.log(query);
        res.send('User deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error deleting user');
    }
    finally{
        client.release();
    }
});


app.listen(port, () => {
    console.log(`port is listening: ${port}`)
})