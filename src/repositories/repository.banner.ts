import { execute } from "../database/sqlite";

async function Listar() {

    const sql = "select * from banner order by ordem";
    const banners = await execute(sql, []);

    return banners;
}

export default { Listar };