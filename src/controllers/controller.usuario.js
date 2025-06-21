import serviceUsuario from "../services/service.usuario.js";
import jwt from "../token.js";

async function Favoritos(req, res) {
  try {
    const id_usuario = req.params.id_usuario; // Pegar do token JWT
    const favoritos = await serviceUsuario.Favoritos(id_usuario);

    res.status(200).json(favoritos);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function GetUsuarios(req, res) {
  try {
    const usuarios = await serviceUsuario.GetUsuarios();

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Login(req, res) {
  const { email, senha } = req.body;

  const usuario = await serviceUsuario.Login(email, senha);

  if (usuario.length == 0)
    res.status(401).json({ error: "E-mail ou senha inválida" });
  else res.status(200).json(usuario);
}

// async function Login(req, res) {

//     const { email, senha } = req.body;

//     const usuario = await serviceUsuario.Login(email, senha);

//     if (usuario.length == 0)
//         res.status(401).json({ error: "E-mail ou senha inválida" });
//     else
//         res.status(200).json(usuario);
// }

async function Inserir(req, res) {
  try {
    const {
      nome,
      email,
      senha,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
    } = req.body;

    const usuario = await serviceUsuario.Inserir(
      nome,
      email,
      senha,
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      cep
    );

    const id_usuario = usuario;

    // const token = jwt.CreateJWT(id_usuario);
    const token = jwt.createToken(id_usuario);

    return res.status(201).json({ usuario, token });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Perfil(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const usuario = await serviceUsuario.Perfil(id_usuario);

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default { Favoritos, Login, GetUsuarios, Inserir, Perfil };
