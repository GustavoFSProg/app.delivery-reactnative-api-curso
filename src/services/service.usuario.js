import bcrypt from 'bcrypt'
import repositoryUsuario from "../repositories/repository.usuario.js";
import jwt from '../token.js'

async function Favoritos(id_usuario) {

    const favoritos = await repositoryUsuario.Favoritos(id_usuario);

    return favoritos;
}


async function GetUsuarios() {

    const usuarios = await repositoryUsuario.GetUsuarios();

    return usuarios;
}


async function Inserir(nome, email, senha, endereco, complemento, bairro, cidade, uf, cep) {

  const hashSenha = await bcrypt.hash(senha, 10)

    const usuario = await repositoryUsuario.Inserir(nome, email, hashSenha, endereco, complemento,
        bairro, cidade, uf, cep);

         const id_usuario = usuario
        
        
        
                // const token = jwt.CreateJWT(id_usuario);
            const token =  jwt.createToken(id_usuario)
        

    return usuario;
}


async function Login( email, senha) {

    const usuario = await repositoryUsuario.ListarByEmail(email)

    
    if (usuario.length == 0){
        return []
    }else{

        if(await bcrypt.compare(senha, usuario.senha)) {

               const id_usuario = usuario
        
        
        
                // const token = jwt.CreateJWT(id_usuario);
            const token =  jwt.createToken(id_usuario)
                
                return {usuario , token};
            }else{
                return []
            }
    }

//   const hashSenha = await bcrypt.hash(senha, 10)
}

export default { Favoritos, GetUsuarios, Inserir, Login };