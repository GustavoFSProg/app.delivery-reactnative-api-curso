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

export default { Destaques };