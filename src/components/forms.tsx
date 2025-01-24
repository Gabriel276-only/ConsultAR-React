import React, { useState } from 'react';

const profissionais = [
  {
    nome: 'Dr. João Silva',
    especialidade: 'Psicólogo Infantil',
    criterio: 'dificuldades-com-filhos',
  },
  {
    nome: 'Dra. Maria Oliveira',
    especialidade: 'Psicóloga Clínica',
    criterio: 'ansiedade-ou-depressao',
  },
  {
    nome: 'Dr. Pedro Santos',
    especialidade: 'Terapeuta Familiar',
    criterio: 'problemas-familiares',
  },
];

const FormsPage = () => {
  const [resposta, setResposta] = useState('');
  const [profissional, setProfissional] = useState(null);

  const handleChange = (event) => {
    setResposta(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Lógica para direcionar o paciente ao profissional correto
    const profissionalEncontrado = profissionais.find(
      (prof) => prof.criterio === resposta
    );

    setProfissional(profissionalEncontrado);
  };

  return (
    <div className="m-10 max-w-screen-md mx-auto p-10 bg-gray-200 rounded-lg  ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">O que você procura?</h1>
      {!profissional ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Qual é a sua principal necessidade?
            </label>
            <select
              value={resposta}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Selecione uma opção</option>
              <option value="dificuldades-com-filhos">
                Estou preocupado(a) com dificuldades do meu filho
              </option>
              <option value="ansiedade-ou-depressao">
                Estou sentindo sinais de ansiedade ou depressão
              </option>
              <option value="problemas-familiares">
                Estou enfrentando problemas na minha família
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recomendação</h2>
          <p className="text-gray-700 mb-6">
            Recomendamos que você consulte o seguinte profissional:
          </p>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-red-600">
              {profissional.nome}
            </h3>
            <p className="text-gray-700">{profissional.especialidade}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormsPage;
