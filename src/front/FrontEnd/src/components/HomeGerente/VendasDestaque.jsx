import React from 'react';

const VendasDestaque = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <div className="w-[280px] rounded-[12px] overflow-hidden shadow-lg">
        {/* Cabeçalho */}
        <header className="bg-[#001146] flex items-center justify-between px-4 py-2">
          <button aria-label="Previous" className="text-white text-lg">
            <i className="fas fa-chevron-left"></i>
          </button>
          <h1 className="text-white font-semibold text-sm">
            Vendas Destaque
          </h1>
          <button aria-label="Next" className="text-white text-lg">
            <i className="fas fa-chevron-right"></i>
          </button>
        </header>

        {/* Conteúdo Principal */}
        <main className="bg-white p-6 flex flex-col items-center">
          {/* Gráfico de Pizza */}
          <div className="relative w-[160px] h-[160px]">
            <svg className="w-full h-full" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
              {/* Segmento Azul (SSD) - 40% */}
              <circle 
                cx="80" 
                cy="80" 
                r="60" 
                stroke="#0B3BDB" 
                strokeDasharray="251.2 376.8" 
                strokeDashoffset="0" 
                strokeWidth="40"
              />
              
              {/* Segmento Laranja (HD) - 16% */}
              <circle 
                cx="80" 
                cy="80" 
                r="60" 
                stroke="#E18B00" 
                strokeDasharray="100.48 527.52" 
                strokeDashoffset="-251.2" 
                strokeWidth="40"
              />
              
              {/* Segmento Verde (Memoria RAM) - 12% */}
              <circle 
                cx="80" 
                cy="80" 
                r="60" 
                stroke="#1E9B1E" 
                strokeDasharray="75.36 552.64" 
                strokeDashoffset="-351.68" 
                strokeWidth="40"
              />
              
              {/* Centro Branco */}
              <circle cx="80" cy="80" fill="white" r="40" />
            </svg>

            {/* Ícones com fundo circular */}
            <div className="absolute top-[20px] left-[30px] w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
              <img 
                alt="Icone Memoria RAM" 
                className="w-5 h-5" 
                src="https://storage.googleapis.com/a1aa/image/2c69f815-dfd6-44b7-9295-31012b926d43.jpg" 
              />
            </div>
            
            <div className="absolute top-[20px] right-[30px] w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
              <img 
                alt="Icone HD" 
                className="w-5 h-5" 
                src="https://storage.googleapis.com/a1aa/image/dffd764f-596a-4657-e351-f4b94f2f4585.jpg" 
              />
            </div>
            
            <div className="absolute bottom-[20px] left-[30px] w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
              <img 
                alt="Icone SSD" 
                className="w-5 h-5" 
                src="https://storage.googleapis.com/a1aa/image/a4e3241a-9579-42f6-8a0e-869acc4bd47b.jpg" 
              />
            </div>
          </div>

          {/* Legenda */}
          <ul className="mt-6 space-y-2 text-xs font-normal text-gray-600 w-full max-w-[220px]">
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#1E9B1E] inline-block"></span>
              <span className="text-gray-500 font-semibold">Memoria RAM</span>
              <span className="ml-auto font-semibold text-gray-700">R$40</span>
            </li>
            
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#E18B00] inline-block"></span>
              <span className="text-gray-500 font-semibold">HD</span>
              <span className="ml-auto font-semibold text-gray-700">R$55</span>
            </li>
            
            <li className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-[#0B3BDB] inline-block"></span>
              <span className="text-gray-500 font-semibold">SSD</span>
              <span className="ml-auto font-semibold text-gray-700">R$130</span>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default VendasDestaque;