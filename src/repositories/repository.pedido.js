import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = "select * from pedido";
    const pedidos = await execute(sql, []);

    return pedidos;
}

export default { Listar };