import jwt from 'jsonwebtoken'

const secretToken = "myURLKEY@123"

function createToken(id_usuario){
    const token = jwt.sign({id_usuario}, secretToken, {
        expiresIn: '5d'
    })

    return token
}

function ValidateToken(req, res, next){
    
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.status(401).json({error: "Token não informado!"})
    }

    const [aux, token] = authToken.split(" ")

    jwt.verify(token, secretToken, (err, decoded) => {

        if(err) return res.status(401).json({error: "Token Inválido!"}) 

            req.id_usuario = decoded.id_usuario
    })
}

export default {createToken, ValidateToken}