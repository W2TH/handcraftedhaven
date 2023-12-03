// pages/api/review.js
import db from '../../database/dbConnect';

export default async function submitReview(req, res) {
  if (req.method === 'POST') {
    try {
      // Extracting data sent from the frontend
      const { content, rating } = req.body;

      // SQL query to insert the new review data into the database
      const sql = 'INSERT INTO reviews (content, rating) VALUES (?, ?)';
      db.run(sql, [content, rating], function(err) {
        if (err) {
          console.error(err.message);
          res.status(500).json({ message: 'Failed to submit review' });
          return;
        }
        res.status(200).json({ message: 'Review submitted successfully', id: this.lastID });
      });

    } catch (error) {
      console.error('Server error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
