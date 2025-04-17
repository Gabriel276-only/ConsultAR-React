import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Galeria = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, speed: 600 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, arrows: false },
      },
    ],
  };

  const slidesData = [
    {
      title: "Massoterapeuta Acácio Fonseca Borges",
      image: "/assets/professional/Acácio borges.png",
      description:
        "Desenvolvo protocolos para promoção de Saúde e Bem-Estar e prevenção de dores. Ajudo você a desenvolver hábitos mais saudáveis e sem dores no dia a dia. São mais de 30 certificações na área de massoterapia. Trabalho com massagens relaxantes, desportivas e terapêuticas, além de outras técnicas como terapia com ventosas, dry needling, moxa, cone hindu, pedras quentes e bandagem funcional.",
    },
    {
      title: "Psicóloga Regiane Magalhães (CRP 05/31197)",
      image: "/assets/professional/PSI Regiane Magalhães.png",
      description:
        "Pós-graduada em Gestão de Pessoas e Psicanalista em formação. Já atuei como palestrante e professora universitária. Regularmente habilitada pelo Conselho de Psicologia, atualmente atuo como psicóloga clínica de adultos, auxiliando no tratamento de demandas emocionais e na promoção de Saúde e Bem-Estar.",
    },
    {
      title: "Psicóloga Bárbara Crivas (CRP 05/55030)",
      image: "/assets/professional/PSI Bárbara Crivas.png",
      description:
        "Graduada em Psicologia e Direito. Atuo na promoção de Saúde e Bem-Estar com o público feminino no desenvolvimento de autonomia, resgate da autoestima e estabelecimento de relações saudáveis. Também atendo o público infantojuvenil por meio de grupos psicoterapêuticos associados ao trabalho com os familiares. Habilitada pelo Conselho de Psicologia para atendimentos presenciais e remotos.",
    },
    {
      title: "Psicóloga Raabe Santos (CRP 05/57226)",
      image: "/assets/professional/PSI Raabe Santos.png",
      description:
        "Pós-graduada em Neuropsicologia, Psicopedagogia e Psicologia Hospitalar e da Saúde. Realizo avaliação do desenvolvimento infantil e trabalho com demandas de autismo infantil e técnica ABA visando a promoção de Saúde e Bem-Estar. Habilitada pelo Conselho de Psicologia, faço atendimento infantojuvenil e orientação de pais e responsáveis.",
    },
    {
      title: "Psicóloga Bianca Miraglia (CRP 05/73766)",
      image: "/assets/professional/PSI Bianca Miraglia.png",
      description:
        "Pós-graduada em Saúde Mental e Desenvolvimento Humano, com cursos em Neuropsicologia, TDAH, Transtornos do Desenvolvimento e Arteterapia para idosos. Atuo com público infantil, adulto e idosos. Regularmente inscrita no Conselho de Psicologia.",
    },
    {
      title: "Nutricionista Marcus Palmeira",
      image: "/assets/professional/Nutri Marcus Palmeira.png",  
      description:
        "Sou formado em Nutrição há mais de 10 anos. Palestrante e professor universitário especialista em Nutrição Esportiva, Fisiologia do Movimento, Bioquímica do Exercício e Psicologia aplicada à Nutrição. Tricampeão carioca, campeão regional e vice-campeão brasileiro de fisiculturismo. Já atendi mais de 10 mil pacientes promovendo Saúde e Bem-Estar.",
    },
    {
      title: "Psicopedagoga Ana Cláudia",
      image: "/assets/professional/PSI Ana Cláudia.png",
      description:
        "Professora de Educação Especial desde 2002 e formada em Psicopedagogia. Atende no Espaço Psicopedagógico em Barra do Piraí. Especialista em autismo, apaixonada por práticas baseadas em evidências: ABA, TEACCH, Denver, DIR Floortime (DIR 101 e 201 em andamento) e integração sensorial.",
    },
    {
      title: "Fisioterapeuta Andressa Flor",
      image: "/assets/professional/FISIO Andressa Flor.png",
      description:
        "Fisioterapeuta com atuação em fisioterapia geral, estética, pilates, drenagem linfática, massagem modeladora e redutora. Parceira da ConsultAR, atende no Studio Mary & Flor Fisioterapia e com atendimento domiciliar.",
    },
  ];

  const parceiros = [
    { src: "/assets/logos/unimed.png", alt: "Unimed" },
    { src: "/assets/logos/cherem.png", alt: "Grupo Cherem" },
    { src: "/assets/logos/ABM.png", alt: "ABM Plano de Vida" },
    { src: "/assets/logos/planMinas.png", alt: "Plan Minas" },
    { src: "/assets/logos/Ultraplan.jpg", alt: "Ultraplan" },
    { src: "/assets/logos/BomJesus.jpg", alt: "Grupo Bom Jesus" },
  ];

  return (
    <div id="sobre" className="container mx-auto mb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full mt-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-6 text-center">Nossos Profissionais</h2>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="px-4 hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-t-xl border-b-2 border-red-700"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">{slide.title}</h3>
                  <p className="text-gray-800 text-justify text-sm sm:text-base leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 my-12 text-center">Nossos Parceiros e Convênios</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {parceiros.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border border-gray-300 shadow-md hover:scale-105 transition-transform duration-300 object-contain bg-white"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
