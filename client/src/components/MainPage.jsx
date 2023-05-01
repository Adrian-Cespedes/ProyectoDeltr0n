import Img1 from '../images/prueba.jpg'

export function MainPage() {
  return (
    <div>
    <h1 className="text-center mt-8 mb-3 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Productos nuevos</h1>
    <hr
    className="mb-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />


    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src={Img1} alt="Burger" className='rounded-box'/>
      </div>
      <div className="carousel-item">
        <img src={Img1} alt="Burger" className='rounded-box'/>
      </div>
    </div>


    <h1 className="text-center mt-8 mb-3 font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">Productos en oferta</h1>
    <hr
    className="mb-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

    <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src={Img1} alt="Burger" className='rounded-box'/>
      </div>
      <div className="carousel-item">
        <img src={Img1} alt="Burger" className='rounded-box'/>
      </div>
    </div>
    </div>
)
}
