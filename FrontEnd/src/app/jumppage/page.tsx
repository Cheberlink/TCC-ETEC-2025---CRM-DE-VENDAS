// page.tsx
import React from 'react';
import Navbar from "./components/Navbar";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

      
      <nav className="bg-[#811D1D] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
            
            <img src="../favicon.ico" alt="Logo" className="h-6" />
          </div>
          <ul className="hidden md:flex gap-6 text-sm">
            <li className="cursor-pointer hover:bg-[#481010] p-4 font-bold text-[1.2rem]">Produto <span className="ml-1">▼</span></li>
            <li className="cursor-pointer hover:bg-[#481010] p-4 font-bold text-[1.2rem]">Recursos <span className="ml-1">▼</span></li>
            <li className="cursor-pointer hover:bg-[#481010] p-4 font-bold text-[1.2rem]">Preços<span className="ml-1">▼</span></li>
          </ul>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="cursor-pointer hover:bg-[#481010] p-4 text-[1.5rem]">🌐</span>
          <span className="cursor-pointer hover:bg-[#481010]  p-4 font-bold text-[1.2rem]">Assine agora</span>
          <button className="cursor-pointer hover:bg-[#481010] p-4 font-bold bg-black">Registre-se</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          O melhor software <br />
          para interação com o <br />
          cliente
        </h1>

       <div className="flex flex-row gap-6 mt-6">
  <button className="bg-gray-300 text-[#BD1D1D] font-bold px-6 py-4 border border-transparent
  hover:bg-gray-400 hover:border-black hover:shadow-lg transition-all duration-300">
  Teste 14 dias <br /> GRÁTIS
</button>




  <button className="bg-gray-300 text-[#BD1D1D] font-bold px-6 py-4 border border-transparent
  hover:bg-gray-400 hover:border-black hover:shadow-lg transition-all duration-300">
    Fale com um <br /> especialista
  </button>
</div>


      </section>

    </div>
  );
};

export default Page;
