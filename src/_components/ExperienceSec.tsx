export default function ExperienceSec() {
  return (
    <div className="w-full animate-fade animate-duration-3000 flex flex-col items-center gap-10">
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h1 className="text-5xl z-1 text-cyan-400">Experiência</h1>
        <span className="absolute text-6xl bottom-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-30">
          Experiência
        </span>
      </div>
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a] rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">Desenvolvedor Autônomo</h2>
              <p className="text-gray-500">Freelancer</p>
              <p className="text-gray-400">Jan 2023 - Atual</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Atuo como desenvolvedor autônomo, criando soluções simples para
                clientes, como automação de mensagens utilizando Python, além de
                comercializar essas soluções para pequenas empresas e
                profissionais autônomos.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a] rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">Desenvolvedor Freelancer</h2>
              <p className="text-gray-500">Oliver</p>
              <p className="text-gray-400">Maio 2022 - Junho 2022</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Trabalhei no desevolvimento de email resposinvos para os
                clientes da Oliver, utilizando HTML e CSS, garantindo
                compatibilidade com diversos clientes de email e dispositivos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-full font-extrabold flex flex-col items-center gap-4">
        <h2 className="text-2xl z-1 text-cyan-400">Experiência Academica</h2>
        <span className="absolute text-3xl truncate bottom-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent opacity-10">
          Experiência Academica
        </span>
      </div>
      <section className="w-full flex flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a] rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </h2>
              <p className="text-gray-500">UFBRA</p>
              <p className="text-gray-400">2025 - Presente</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Retornando a minha jornada acadêmica, atualmente estou cursando
                o curso de Tecnólogo em Análise e Desenvolvimento de Sistemas.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4 p-3 bg-[#16171a] rounded-md">
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold">
                Bacharelado em Ciência da Computação
              </h2>
              <p className="text-gray-500">Unip</p>
              <p className="text-gray-400">2018 - 2022</p>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                Estudei Ciência da Computação e concluí todas as disciplinas do curso, sendo aprovado em todas. Meu foco acadêmico foi em desenvolvimento e engenharia de softwares, adquirindo habilidades em lógica de programação e banco de dados. Por motivos pessoais, não finalizei o estágio obrigatório necessário para a obtenção do diploma.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
