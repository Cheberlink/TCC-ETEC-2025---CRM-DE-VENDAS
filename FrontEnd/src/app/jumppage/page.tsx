// page.tsx
import React from 'react';
import Header from "../../components/header";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-[#831625] to-[#21080D] text-white font-sans">
      {/* Header */}
      <Header type={1} />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          Impulsione suas vendas <br />
          Com um CRM simples e poderoso
        </h1>

        <h2 className="mb-8 text-xl">
          Centralize seus leads, acompanhe funis de vendas e aumente sua
          produtividade.
        </h2>

        <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-white hover:text-red-900 transition-all duration-200 active:bg-[#585858]">
          Teste grátis por 14 dias
        </button>
      </div>

    
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-10 py-20 text-black items-stretch ">
        
        <div className="bg-white rounded-lg shadow-md p-6 text-center w-70 h-50">
          <div className="text-red-900 text-5xl mb-4">⚙️</div>
          <h3 className="font-semibold text-lg">Automação de vendas</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center w-70">
          <div className="text-red-900 text-5xl mb-4">👤</div>
          <h3 className="font-semibold text-lg">Gestão de leads simplificada</h3>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center w-70">
          <div className="text-red-900 text-5xl mb-4">📈</div>
          <h3 className="font-semibold text-lg">Relatórios inteligentes</h3>
        </div>
      </div>
      <main className="flex justify-center space-x-8 py-12 ">
        {/* Básico */}
        <div className="bg-gray-400 w-70 h-120 p-6 flex flex-col justify-between rounded-md">
          <h2 className="text-white text-xl font-semibold">Básico</h2>
          <p className="mb-8 text-white">
            Praticidade pelo preço
            <br/>
            mais acessivel
          </p>
          <div>
            <p className="text-white text-3xl font-light">39 BRL</p>
            <p className="text-white text-sm">por usuário/mês</p>
          </div>
          <button className="bg-white text-red-900 font-semibold py-2 px-4 rounded hover:bg-[#DFDFDF] hover:rounded-lg hover:shadow-md transition-all duration-200 active:bg-[#696969]">
            Teste Grátis
          </button>
        </div>

        {/* Avançado */}
        <div className="bg-red-900 w-70 h-120 p-6 flex flex-col justify-between rounded-md text-white">
          <h2 className="text-xl font-semibold">Avançado</h2>
          <p className="mb-8"> 
            Faça ainda mais vendas
            <br />
            com bots e automações
          </p>
          <div>
            <p className="text-3xl font-light">79 BRL</p>
            <p className="text-sm">por usuário/mês</p>
          </div>
          <button className="bg-white text-red-900 font-semibold py-2 px-4 rounded hover:bg-[#DFDFDF] hover:rounded-lg hover:shadow-md transition-all duration-200 active:bg-[#696969]">
            Teste Grátis
          </button>
        </div>

        {/* Empresarial */}
        <div className="bg-black w-70 h-120 p-6 flex flex-col justify-between rounded-md text-white">
          <h2 className="text-xl font-semibold">Empresarial</h2>
          <p className="mb-8">
            Organize grandes
            <br />
            quantidades de leads e dados
          </p>
          <div>
            <p className="text-3xl font-light">99 BRL</p>
            <p className="text-sm">por usuário/mês</p>
          </div>
          <button className="bg-white text-red-900 font-semibold py-2 px-4 rounded hover:bg-[#DFDFDF] hover:rounded-lg hover:shadow-md transition-all duration-200 active:bg-[#696969]">
            Teste Grátis
          </button>
        </div>
      </main>
    </div>
  );
};

export default Page;

