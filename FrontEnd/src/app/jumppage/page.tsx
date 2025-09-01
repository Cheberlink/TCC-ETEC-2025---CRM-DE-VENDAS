// page.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      
      <nav className="bg-[#811D1D] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
            
            <img src="../favicon.ico" alt="Logo" className="h-6" />
          </div>
          <ul className="hidden md:flex gap-6 text-sm">
            <li className="cursor-pointer hover:bg-[#481010] p-4">Produto <span className="ml-1">▼</span></li>
            <li className="cursor-pointer hover:bg-[#481010] p-4">Recursos <span className="ml-1">▼</span></li>
            <li className="cursor-pointer hover:bg-[#481010] p-4">Preços</li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="cursor-pointer hover:bg-[#481010] p-4">🌐</span>
          <span className="cursor-pointer hover:bg-[#481010] p-4">Assine agora</span>
          <button className="cursor-pointer hover:bg-[#481010] p-4">Registre-se</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          O melhor software <br />
          para interação com o <br />
          cliente
        </h1>

       <div className="flex flex-col sm:flex-row gap-4">
  <button className="bg-gray-300 text-red-800 font-bold px-6 py-3 hover:shadow-lg transition-shadow duration-200">
    Teste 14 dias <br /> GRÁTIS
  </button>
  <button className="bg-gray-300 text-black font-semibold px-6 py-3 hover:shadow-lg transition-shadow duration-200">
    Fale com um <br /> especialista
  </button>
</div>

      </section>

    </div>
  );
};

export default Page;
