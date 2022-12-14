const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const query = `SELECT * FROM item;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all items from db', err);
      res.sendStatus(500)
    });
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality





});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log('req.user.id', req.user.id, req.body)
  if (req.user.id === req.body.user_id) {
    const queryText = `DELETE FROM "item" WHERE "id" = $1;`;
    const queryParams = [req.params.id];

    pool.query(queryText, queryParams)
      .then(result => {

        res.sendStatus(200);

      }).catch(err => {

        res.sendStatus(500);

      })
  } else {
    res.sendStatus(403);
  }



});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
