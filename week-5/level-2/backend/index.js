const express = require("express");
const cors = require("cors");
const Cards = require("./db/db");

const app = express();

app.use(cors());

app.use(express.json());

const port = 3000;

app.get("/get", async (req, res) => {
  const allCards = await Cards.find();
  res.json({
    allCards,
  });
});

app.get("/get-one", async (req, res) => {
  const { id } = req.body;

  const card = await Cards.findById(id);

  res.json({
    card,
  });
});

app.post("/post", async (req, res) => {
  const { name, description, interest, linkedin, twitter } = req.body;

  const createdCard = await Cards.create({
    name,
    description,
    interest,
    linkedin,
    twitter,
  });

  res.json({
    message: "User created successfully",
    createdCard,
  });
});

app.put("/put", async (req, res) => {
  const { id, name, description, interest, linkedin, twitter } = req.body;

  const updated = await Cards.findByIdAndUpdate(
    id,
    {
      name,
      description,
      interest,
      linkedin,
      twitter,
    },
    { new: true }
  );
  res.json({
    msg: "Card updated successfully",
    updated,
  });
});

app.delete("/delete", async (req, res) => {
  const { id } = req.body;

  await Cards.findByIdAndDelete(id);

  res.json({
    mes: "Card deleted successfully",
  });
});

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
