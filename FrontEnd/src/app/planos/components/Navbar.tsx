import React from "react";


const Navbar = () => {
    return(
    <div className='flex w-screen h-screen'>
        <nav className="h-11/100 w-full bg-[#811D1D]">
        
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Produtos</button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Recursos</button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem]">Preços</button>
            <button className="text-white w-auto p-7 font-bold text-[1.4rem] ml-200">Assine Agora</button>
            <button className="text-white w-auto py-2 px-4  font-bold text-[1.1rem] bg-black">Registre-se</button>
        </nav>
       
    </div>
    )
}

export default Navbar;