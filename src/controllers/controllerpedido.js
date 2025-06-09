import servicePedido from '../services/service.pedido.js';


async function Listar(req, res) {
    try {
        const pedidos = await servicePedido.Listar();

        res.status(200).json(pedidos);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export default { Listar };