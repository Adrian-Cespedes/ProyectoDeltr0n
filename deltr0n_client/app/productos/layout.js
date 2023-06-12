export default function ProductosLayout({ children }) {
  const categories = [
    {
      name: 'CPU',
      url: 'cpu'
    },
    {
      name: 'GPU',
      url: 'cpu'
    },
    {
      name: 'Memoria RAM',
      url: 'ram'
    },
    {
      name: 'Almacenamiento',
      url: 'almacenamiento'
    },
    {
      name: 'Refrigeracion',
      url: 'refrigeracion'
    }
  ]

  return (
    <div className='mx-auto flex max-w-7xl flex-col py-6 text-white md:flex-row'>
      <div className='order-first flex-none md:w-1/6'>
        <nav className='col-span-2 w-full flex-none px-6 py-2 md:py-4 md:pl-10'>
          <h3 className='font-semibold text-white md:block'>Categorias</h3>
          <ul className="md:block">
            {categories.map((category) =>
              <li className='mt-2 flex text-sm text-gray-400'>
                <a className='w-full hover:text-gray-100' href={`/productos/${category.url}`}>{category.name}</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        {children}
      </div>
    </div >
  )
}
