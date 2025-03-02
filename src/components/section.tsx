import React from "react";
import Services from "./services.tsx";

const TextBlock = () => (
  <div className="w-full lg:w-1/2 px-4">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-4 leading-tight">
      Nossa História
    </h1>
    <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 font-medium">
      Conheça a trajetória da ConsultAR
    </h2>
    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6">
      A ConsultAR foi fundada pela Regiane Magalhães e Acácio Borges que estabeleceram parceria
      com profissionais de outras especialidades e estabelecimentos na
      área da saúde. Eles sempre buscaram colocar o público atendido em
      posição privilegiada no universo da empresa: ao centro, com os
      serviços oferecidos em sua órbita.
    </p>
    <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
      Desta forma, busca-se ofertar um olhar integrativo e um atendimento
      contínuo e humanizado, visando à promoção da Saúde e do Bem-Estar. Hoje a
      ConsultAR é gerida por três profissionais: Regiane Magalhães &
      Bárbara Crivas (psicólogas) e pelo Acácio Borges (pedagogo e
      massoterapeuta).
    </p>
  </div>
);

const ImageGallery = () => {
  const images = [
    { src: "/assets/consultorio/consultorio-1.jpg", alt: "Consultório 1" },
    { src: "/assets/consultorio/consultorio-2.jpg", alt: "Consultório 2" },
    { src: "/assets/consultorio/consultorio-6.jpg", alt: "Consultório 3" },
    { src: "/assets/consultorio/consultorio-4.png", alt: "Consultório 4" },
    { src: "/assets/consultorio/consultorio-5.jpg", alt: "Consultório 5" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-1/2 px-4">
      {images.map((img, index) => (
        <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-60 object-cover transition-transform duration-300"
            loading="lazy"
            width={400}
            height={240}
          />
        </div>
      ))}
    </div>
  );
};

const Section = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20">
      <div className="container mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
        <TextBlock />
        <ImageGallery />
      </div>
      <div className="container mx-auto px-4 sm:px-8 mt-20">
        <Services />
      </div>
    </section>
  );
};

export default Section;
