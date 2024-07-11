import React from 'react'
import Button from './Button'
import Image from 'next/image'
import ContactForm from './ContactForm'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app  h-fit rounded-5xl">
        <div className="z-20 w-full md:w-1/2
           flex
             flex-col
              items-center
                 gap-12 rounded-5xl
                   ">

                <h2 className="bold-40 lg:bold-64 xl:max-w-[320px] ">Peça seu Orçamento!</h2>
                <ContactForm />
                <p className="regular-16 text-gray-10">Horário de funcionamento: 8:30 - 12:00 e 13:00 - 17:30</p>
                <div className="flex w-full flex-col items-center gap-3 whitespace-nowrap xl:flex-row xl:justify-center">
                      <a   className=''
                            href="https://wa.me/5551999942332?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20or%C3%A7amento" 
                            target='blank'
                            >
                            <Button
                              type="button"
                              title="Estamos à disposição!"
                              icon="/whatsapp.png"
                              variant="btn_white"
                              full
                            />
                      </a>
                </div>
        </div>

        <div className="flex flex-1 items-center justify-end rounded-3xl">
          <iframe 
          className='rounded-xl shadow-md w-full h-[80%]'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.5793891798935!2d-51.023318724545106!3d-29.934008926163905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975b2bad48929%3A0xc9370d3172ea3b3d!2sR.%20Bar%C3%A3o%20do%20Rio%20Branco%2C%20143%20-%20Barnab%C3%A9%2C%20Gravata%C3%AD%20-%20RS%2C%2094150-330!5e0!3m2!1spt-BR!2sbr!4v1720648471450!5m2!1spt-BR!2sbr" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      
    </section>
  )
}

export default GetApp