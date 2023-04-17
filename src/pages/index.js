import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Bubble from './components/Bubble'
import Search from './components/Search'

export default function Home() {
  return (
    <>
    {/* Maquetacion inicial */}
    
            <div className="flex items-center justify-center "> {/* Div alinea al centro el contenido */}
              <div class="flex-col w-100"> {/* Div alinea los elementos para que se coloquen encima de otros */}

                  <h1 className='mt-10 ml-[51px] text-5xl'>Best Price</h1> {/* Titulo y leyenda, Se les agrega un margen a  la izquierda {ml} para alinear */}
                  <p className=' mt-2 ml-[85px]'>The best price for all.</p>

                <Search/> {/* Barra de busqueda, proviene de ./components/Search */}

              </div>
            </div>
               <br/>
                <center>
                  <div className='flex'>
                               <div className='flex mx-12'>
                                      <div className='container block-line flex'>
                                          <div className="card w-96 glass text-center text-neutral-content">   
                                            <figure><Image src={require('../styles/Image/sin-imagen.jpg')} alt="car!"/></figure>
                                                  <div className="card-body">
                                                      <h2 className="card-title">Life hack</h2>
                                                      <p>How to park your car at your garage?</p>
                                                      <div className="card-actions justify-end">
                                                      <button className="btn btn-primary">Learn now!</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                       </div> 
                                       <div className='flex mx-12'>
                                        <div className='container block-line flex'>
                                            <div className="card w-96 glass text-center text-neutral-content">   
                                                <figure><Image src={require('../styles/Image/sin-imagen.jpg')} alt="car!"/></figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title">Life hack</h2>
                                                        <p>How to park your car at your garage?</p>
                                                        <div className="card-actions justify-end">
                                                            <button className="btn btn-primary">Learn now!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex mx-12'>
                                            <div className='container block-line flex'>
                                                <div className="card w-96 glass text-center text-neutral-content">   
                                                    <figure><Image src={require('../styles/Image/sin-imagen.jpg')} alt="car!"/></figure>
                                                        <div className="card-body">
                                                            <h2 className="card-title">Life hack</h2>
                                                            <p>How to park your car at your garage?</p>
                                                            <div className="card-actions justify-end">
                                                                <button className="btn btn-primary">Learn now!</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                   
                                    </div> 
                                  </center> 
    <Bubble/> {/* Burbujas de animacion provienen de  './components/Bubble' */}
  </>        
  )
}
