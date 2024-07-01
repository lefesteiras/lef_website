import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-[90%] pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Sobre nós
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">3 anos de história</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Bem-vindo à nossa fábrica de esteiras e telas metálicas, onde combinamos inovação, qualidade e excelência em cada produto que fabricamos. Com anos de experiência no mercado, nos especializamos na produção de soluções personalizadas para diversos setores industriais, atendendo às necessidades específicas de cada cliente com precisão e dedicação.
          </p>
        </div>
      </div>

      <div className="flexCenter h-[900px] drop-shadow-lg rounded-5xl overflow-hidden max-container relative w-[90%]">
            <img 
              src="/producao.jpg"
              alt="boat"
              className="w-full h-full object-cover object-center rounded-5xl"
            />
            <div className='overlay absolute w-full h-full bg-black/40'>

            </div>
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
                <Image 
                    src="/meter.svg"
                    alt="meter"
                    width={16}
                    height={158}
                    className="h-full w-auto"
                  />
                  <div className="flexBetween flex-col">
                    <div className='flex w-full flex-col'>
                      <div className="flexBetween w-full">
                        <p className="regular-16 text-gray-20">Estado</p>
                        <p className="bold-16 text-green-50">RS</p>
                      </div>
                      <p className="bold-20 mt-2">Gravataí</p>
                    </div>

                    <div className='flex w-full flex-col'>
                      <p className="regular-16 text-gray-20">Endereço</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Rua Rio Branco, 143<br></br> Bairro: Barnabé</h4>
                    </div>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Guide