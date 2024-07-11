'use client'
import React, { useState } from 'react'
import emailJs from '@emailjs/browser';

const ContactForm = () => {
    const [emailContent, setEmailContent ] = useState({ 
        nome : '',
        email : '',
        numero: '',
        mensagem : ''
    });
    const handleChange = ( e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => { 
        const { id, value } = e.target;
        const key = id;
        console.log('emailContent: ', {
            ...emailContent,
            [key]: value
        })
        setEmailContent({
            ...emailContent,
            [key] : value
         });
    }
    const handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => { 
        e.preventDefault();
        const {nome, numero, email, mensagem} = emailContent;
        const templateParams =  { 
            to_name  : 'Laureci',
            from_name : nome,
            from_number : numero,
            from_email : email,
            message : mensagem
        }
        console.log('templateParams: ', templateParams);
        emailJs.send('service_v3xzlj4', 'template_d8tz54b', templateParams, 'ehSauumfGmHl_rjhv').then(
             (response) => {
                 console.log('SUCCESS!', response.status, response.text);
                 window.alert('Mensagem enviada com Sucesso, Responderemos em breve!')
                 setEmailContent({ 
                     nome: '',
                     email: '',
                     numero: '',
                     mensagem: ''
                 })
             },
             (error) => {
                 console.log('FAILED...', error);
             },
        );;
    }

  return (

          <form
          onSubmit={handleSubmit}
           className="w-full md:w-[80%] lg:w-[60%] mx-auto">
          <div className="mb-5">
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
              <input
                  onChange={handleChange}
                  value={emailContent.nome}
                  type="text" id="nome"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Seu Nome..." required />
          </div>
              <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                   value={emailContent.email}
                   onChange={handleChange}
                   type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: seunome@gmail.com" required />
              </div>
          <div className="mb-5">
              <label htmlFor="numero" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
              <input
                  value={emailContent.numero}
                  onChange={handleChange}
                  type="text" id="numero"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: 51998951079" required />
          </div>
              <div className="mb-5">
                  <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensagem</label>
                  <textarea
                   value={emailContent.mensagem}
                   onChange={handleChange}
                   placeholder='Digite sua mensagem...' id="mensagem" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
              </div>
              <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                  </div>
              </div>
              <button
               type="submit" 
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
          </form>
  )
}

export default ContactForm