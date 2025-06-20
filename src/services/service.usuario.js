import bcrypt from "bcrypt";
import repositoryUsuario from "../repositories/repository.usuario.js";
import jwt from "../token.js";

async function Favoritos(id_usuario) {
  const favoritos = await repositoryUsuario.Favoritos(id_usuario);

  return favoritos;
}

async function GetUsuarios() {
  const usuarios = await repositoryUsuario.GetUsuarios();

  return usuarios;
}

async function Inserir(
  nome,
  email,
  senha,
  endereco,
  complemento,
  bairro,
  cidade,
  uf,
  cep
) {
  const validarUsuario = await repositoryUsuario.ListarByEmail(email);

  if (validarUsuario.id_usuario)
    throw "Já existe uma conta criada com esse e-mail";

  const hashSenha = await bcrypt.hash(senha, 10);

  const usuario = await repositoryUsuario.Inserir(
    nome,
    email,
    hashSenha,
    endereco,
    complemento,
    bairro,
    cidade,
    uf,
    cep
  );
  const token = jwt.createToken(usuario);

  usuario.token;
  usuario.nome = nome;
  usuario.email = email;
  usuario.endereco = endereco;
  usuario.complemento = complemento;
  usuario.bairro = bairro;
  usuario.cidade = cidade;
  usuario.uf = uf;
  usuario.cep = cep;

  // const id_usuario = usuario;

  // const token = jwt.CreateJWT(id_usuario);

  return usuario;
}

async function Login(email, senha) {
  const usuario = await repositoryUsuario.ListarByEmail(email);

  if (usuario.length == 0) return [];
  else {
    if (await bcrypt.compare(senha, usuario.senha)) {
      delete usuario.senha;
      usuario.token = jwt.createToken(usuario.id_usuario);

      return usuario;
    } else return [];
  }
}

// async function Login(email, senha) {
//   const usuario = await repositoryUsuario.ListarByEmail(email);

//   if (usuario.length == 0) {
//     return [];
//   } else {
//     if (await bcrypt.compare(senha, usuario.senha)) {
//       const id_usuario = usuario;

//       // const token = jwt.CreateJWT(id_usuario);
//       const token = jwt.createToken(id_usuario);

//       return { usuario, token };
//     } else {
//       return [];
//     }
//   }

//   //   const hashSenha = await bcrypt.hash(senha, 10)
// }

async function Perfil(id_usuario) {
  const usuario = await repositoryUsuario.ListarById(id_usuario);

  return usuario;
}

export default { Favoritos, GetUsuarios, Inserir, Perfil, Login };
