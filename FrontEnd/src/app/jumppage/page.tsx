// page.tsx
import React from 'react';
import Header from "../../components/header";

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#360D15] text-white font-sans">

     <Header type={1}></Header>
      {/* Hero Section */}
      
       <div className="flex p-30 justify-center h-screen">
       <p className='mb-8 text-center'>
         <h1 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl">
            Impulsione suas vendas  <br />
            Com um CRM simples e poderoso <br />
          </h1>
          <br/>
          <h2 className='mb-8 text-xl'>
            Centralize seus leads, acompanhe funis de vendas e aumente sua produtividade.
          </h2>
       </p>

       <button></button>
 
</div>

    </div>
  );
};

export default Page;