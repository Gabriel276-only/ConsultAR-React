import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 600,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const slidesData = [
    {
      title: "Massoterapeuta Acácio Fonseca Borges",
      image: "/acacio.jpg",
      description:
        "Desenvolvo protocolos para promoção de Saúde e Bem-Estar e prevenção de dores. Ajudo você adesenvolver hábitos mais saudáveis e sem dores no dia a dia. São mais de 30 certificações na áreade massoterapia, trabalho com massagens relaxantes, desportivas e terapêuticas, além de outrastécnicas como a terapia com Ventosas, Dry Needling, Moxa, Cone Hindu, Pedras Quentes,Bandagem Funcional.",
    },
    {
      title: "Psicóloga Regiane Magalhães (CRP 05/31197)",
      image: "/regiane.jpg",
      description:
       "Pós-graduada em gestão de pessoas e Psicanalista em formação, já atuei como palestrante e professora universitária. Regularmente habilitada pelo Conselho de Psicologia, atualmente atuocomo psicóloga clínica de adultos auxiliando no tratamento de demandas emocionais e napromoção de Saúde e Bem-Estar.",
    },
    {
      title: "Psicóloga Bárbara Crivas (CRP 05/55030)",
      image: "/barbara.jpg",
      description:
        "Graduada em Psicologia e Direito, atuo na promoção de Saúde e Bem-Estar com o público femininono desenvolvimento de autonomia, resgate da autoestima e estabelecimento de relações saudáveis,também atendo o público infantojuvenil por meio de Grupos Psicoterapêuticos associados aotrabalho com os familiares. Sou regularmente habilitada pelo Conselho de Psicologia paraatendimento presencial e remoto.",
    },
    {
      title: "Psicóloga Raabe Santos (CRP 05/57226)",
      image: "/raaaaabe.jpg",
      description:
        "Pós-graduada em neuropsicologia, psicopedagogia e psicologia hospitalar e da saúde, realizoavaliação do desenvolvimento infantil, além de trabalhar com demandas de autismo infantil etécnica ABA visando a promoção de Saúde e Bem-Estar. Sou habilitada pelo Conselho dePsicologia, faço atendimento infantojuvenil e orientação de pais e responsáveis.",
    },
    {
      title: "• Psicóloga Bianca Miraglia (CRP 05/73766)",
      image: "/bianca.jpg",
      description:"Pós-graduada em saúde mental e desenvolvimento humano e cursos de aperfeiçoamento emneuropsicologia, TDAH e Transtornos Globais do Desenvolvimento e Arteterapia para Idosos comfoco na Saúde e no Bem-Estar. Atuo com público infantil, adulto e idosos e estou regularmenteinscrita no Conselho de Psicologia.",
    },
    {
      title: "Nutricionista Marcus Palmeira",
      image: "/marcus.jpg",
      description:
        "Sou formado em nutrição há mais de 10 anos, palestrante e professor universitário especialista emnutrição esportiva, fisiologia do movimento, bioquímica do exercício e psicologia aplicada ànutrição. Além de nutricionista sou tricampeão carioca, campeão regional e vice campeão brasileirode fisiculturismo. Nesta jornada, foram mais de 10mil pacientes atendidos promovendo Saúde eBem-Estar.",
    },
    {
      title: "Psicopedagoga Ana Claudia",
      image: "/Anaclaudia.jpg",
      description:
        "Professora de Educação Especial desde 2002 e formação em psicopedagogia, Ana Cláudia é parceira da ConsultAR e atende no Espaço Psicopedagógico em Barra do Piraí. Graduada em estudos sociais, especialista em autismo e apaixonada por práticas baseadas em evidências: ABA, TEACCH, Denver, DIR Floortime/Desenvolvimento Infantil (DIR 101 e em andamento DIR 201) e integração sensorial.",
    },
    {
      title: " Fisioterapeuta Andressa Flor",
      image: "/maryflor.jpg",
      description:
        "Fisioterapeuta, atua com fisioterapia geral, fisioterapia estética, pilates, drenagem linfática, massagem modeladora e massagem redutora. Parceira da ConsultAR, atende no Studio Mary & Flor Fisioterapia e atendimento domiciliar.",
    },
  ];

  return (
    <div id="sobre" className="container mb-6 px-6 sm:px-8">
      <div className="w-full mt-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-4 leading-tight text-center">Nossos Profissionais</h2>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="px-4 hover:scale-105 transition-transform duration-300">
              <div className=" bg-gray-200 rounded-xl shadow-lg overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full object-cover h-64 sm:h-80 md:h-96 rounded-t-xl border-b-2 border-red-700"
                  loading="lazy"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">{slide.title}</h3>
                  <p className="text-gray-700 text-md md:text-md text-justify leading-relaxed">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 my-10 text-center">Nossos Parceiros e Convênios</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {[ 
          { src: "/assets/logos/unimed.png", alt: "Unimed" },
          { src: "/assets/logos/cherem.png", alt: "Grupo Cherem" },
          { src: "/assets/logos/ABM.png", alt: "ABM Plano de Vida" },
          { src: "/assets/logos/planMinas.png", alt: "Plan Minas" },
          { src: "/assets/logos/Ultraplan.jpg", alt: "Ultraplan" },
          { src: "/assets/logos/BomJesus.jpg", alt: "Grupo Bom Jesus" },
        ].map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-gray-300 shadow-md hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;