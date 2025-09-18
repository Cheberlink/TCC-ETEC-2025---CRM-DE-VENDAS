// page.tsx
import React from 'react';
import Header from "../../components/header";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#360D15] text-white font-sans">
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

        <button className="bg-red-900 text-white px-4 py-2 rounded hover:bg-white hover:text-red-900 transition-all duration-200">
          Teste grátis por 14 dias
        </button>
      </div>

    
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-10 py-20 text-black items-stretch">
        
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
    </div>
  );
};

export default Page;

