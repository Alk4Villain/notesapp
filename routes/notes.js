const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.render("index", { notes });
});

router.get("/new", (req, res) => res.render("new"));
router.post("/", async (req, res) => {
  const { title, content } = req.body;
  await Note.create({ title, content });
  res.redirect("/");
});

router.get("/:id/edit", async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.render("edit", { note });
});

router.put("/:id", async (req, res) => {
  const { title, content } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, content });
  res.redirect("/");
});

router.delete("/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
