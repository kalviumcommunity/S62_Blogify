const express = require("express");
const app = express();
const router = express.Router();
const PORT = 3000;
const {getMongoDB} = require("./DB/db.js")
// Middleware to parse JSON request bodies
app.use(express.json());

// Dummy in-memory array to store items
const items = [];

// get (READ)
router.get('/user', async (req, res) => {
  try {
    const db =  getMongoDB();
    console.log(db);
    const userData = await db.collection("users").find().toArray();
    console.log(userData);
    return res.status(200).send(userData);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

// post (CREATE)
router.post('/', async (req, res) => {
  try {
    const db =  getMongoDB();
    console.log(db);
    console.log(db, req.body);
    const insertData = await db.collection("users").insertOne({ ...req.body });
    return res
      .status(201)
      .send({ message: 'Data inserted successfully', insertData });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

// delete (DELETE)
router.delete('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const db =  getMongoDB();
    console.log(db);
    // const db = await getDbFn();
    console.log(db);
    const { id } = req.params;
    const deleteUser = await db.collection("users").deleteOne({ _id: id });
    return res
      .status(200)
      .send({ message: 'Deleted successfully', deleteUser });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

// put/patch (UPDATE)
router.put('/:id', async (req, res) => {
  try {
    const db =  getMongoDB();
    console.log(db);
    const { id } = req.params;
    // const db = await getDbFn();
    console.log(db);
    const updateUser = await db.collection("users").updateOne(
      { _id: id },
      { $set: { ...req.body } }
    );
    return res
      .status(200)
      .send({ message: 'Updated successfully', updateUser });
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});


module.exports = router;
