import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = `select p.*, e.nome, e.icone
    
    from pedido p
    join empresa e on (e.id_empresa = p.id_empresa)
    order by id_pedido desc`;
    const pedidos = await execute(sql, []);

    return pedidos;
}

export default { Listar };