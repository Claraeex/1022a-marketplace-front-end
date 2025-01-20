import { useEffect, useState } from 'react'
import './App.css'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// Tipo para produtos
type ProdutoType = {
  id: number,
  nome: string,
  preco: string,
  descricao: string,
  imagem: string
}

// Tipo para usuários
type UsuarioType = {
  id: number,
  name: string,
  email: string,
  created_at: string,
  updated_at: string
}

// Definindo o tipo para produtos
type ProdutoType = {
    id: number,
    nome: string,
    preco: string,
    descricao: string,
    imagem: string
}

// Definindo o tipo para usuários
type UsuarioType = {
  id: number,
  nome: string,
  email: string,
  created_at: string,
  updated_at: string
}

function App() {
<<<<<<< HEAD
  const navegate = useNavigate()
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para carregar produtos e usuários
  useEffect(() => {
    // Buscar os produtos
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados))

    // Buscar os usuários
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json())
      .then(dados => setUsuarios(dados))
  }, [])

  function handleExcluir(id:number){
    alert(`Excluir o produto com id ${id}`)
    fetch(`http://localhost:8000/produtos/${id}`, {
      method: 'DELETE'
    })
    .then(resposta => {
      if(resposta.status === 200){
        alert("Produto excluído com sucesso")
        window.location.reload()
      }else{
        alert("Erro ao excluir o produto: Confira o terminal do backend")
      }
    })
  }

  return (
    <>


      <header className="site-header">


        <nav className="navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
            <Link to="/cadastro-produto">Cadastro de Produto</Link>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="login-button">Login</button>
        </div>
      </header>
      {/* Listagem de Produtos */}
      <div className="produtos-container">
      <Link to="/cadastro-produto">Cadastro de Produto</Link>
        <h1 className='titulo-produto'>Produtos</h1>
        <div className="produtos-list">
          {
            produtos.map(produto => (
              <div key={produto.id} className="produto-item">
                <h3 className="produto-nome">{produto.nome}</h3> {/* Use h3 para o nome do produto */}
                <div className='container-imagem'>
                  <img src={produto.imagem} alt="Imagem do produto" />
                </div>
                <p className="produto-preco">{produto.preco}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                <button className="botao-comprar">Comprar</button>
                <button onClick={() => handleExcluir(produto.id)}>Excluir</button>
                <Link to={`/alterar-produto/${produto.id}`}>Alterar</Link>
              </div>
            ))
          }
        </div>
      </div>

      {/* Listagem de Usuários */}
      <div className="usuarios-container">
        <h1 className='titulo-usuario'>Usuários</h1>
        <div className="usuarios-list"> {/* Adicionando wrapper */}
          {
            usuarios.map(usuario => (
              <div key={usuario.id} className="usuario-item">
                <h1 className="usuario-nome">{usuario.name}</h1>
                <p>Email: {usuario.email}</p>
                <p>Criado em: {new Date(usuario.created_at).toLocaleDateString()}</p>
                <p>Atualizado em: {new Date(usuario.updated_at).toLocaleDateString()}</p>
              </div>
            ))
          }
        </div> {/* Fechando a div aqui */}
      </div>
=======
  // Estado para armazenar a lista de produtos
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  // Estado para armazenar a lista de usuários
  const [usuarios, setUsuarios] = useState<UsuarioType[]>([])

  // useEffect para buscar produtos do backend ao carregar o componente
  useEffect(() => {
    // Fazendo uma requisição para a API para obter os produtos
    fetch("http://localhost:8000/produtos")
      .then(resposta => resposta.json()) // Convertendo a resposta para JSON
      .then(dados => setProdutos(dados)) // Atualizando o estado com os dados recebidos
  }, []) // Array vazio significa que o efeito roda apenas uma vez, na montagem do componente

  // useEffect para buscar usuários do backend ao carregar o componente
  useEffect(() => {
    // Fazendo uma requisição para a API para obter os usuários
    fetch("https://one022a-marketplace-a9ls.onrender.com/usuarios")
      .then(resposta => resposta.json()) // Convertendo a resposta para JSON
      .then(dados => setUsuarios(dados)) // Atualizando o estado com os dados recebidos
  }, []) // Array vazio significa que o efeito roda apenas uma vez, na montagem do componente

  return (
    <>
      {/* Container principal que agrupa todos os itens */}
      <div className="itens-container">
        
        {/* Seção de Produtos */}
        <div className="Produtos">
          <h1>Produtos</h1>
          <div className="produtos-container">
            {
              // Mapeando a lista de produtos para renderizar cada item
              produtos.map(produto => {
                return (
                  <div key={produto.id} className="produto-item">
                    <h1>{produto.nome}</h1>
                    <div className="container-imagem">
                      {/* Exibindo a imagem do produto */}
                      <img src={produto.imagem} alt="Imagem do celular" />
                    </div>
                    <p>{produto.preco}</p>
                    <p>{produto.descricao}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
  
        {/* Seção de Usuários */}
        <div className="Usuarios">
          <h1>Usuários</h1>
          <div className="usuarios-container">
            {
              // Mapeando a lista de usuários para renderizar cada item
              usuarios.map(usuario => {
                return (
                  <div key={usuario.id} className='usuario-item'>
                    <h1>{usuario.nome}</h1>
                    {/* Exibindo o email do usuário */}
                    <p><strong>Email:</strong> {usuario.email}</p>
                    {/* Formatando e exibindo a data de criação */}
                    <p><strong>Data de Criação:</strong> {new Date(usuario.created_at).toLocaleString()}</p>
                    {/* Formatando e exibindo a última atualização */}
                    <p><strong>Última Atualização:</strong> {new Date(usuario.updated_at).toLocaleString()}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
>>>>>>> f29e65c38dabb8211f9d17829b61304d2f8e839f
    </>
  )
}  

export default App