import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Vendas from "./pages/Vendas";
import Locacao from "./pages/Locacao";
import DataCenter from "./pages/DataCenter";
import Servico from "./pages/Servico";
import Empresa from "./pages/Empresa";
import Cliente from "./pages/Cliente";
import Contato from "./pages/Contato";
import Home from "./pages/home/Home";
import Suporte from "./pages/Suporte";
import Whatsapp from "./components/whatsapp/Whatsapp";

const App = () => {
  return (
    <BrowserRouter>
      <Whatsapp />
      <main>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/vendas" element={<Vendas />} />
        </Routes>
        <Routes>
          <Route path="/locacao" element={<Locacao />} />
        </Routes>
        <Routes>
          <Route path="/datacenter" element={<DataCenter />} />
        </Routes>
        <Routes>
          <Route path="/servico" element={<Servico />} />
        </Routes>
        <Routes>
          <Route path="/clientes" element={<Cliente />} />
        </Routes>
        <Routes>
          <Route path="/empresa" element={<Empresa />} />
        </Routes>
        <Routes>
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Routes>
          <Route path="/suporte" element={<Suporte />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
