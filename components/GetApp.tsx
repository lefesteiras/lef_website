import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Peça seu Orçamento!</h2>
          <p className="regular-16 text-gray-10">Horário de funcionamento: 9:00 - 18:00</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a
              href="https://wa.me/5551999942332?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento" 
              target='blank'
              >
              <Button
                type="button"
                title="Responderemos o mais rápído possível!"
                icon="/whatsapp.png"
                variant="btn_white"
                full
              />
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end rounded-3xl">
          <Image className='rounded-3xl border boder-6 border-white' src="/fabric.jpg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp