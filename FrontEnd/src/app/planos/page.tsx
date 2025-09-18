import React from "react";
import Header from "../../components/header";

const Page: React.FC = () => {
  return (
    <>
     <Header type={1}></Header>

      <main className="flex justify-center space-x-8 py-12">
        {/* Básico */}
        <div className="bg-gray-400 w-64 h-120 p-6 flex flex-col justify-between rounded-md">
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
        <div className="bg-red-900 w-64 h-120 p-6 flex flex-col justify-between rounded-md text-white">
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
        <div className="bg-black w-64 h-120 p-6 flex flex-col justify-between rounded-md text-white">
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
    </>
  );
};

export default Page;
