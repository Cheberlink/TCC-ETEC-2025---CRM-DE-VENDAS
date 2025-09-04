import React from "react";

const Navbar = () => {
    return(
   <div className='flex w-screen h-screen'>
        <nav className="h-11/100 w-full bg-[#811D1D]">
        
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Produtos<span className="ml-1">▼</span></button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Recursos<span className="ml-1">▼</span></button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Preços<span className="ml-1">▼</span></button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem] ml-200">Assine Agora!</button>
            <button className="text-white w-auto py-2 px-4  font-bold text-[1.1rem] bg-black">Registre-se</button>
        </nav>
       
    </div>
    )
}

export default Navbar;

