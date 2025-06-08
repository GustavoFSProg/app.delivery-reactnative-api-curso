import { execute } from "../database/sqlite.js";

async function Listar() {

    const sql = "select * from empresa";
    const empresas = await execute(sql, []);

    return empresas;
}

export default { Listar };