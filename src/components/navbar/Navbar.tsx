import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-green-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia da Ju</Link>

            <div className='flex gap-10'>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categorias</Link>
              <Link to='/cadastroProduto' className='hover:underline'>Cadastrar Produtos</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar