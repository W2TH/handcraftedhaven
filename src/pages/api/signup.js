// pages/api/signup.js
import db from '../../database/dbConnect';

export default async function signup(req, res) {
  if (req.method === 'POST') {
    const { name, email, password, description } = req.body;

    const sql = 'INSERT INTO users (name, email, password, description) VALUES (?, ?, ?, ?)';
    db.run(sql, [name, email, password, description], function(err) {
      if (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
        return;
      }
      res.status(200).json({ message: 'Signup successful', id: this.lastID });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
