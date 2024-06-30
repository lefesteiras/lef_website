import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id="hero" className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map mt-2" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       
        <h1 className="bold-52 lg:bold-88 font-thin italic uppercase">
          <img src="/file.png" className='h-[200px]' alt="logo" /> Esteiras e Peneiras
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Movendo o Futuro com Qualidade e Precisão: Esteiras e Peneiras que Transformam.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 ml-1">Excelentes Avaliações</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <a href="https://wa.me/5551999942332" target='blank'>
            <Button
              type="button"
              title="Fale Conosco agora!"
              variant="btn_green"
            />
         </a>
          
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Localização</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Gravataí - RS</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Rua</p>
              <p className="bold-20 text-white">Rio Branco</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Número</p>
              <p className="bold-20 text-white">143</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero