// pages/api/add-product.js
import db from '../../database/dbConnect';

export default async function addProduct(req, res) {
  if (req.method === 'POST') {
    try {
      // Extracting data sent from the frontend
      const { productName, productDescription, productPrice /*, productImage*/ } = req.body;

      // SQL query to insert the new product data into the database
      const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
      db.run(sql, [productName, productDescription, productPrice], function(err) {
        if (err) {
          console.error(err.message);
          res.status(500).json({ message: 'Failed to add product' });
          return;
        }
        res.status(200).json({ message: 'Product added successfully', id: this.lastID });
      });

    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
