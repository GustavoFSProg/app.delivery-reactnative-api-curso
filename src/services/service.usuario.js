
import repositoryUsuario from "../repositories/repository.usuario.js";

async function Favoritos(id_usuario) {

    const favoritos = await repositoryUsuario.Favoritos(id_usuario);

    return favoritos;
}


async function GetUsuarios() {

    const usuarios = await repositoryUsuario.GetUsuarios();

    return usuarios;
}


async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

    const usuario = await repositoryUsuario.Inserir(nome, email, senha, endereco, complemento,
        bairro, cidade, uf, cep);

    return usuario;
}

export default { Favoritos, GetUsuarios, Inserir };