import React from 'react';
import Services from './services.tsx';

const TextBlock = () => (
  <div className="w-full lg:w-1/2">
    <h1 className="text-4xl sm:text-5xl font-bold text-red-700 mb-4">
      Nossa História
    </h1>
    <h2 className="text-xl sm:text-2xl text-gray-600 mb-8">
      Conheça a trajetória da ConsultAR
    </h2>
    <p className="text-gray-700 text-lg sm:text-xl text-justify mb-6">
      A ConsultAR foi fundada pela Regiane Magalhães e Acácio Borges que estabeleceram parceria
      com profissionais de outras especialidades e estabelecimentos na
      área da saúde. Eles sempre buscaram colocar o público atendido em
      posição privilegiada no universo da empresa: ao centro, com os
      serviços oferecidos em sua órbita.
    </p>
    <p className="text-gray-700 text-lg sm:text-xl text-justify">
      Desta forma, busca-se ofertar um olhar integrativo e um atendimento
      contínuo e humanizado, visando à promoção da Saúde e do Bem-Estar. Hoje a
      ConsultAR é gerida por três profissionais: Regiane Magalhães &
      Bárbara Crivas (psicólogas) e pelo Acácio Borges (pedagogo e
      massoterapeuta).
    </p>
  </div>
);

// Componente para as imagens
const ImageGallery = () => {
  interface Image {
    src: string;
    alt: string;
    className: string;
  }

  const images: Image[] = [
    { src: "/assets/consultorio/consultorio-1.jpg", alt: "Consultório 1", className: "w-full h-60 " },
    { src: "/assets/consultorio/consultorio-2.jpg", alt: "Consultório 2", className: "w-full h-60 " },
    { src: "/assets/consultorio/consultorio-6.jpg", alt: "Consultório 3", className: "w-full h-60 " },
    { src: "/assets/consultorio/consultorio-4.png", alt: "Consultório 4", className: "w-full h-60 " },
    { src: "/assets/consultorio/consultorio-5.jpg", alt: "Consultório 5", className: "w-full h-60 " },
  ];

  return (
    <div className="flex flex-wrap  gap-3 m-10">
      {images.map((img, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl flex items-center justify-center "
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`${img.className} object-cover`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

const Section = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          <TextBlock />
          <ImageGallery />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 mt-20">
        <Services />
      </div>
    </section>
  );
};

export default Section;