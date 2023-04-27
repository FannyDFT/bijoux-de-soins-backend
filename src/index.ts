import app from "./app";

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀 `);
});
