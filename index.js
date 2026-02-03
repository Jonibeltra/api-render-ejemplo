import express from 'express';
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
res.json({ message: 'API funcionando correctamente' });
});
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('Servidor arrancado en el puerto', PORT);
  });
} else {
  console.log('Modo test: servidor NO iniciado');
}