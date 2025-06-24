import serviceEmpresas from "../services/service.empresa.js";

async function Destaques(req, res) {
  const id_usuario = req.params.id;
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
    const id_categoria = req.query.id_categoria;
    const id_banner = req.query.id_banner;
    const empresas = await serviceEmpresas.Listar(
      id_usuario,
      busca,
      id_categoria,
      id_banner
    );

    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function InserirFavorito(req, res) {
  try {
    const id_usuario = req.params.id_usuario;
    const id_empresa = req.params.id_empresa;
    const empresas = await serviceEmpresas.InserirFavorito(
      id_usuario,
      id_empresa
    );

    res.status(201).json(empresas);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function ExcluirFavorito(req, res) {
  try {
    const id_usuario = req.params.id_usuario;
    const id_empresa = req.params.id_empresa;
    const empresas = await serviceEmpresas.ExcluirFavorito(
      id_usuario,
      id_empresa
    );

    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function Cardapio(req, res) {
  try {
    const id_usuario = req.id_usuario;
    const id_empresa = req.params.id_empresa;
    const empresas = await serviceEmpresas.Cardapio(id_usuario, id_empresa);

    res.status(200).json(empresas);
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function ListarProdutoId(req, res) {
  try {
    const id_empresa = req.params.id_empresa;
    const id_produto = req.params.id_produto;
    const produto = await serviceEmpresas.ListarProdutoId(
      id_empresa,
      id_produto
    );

    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export default {
  Destaques,
  Listar,
  InserirFavorito,
  ListarProdutoId,
  ExcluirFavorito,
  Cardapio,
};
