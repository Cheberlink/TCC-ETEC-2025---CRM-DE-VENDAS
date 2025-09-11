// page.tsx
import React from 'react';
import Header from "../../components/header";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">

     <Header type={1}></Header>
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
          O melhor software <br />
          para interação com o <br />
          cliente
        </h1>

       <div className="flex flex-row gap-6 mt-6">
  <button className="bg-[#d4d9e2] text-[#BD1D1D] font-bold px-6 py-4 border border-transparent
  hover:bg-[#9FA2A9] hover:shadow-lg transition-all duration-300 active:bg-white">
  Teste 14 dias <br /> GRÁTIS
</button>




  <button className="bg-[#d4d9e2] text-[#BD1D1D] font-bold px-6 py-4 border border-transparent
  hover:bg-[#9FA2A9] hover:shadow-lg transition-all duration-300 active:bg-white">
    Fale com um <br /> especialista
  </button>
</div>


      </section>

    </div>
  );
};

export default Page;