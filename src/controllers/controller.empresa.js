import serviceEmpresas from '../services/service.empresa.js'


async function Destaques(req, res) {

    const id_usuario = req.id_usuario
    try {
        const empresas = await serviceEmpresas.Destaques(id_usuario);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}


async function Listar(req, res) {
    try {
        const id_usuario = req.id_usuario;
        const busca = req.query.busca;
        const empresas = await serviceEmpresas.Listar(id_usuario, busca);

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Destaques, Listar };