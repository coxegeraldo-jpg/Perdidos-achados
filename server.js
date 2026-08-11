const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Permite receber dados em JSON
app.use(express.json());

// Permite receber dados de formulários
app.use(express.urlencoded({ extended: true }));

// Servir ficheiros estáticos (HTML, CSS, JS, imagens)
app.use(express.static(path.join(__dirname)));

// Página inicial
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Rota de teste
app.get("/api", (req, res) => {
    res.json({
        mensagem: "Servidor do Perdidos & Achados.ao está a funcionar!"
    });
});
// Base de dados temporária (em memória)

const anuncios = [

{
    id:1,
    titulo:"Bilhete encontrado",
    provincia:"Luanda",
    municipio:"Viana",
    estado:"Perdido",
    foto:"bi.jpg"
},

{
    id:2,
    titulo:"Carteira Perdida",
    provincia:"Luanda",
    municipio:"Talatona",
    estado:"Perdido",
    foto:"carteira.jpg"
},

{
    id:3,
    titulo:"iPhone 14 Encontrado!",
    provincia:"Luanda",
    municipio:"Cazenga",
    estado:"Encontrado",
    foto:"iphone.jpg"
},

{
    id:4,
    titulo:"chaves encontradas",
    provincia:"Benguela",
    municipio:"Baia",
    estado:"Encontrado",
    foto:"chave.jpg"
},

{
    id:5,
    titulo:"meninos desaparecidos",
    provincia:"Huambo",
    municipio:"lubango",
    estado:"perdido",
    foto:"pessoa.jpg"
},

{
    id:6,
    titulo:"mochila esquecida",
    provincia:"Icolo e bengo",
    municipio:"zango 1",
    estado:"perdido",
    foto:"mochila.jpg"
},

{
    id:7,
    titulo:"cao desaparecido",
    provincia:"Cabinda",
    municipio:"Cabinda",
    estado:"perdido",
    foto:"animal.jpg"
},

{
    id:8,
    titulo:"pen-drive esquecido",
    provincia:"Luanda",
    municipio:"morrobento",
    estado:"Encontrado",
    foto:"pen-drive.jpg"
},

];

// Listar anúncios

app.get("/api/anuncios", (req, res) => {

    const pesquisa = req.query.q;

    if (!pesquisa) {
        return res.json(anuncios);
    }

    const resultado = anuncios.filter(anuncio =>

        anuncio.titulo.toLowerCase().includes(pesquisa.toLowerCase())

    );

    res.json(resultado);

});

// Iniciar servidor
app.listen(PORT, () => {
    console.log("==================================");
    console.log("Perdidos & Achados.ao");
    console.log(`Servidor iniciado em: http://localhost:${PORT}`);
    console.log("==================================");
});
