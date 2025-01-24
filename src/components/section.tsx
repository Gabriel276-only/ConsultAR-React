import React from 'react';
import Services from './services.tsx';
const Section = () => {
  return (

<section>

<div className="bg-gray-50 min-h-screen flex flex-col justify-center px-4 sm:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-700 mb-6">
            Nossa História
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
            A ConsultAR foi fundada pela Regiane Magalhães, psicóloga, e o
            Acácio Borges, pedagogo e massoterapeuta, que estabeleceram parceria
            com profissionais de outras especialidades e estabelecimentos na
            área da saúde. Eles sempre buscaram colocar o público atendido em
            posição privilegiada no universo da empresa: ao centro, com os
            serviços oferecidos em sua órbita.
          </p>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mt-4">
            Desta forma, busca-se ofertar um olhar integrativo e um atendimento
            contínuo, visando à promoção da saúde e do bem-estar. Hoje a
            ConsultAR é gerida por três profissionais: Regiane Magalhães &
            Bárbara Crivas (psicólogas) e pelo Acácio Borges (pedagogo e
            massoterapeuta).
          </p>
        </div>

        <div className="relative flex flex-wrap justify-center items-center gap-8 mt-20">
  <div className="relative overflow-hidden rounded-lg shadow-lg ">
    <img
      src="/assets/consultorio/consultorio-1.jpg"
      alt="Consultório 1"
      className="w-52 h-56 object-cover"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img
      src="/assets/consultorio/consultorio-2.jpg"
      alt="Consultório 2"
      className="w-56 h-64 object-cover"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img
      src="/assets/consultorio/consultorio-6.jpg"
      alt="Consultório 3"
      className="w-56 h-60 object-cover"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img
      src="/assets/consultorio/consultorio-4.png"
      alt="Consultório 4"
      className="w-40 h-52 object-cover"
    />
  </div>
  <div className="relative overflow-hidden rounded-lg shadow-lg">
    <img
      src="/assets/consultorio/consultorio-5.jpg"
      alt="Consultório 5"
      className="w-52 h-56 object-cover"
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