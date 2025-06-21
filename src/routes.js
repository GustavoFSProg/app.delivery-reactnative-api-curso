import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerpedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

// router.post("/usuarios/login", (req, res) => {

//     //const email = req.body.email;
//     //const senha = req.body.senha;
//     const { email, senha } = req.body;

//     if (email == "teste@teste.com" && senha == "12345") {
//         res.status(200).json({
//             id_usuario: 123,
//             email: "teste@teste.com",
//             nome: "Heber Stein Mazutti",
//             insta: "@devpoint.com.br"
//         });
//     } else {
//         res.status(401).json({ error: "E-mail ou senha inválida" });
//     }

// });

// router.post("/usuarios", (req, res) => {

//     const { nome, email, senha, endereco, complemento, bairro, cidade, uf, cep } = req.body;

//     res.status(201).json({
//         id_usuario: 123,
//         nome,
//         email,
//         senha,
//         endereco,
//         complemento,
//         bairro,
//         cidade,
//         uf,
//         cep,
//         insta: "@devpoint.com.br"
//     });
// });

// router.get("/restaurantes", (req, res) => {

//     // URI Params: http://localhost:3001/restaurantes/10
//     // Query params: http://localhost:3001/restaurantes?busca=Pizza (somente GET)
//     const busca = req.query.busca;

//     res.json([
//         { restaurante: 1, nome: "Burger King" },
//         { restaurante: 2, nome: "Mc Donalds" }
//     ]);

// });

// produtos
router.get("/categorias", controllerCategoria.Listar);
// router.get("/categorias", jwt.ValidateToken, controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);

// empresas
router.get(
  "/empresas/destaques/:id",

  controllerEmpresa.Destaques
);

router.get("/empresas", jwt.ValidateToken, controllerEmpresa.Listar);
router.post(
  "/empresas/:id_empresa/favoritos/:id_usuario",
  // jwt.ValidateToken,
  controllerEmpresa.InserirFavorito
);
router.delete(
  "/empresas/:id_empresa/favoritos/:id_usuario",
  // jwt.ValidateToken,
  controllerEmpresa.ExcluirFavorito
);
router.get(
  "/empresas/:id_empresa/cardapio",
  // jwt.ValidateToken,
  controllerEmpresa.Cardapio
);
router.get(
  "/empresas/:id_empresa/produtos/:id_produto",
  jwt.ValidateToken,
  controllerEmpresa.ListarProdutoId
);

// pedidos
router.get("/pedidos", controllerpedido.Listar);
router.get("/pedidos/:id_pedido", controllerpedido.ListarId);
router.post("/pedidos", jwt.ValidateToken, controllerpedido.Inserir);

// Usuarios
router.get("/usuarios", controllerUsuario.GetUsuarios);
router.get(
  "/usuarios/favoritos/:id_usuario",
  // jwt.ValidateToken,
  controllerUsuario.Favoritos
);
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);
router.get("/usuarios/perfil", jwt.ValidateToken, controllerUsuario.Perfil);

export default router;
