import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" 
      className="
  relative |
       border-2 |
        | flex | flex-col items-center
          | gap-20 | py-10 | pb-32
            | md:gap-28
              | lg:py-20
               |  xl:flex-row text-white">
      <img src="/herobg.jpg" className='object-cover h-full w-full absolute top-0  left-0 z-0' alt="" />
      <div className='w-full h-full absolute z-10 bg-white/90'></div>
      <div className="relative  z-20 flex flex-col flex-1 justify-center items-center p-6 xl:w-1/2 text-gray-900">
        <img src="/file.png" className='h-[30rem]  w-[30rem] mx-auto z-10 ' alt="logo" />
        <h1 className="
       text-5xl md:text-6xl lg:text-7xl rounded-2xl text-center translate-y-[-8rem] font-bold italic uppercase z-10">
           Esteiras e Peneiras
        </h1>
        <p className="mt-6 font-semibold text-xl translate-y-[-4rem] xl:max-w-[520px] text-black z-10">
          Movendo o Futuro com Qualidade e Precisão: Esteiras e Peneiras que Transformam.
        </p>

        <div className="my-11 translate-y-[-4rem] flex flex-wrap gap-5 z-10">
          <div className="flex items-center gap-2 z-10">
           
          </div>

         
        </div>

        <div className="translate-y-[-4rem] flex justify-center items-center  w-full sm:flex-row z-10">
          <a className='drop-shadow-lg border rounded-full' href="https://wa.me/5551999942332" target='blank'>
            <Button
              type="button"
              title="Fale Conosco agora!"
              variant="btn_green"
            />
         </a>
          
        </div>
      </div>


    </section>
  )
}

export default Hero