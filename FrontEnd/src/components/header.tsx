import React from "react";

interface HeaderProps {
  userName?: string;
  userEmail?: string;
  userImage?: string;
  type: number;
}

export default function Header({
  userName = "User",
  userEmail,
  userImage,
  type,
}: HeaderProps) {
  if (type === 0)
    return (
      <header className="w-full bg-red-900 flex items-center px-6 py-4 h-32">
        {/* Logo e nome da marca */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
            <span className="text-red-900 font-bold text-xl">Logo</span>
          </div>
          <p className="text-white font-bold text-lg">NOIR</p>
        </div>

        {/* Nome centralizado sem esticar */}
        <div className="bg-black px-4 h-16 flex items-center flex-grow-0 m-3 w-xl rounded">
          <h1 className="text-white text-xl font-medium">Hello, {userName}!</h1>
        </div>

        {/* Perfil do usuário */}
        <div className="flex items-center space-x-2 flex-1 justify-end m-3">
          <div className="flex items-center space-x-3 align-end">
            {userImage ? (
              <img
                src={userImage}
                alt={userName}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                {userName[0]}
              </div>
            )}
          </div>
          <p className="text-white">{userEmail}</p>
        </div>
      </header>
    );
  else
    return (
     <header className="w-full h-32 bg-red-900 grid grid-cols-3 items-center px-6">
  {/* Logo à esquerda */}
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
      <span className="text-red-900 font-bold text-xl">Logo</span>
    </div>
    <p className="text-white font-bold text-lg">NOIR</p>
  </div>

  {/* Menu central */}
  <nav className="hidden md:flex justify-center space-x-6">
    <button className="text-white px-3 py-2 text-[1.4rem] font-bold hover:bg-[#5D1111] hover:rounded-lg transition-all duration-200 active:bg-red-800">
      Produtos
    </button>
    <button className="text-white px-3 py-2 text-[1.4rem] font-bold hover:bg-[#5D1111] hover:rounded-lg transition-all duration-200 active:bg-red-800">
      Recursos
    </button>
    <button className="text-white px-3 py-2 text-[1.4rem] font-bold hover:bg-[#5D1111] hover:rounded-lg transition-all duration-200 active:bg-red-800">
      Preços
    </button>
  </nav>

  {/* Botões à direita */}
  <div className="flex items-center justify-end space-x-4">
    <button className="text-white px-3 py-2 text-[1.4rem] font-bold hover:bg-[#5D1111] hover:rounded-lg transition-all duration-200 active:bg-red-800">
      Assine agora
    </button>
    <button className="bg-black text-white px-4 py-2 text-[1.1rem] font-bold rounded hover:rounded-lg hover:bg-[#393939] transition-all duration-200 active:bg-white active:text-black">
      Registre-se
    </button>
  </div>
</header>

    );
}

