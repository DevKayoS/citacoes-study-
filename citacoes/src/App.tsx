import { useState } from "react"
import Citacoes from "./components/citacoes"
import {citacoes} from "./data"

function App() {
  const [indice, setIndice] = useState(0)
  const [autor, setAutor] = useState(0)
  const proximaCitacao = () => {
    setIndice((indiceAtual)=> (indiceAtual + 1) % citacoes.length)
    setAutor((autor)=> (autor + 1) % citacoes.length)
  }

  return (
    <div className="container mt-5">
      <Citacoes texto={citacoes[indice].texto} autor={citacoes[autor].autor}/>
      <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima citação</button>
    </div>
    
  )
}

export default App
