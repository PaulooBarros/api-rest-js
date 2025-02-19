import app from "./app";

const port = 3001;
app.listen(port, ()=>{
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`clique na porta http://localhost:${port}`);
});
