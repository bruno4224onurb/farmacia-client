import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia da Ju</div>

            <div className='flex gap-10'>
              <div className='hover:text-gray-500'>Home</div>
              <div className='hover:text-gray-500'>Produtos</div>
              <div className='hover:text-gray-500'>Categorias</div>
              <div className='hover:text-gray-500'>Cadastrar Categoria</div>
              <div className='hover:text-gray-500'>Perfil</div>
              <div className='hover:text-gray-500'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar