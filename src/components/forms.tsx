import React, { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const profissionais = [
  { nome: 'Bárbara Crivas - Psicóloga', criterio: ['avaliacao-psicologica', 'psicologia-clinica', 'psicologia-da-saude', 'grupos-terapeuticos', 'Ansiedade', 'Autoconehcimento', 'Cirurgia Bariátrica', 'Conflitos Familiares', 'Crianças e Adolescentes', 'Emagrecimento/Obesidade', 'Estresse','Exame Psicológico/Avaliação Admissional', 'Incertezas quanto ao Futuro', 'Maternidade', 'Orientação de Pais', 'Questões Raciais', 'Saúde Feminina', 'Suicídio','Violência Doméstica'], contato: "https://api.whatsapp.com/send/?text=Psicóloga+Bárbara+Crivas+-+https%3A%2F%2Fwa.me%2F5524992478872%3Ftext%3DOlá%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informações+sobre+o+acompanhamento+psicológico&type=custom_url&app_absent=0" },
  { nome: 'Regiane Araújo - Psicóloga', criterio: ['avaliacao-psicologica', 'psicologia-clinica', 'psicologia-da-saude', 'Adoção', 'Ansiedade', ' Cirurgia Bariátrica', 'Compulsões',  'Conflitos Familiares', 'Depressão', 'Desenvolvimento de Compentências Profissionais', 'Emagrecimento/Obesidade', 'Estresse', 'Exame Psicológico/Avaliação Admissional', 'Fobias', 'Idoso/Terceira idade', 'Incertezas quanto ao Futuro', 'Morte e Luto', 'Sexualidade e Identidade de gênero', 'Transtorno Alimentares'], contato: "https://api.whatsapp.com/send/?text=Psicóloga+Regiane+Magalhães+-+https%3A%2F%2Ftr.ee%2FK_UCoVvoxd&type=custom_url&app_absent=0" },
  { nome: 'Raabe Santos - Psicóloga', criterio: ['avaliacao-psicologica', 'psicologia-clinica', 'neuropsicologia', 'hospitalar', 'psicologia-da-saude', 'psicopedagogia', 'grupos-terapeuticos', 'neuropsicopedagogia', 'ABA', 'Ansieade', 'Aprendizagem', 'Autoconhecimento', 'Conflitos Familiares', 'Criança e Adolescentes', 'Depressão', 'Dores', 'Exame psicológico/Avaliação Admissional','Estresse','Fobias','Incertezas quanto ao futuro','Maternidade','Morte e Luto', 'Orientação de Pais', 'Orientação Profissional', 'Pacientes enfermos', 'Planejamento psicopedagógico', 'Reabilitação Neuropsicológica', 'Saúde Feminina', 'Síndrome do Pânico', 'TEA', 'TDAH','TOC','Treinamento de memória'], contato: "https://api.whatsapp.com/send/?phone=5524992985705&text=Olá%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informações+sobre+o+acompanhamento+psicológico&type=phone_number&app_absent=0"},
  { nome: 'Acácio Borges - Massouterapeuta', criterio: ['psicomotricidade', 'grupos-terapeuticos', 'massoterapia','Ansiedade', 'Bandagem elástica', 'Cone Hindu', 'Drenagem Linfática', 'Dores', 'Dry needling', 'Estresse', 'Idoso/Terceira idade', 'Liberação Miofascial', 'Massagem esportiva','Massagem Relaxante', 'Massagem Terapeutica', 'Pedras quentes', 'Recuperação Muscular', 'Ventosaterapia'], contato: "https://api.whatsapp.com/send/?text=Massoterapeuta+Acácio+Borges+-+https%3A%2F%2Ftr.ee%2Fo-zxbMAdHa&type=custom_url&app_absent=0" },
  { nome: 'Andressa - Fisioterapeuta', criterio: ['fisioterapia', 'Dores','Fisioterapia Neurofuncional', 'Idoso/Terceira Idade', 'Pilates', 'Trauma e Ortopedia'], contato: "https://api.whatsapp.com/send/?phone=5524992691139&text=Olá%21+Peguei+seu+contato+pela+ConsultAR%2C+gostaria+de+mais+informações+sobre+fisioterapia&type=phone_number&app_absent=0" }
];

const FormsPage = () => {
  const [tipoBusca, setTipoBusca] = useState("criterio"); // 'criterio' ou 'temas'
  const [resposta, setResposta] = useState("");
  const [profissionaisFiltrados, setProfissionaisFiltrados] = useState([]);

  const handleTipoChange = (event) => {
    setTipoBusca(event.target.value);
    setResposta(""); // Resetar a seleção ao mudar o tipo de busca
    setProfissionaisFiltrados([]);
  };

  const handleChange = (event) => {
    setResposta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const filtrados = profissionais.filter((prof) => {
      if (tipoBusca === "criterio") {
        return prof.criterio.includes(resposta);
      } else {
        return prof.criterio.some((item) => item.toLowerCase().includes(resposta.toLowerCase()));
      }
    });
    setProfissionaisFiltrados(filtrados);
  };

  return (
    <div className="m-10 max-w-screen-md mx-auto p-10 bg-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">O que você procura?</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Como deseja buscar?</label>
          <select
            value={tipoBusca}
            onChange={handleTipoChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="criterio">Por área profissional</option>
            <option value="temas">Por temas </option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Selecione uma opção:</label>
          <select
            value={resposta}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Selecione uma opção</option>
            {tipoBusca === "criterio" ? (
              <>
                <option value="avaliacao-psicologica">Avaliação Psicológica</option>
                <option value="psicologia-clinica">Psicologia Clínica</option>
                <option value="neuropsicologia">Neuropsicologia</option>
                <option value="hospitalar">Psicologia Hospitalar</option>
                <option value="psicologia-da-saude">Psicologia da Saúde</option>
                <option value="psicopedagogia">Psicopedagogia</option>
                <option value="psicomotricidade">Psicomotricidade</option>
                <option value="grupos-terapeuticos">Grupos Terapêuticos</option>
                <option value="massoterapia">Massoterapia</option>
                <option value="fisioterapia">Fisioterapia</option>
                <option value="neuropsicopedagogia">Neuropsicopedagogia</option>
                <option value="ABA">ABA - Análise Comportamental Aplicada</option>
              </>
            ) : (
              <>
               <option value="Adoção">Adoção</option>
                <option value="Ansiedade">Ansiedade</option>
                <option value="Aprendizagem">Aprendizagem</option>
                <option value="Autoconhecimento">Autoconhecimento</option>
                <option value="Cirurgia Bariátrica">Cirugia Bariátrica</option>
                <option value="Compulsões">Compulsões</option>
                <option value="Conflitos Familiares">Conflitos Familiares</option>
                <option value="Crianças e Adolescentes">Crianças e Adolescentes</option>
                <option value="Depressao">Depressão</option>
                <option value="Desenvolvimento de Competências Profissionais">Desenvolvimento de Competências Profissionais</option>
                <option value="Dores">Dores</option>
                <option value="Emagrecimento/Obesidade">Emagrecimento/Obesidade</option>
                <option value="Estresse">Estresse</option>
                <option value="Exame Psicológico/Avaliação Admissional">Exame Psicológico/Avaliação Admissional</option>
                <option value="Fobias">Fobias</option>
                <option value="Idoso/Terceira Idade">Idoso/Terceira Idade</option>
                <option value="Incertezas quanto ao futuro">Incertezas quanto ao futuro</option>
                <option value="Maternidade">Maternidade</option>
                <option value="Morte e Luto">Morte e Luto</option>
                <option value="Orientação de Pais">Orientação de Pais</option>
                <option value="Orientação Profissional">Orientação Profissional</option>
                <option value="Pacientes enfermos">Pacientes enfermos</option>
                <option value="Planejamento psicopedagógico">Planejamento psicopedagógico</option>
                <option value="Questões Raciais">Questões Raciais</option>
                <option value="Reabilitação Neuropsicológica">Reabilitação Neuropsicológica</option>
                <option value="Saúde Feminina">Saúde Feminina</option>
                <option value="Sexualidade e Identidade de gênero">Sexualidade e Identidade de gênero</option>
                <option value="Síndrome do Pânico">Síndrome do Pânico</option>
                <option value="Suicídio">Suicídio</option>
                <option value="TEA">Transtorno do Espectro Autista</option>
                <option value="TDAH">Transtorno do Déficit de Atenção e Hiperatividade</option>
                <option value="TOC">Transtorno Obsessivo Compulsivo</option>
                <option value="Trasntorno Alimentares">Trasntorno Alimentares</option>
                <option value="Treinamento de memória">Treinamento de memória</option>
                <option value="Violência Doméstica">Violência Doméstica</option>
                <option value="Bandagem elástica">Bandagem elástica</option>
                <option value="Cone Hindu">Cone Hindu</option>
                <option value="Dry needling">Questões Raciais</option>
                <option value="Drenagem Linfática">Drenagem Linfática</option>
                <option value="Massagem esportiva">Massagem esportiva</option>
                <option value="Massagem Relaxante">Massagem Relaxante</option>
                <option value="Massagem Terapeutica">Massagem Terapeutica</option>
                <option value="Liberação Miofascial">Liberação Miofascial</option>
                <option value="Pedras quentes">Pedras quentes</option>
                <option value="Recuperação Muscular">Recuperação Muscular</option>
                <option value="Ventosaterapia">Ventosaterapia</option>
                <option value="Fisioterapia Neurofuncional">Fisioterapia Neurofuncional</option>
                <option value="Pilates">Pilates</option>
                <option value="Trauma e Ortopedia">Trauma e Ortopedia</option>



              
                
              </>
            )}
          </select>
        </div>

        <button
          type="submit"
          className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Enviar
        </button>
      </form>

      {profissionaisFiltrados.length > 0 && (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profissionais Recomendados</h2>
          {profissionaisFiltrados.map((prof) => (
            <div key={prof.nome} className="p-4 bg-white rounded-lg shadow-md mb-2 flex items-center justify-between">
              <h3 className="text-lg font-bold text-red-600">{prof.nome}</h3>
              {prof.contato && (
                <a
                  href={prof.contato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-green-500 text-white rounded-xl flex items-center justify-center ml-auto"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  <span>Contato</span>
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormsPage;
