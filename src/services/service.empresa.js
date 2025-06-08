// import repositoryEmpresa from "../repositories/repository.categoria.js";
// import repositoryEmpresa from "../repositories/repository.empresa";

import repositoryEmpresa from "../repositories/repository.empresa.js";


async function Listar() {

    const empresas = await repositoryEmpresa.Listar();

    return empresas;
}

export default { Listar };