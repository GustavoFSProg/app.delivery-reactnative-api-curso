import { execute } from "../database/sqlite.js";

async function Favoritos(id_usuario) {

    const sql = `select f.*, e.icone, e.nome, e.endereco, e.complemento, e.bairro, e.cidade, e.uf
    from usuario_favorito f
    join empresa e on (e.id_empresa = f.id_empresa)
    where f.id_usuario = ?`;

    const favoritos = await execute(sql, [id_usuario]);

    return favoritos;
}


async function GetUsuarios() {

    const sql = `select * from usuario`;

    const usuarios = await execute(sql, []);

    return usuarios;
}


async function ListarByEmail(email) {

    const sql = `select id_usuario, nome, senha, email, endereco, complemento,
      cidade, bairro, cep, dt_cadastro
      from usuario where email = ?`;

    const usuarios = await execute(sql, [email]);

    if (usuarios.length == 0){
        return []
    }else{
        return usuarios[0]
    }


}


async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

    const sql = `insert into usuario(nome, email, senha, 
            endereco, complemento, bairro, cidade, uf, cep, dt_cadastro) 
            values(?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP) returning id_usuario`;

    let usuario = await execute(sql, [nome, email, senha, endereco, complemento,
        bairro, cidade, uf, cep]);

    

    return usuario[0];
}

export default { Favoritos, Inserir, ListarByEmail, GetUsuarios };