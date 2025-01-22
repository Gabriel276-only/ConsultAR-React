import React from 'react';
import Services from './services.tsx';
const Section = () => {
  return (

<section>

<div className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold text-red-800 sm:text-5xl">
           Nossa História
          </h1>
          <p className="text-base text-gray-900 mt-2 text-justify ">
                A ConsultAR foi fundada pela Regiane Magalhães, psicóloga, e o Acácio Borges, pedagogo e massoterapeuta,
                que estabeleceram parceria com profissionais de outras especialidades e estabelecimentos na área da
                saúde. Eles sempre buscaram colocar o público atendido em posição privilegiada no universo da empresa: ao
                centro, com os serviços oferecidos em sua órbita, desta forma, busca-se ofertar um olhar integrativo e um
                atendimento contínuo, visando a promoção da saúde e do bem-estar. Hoje a ConsultAR é gerida por três
                profissionais: Regiane Magalhães e Bárbara Crivas (psicólogas) e pelo Acácio Borges (pedagogo e
                massoterapeuta).
              </p>
        </div>

        <div className="relative flex flex-wrap justify-center items-center space-x-4 space-y-4">
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/consultorio/consultorio-1.jpg"
              alt="Image 1"
              className="w-full h-full "
            />
          </div>
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/consultorio/consultorio-2.jpg"
              alt="Image 2"
              className="w-full h-full"
            />
          </div>
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="/assets/consultorio/consultorio-3.jpg"
              alt="Image 3"
              className="w-full h-full"
            />
          </div>
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
              alt="Image 4"
              className="w-full h-full"
            />
          </div>
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1607012736597-21c5f44ecb27"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-40 h-56 overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1607012736597-21c5f44ecb27"
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>


   <div className="flex flex-col items-center space-y-6 mt-20">
     <Services />
   </div>   
   </section>
  );
};

export default Section;