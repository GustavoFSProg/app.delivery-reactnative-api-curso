import serviceEmpresas from '../services/service.empresa.js'
async function Listar(req, res) {
    try {
        const empresas = await serviceEmpresas.Listar();

        res.status(200).json(empresas);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };