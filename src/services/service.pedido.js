import repositoryPedido from "../repositories/repository.pedido.js";


async function Listar() {

    const pedidos = await repositoryPedido.Listar();

    return pedidos;
}

export default { Listar };