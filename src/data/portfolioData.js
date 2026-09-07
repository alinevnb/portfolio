export const personalInfo = {
  name: "Aline Vitória Nunes Barros",
  nickname: "Aline",
  age: 17,
  institution: "Instituto Federal de Educação, Ciência e Tecnologia do Acre (IFAC)",
  course: "Técnico Integrado em Informática para Internet",
  year: "3º Ano",
  location: "Rio Branco, Acre",
  tagline: "Estudante no IFAC, apaixonada por confeitaria e impulsionada pela vontade de criar e empreender.",
  bio: [
    "Olá! Sou a Aline, tenho 17 anos e estou cursando o 3º ano do curso Técnico em Informática para Internet no IFAC.",
    "Apesar de ter um perfil prático e estar desenvolvendo meus passos iniciais com atividades de programação web, sou extremamente dedicada, curiosa e versátil. Aprendo com rapidez e me adapto facilmente a diversas rotinas e áreas.",
    "No campus, uni minha paixão pela confeitaria artesanal ao microempreendedorismo: produzo e comercializo alfajores caseiros, conquistando colegas, professores e funcionários com muito sabor, pontualidade e carinho."
  ],
  stats: [
    { label: "Idade", value: "17 anos" },
    { label: "Curso", value: "Informática p/ Internet" },
    { label: "Instituição", value: "IFAC" },
    { label: "Formação Complementar", value: "78h+ em Cursos" },
    { label: "Especialidade Prática", value: "Excel & Produtividade" },
    { label: "Especialidade Doce", value: "Alfajores Artesanais" }
  ]
};

export const alfajorBusiness = {
  title: "Alfajores da Aline",
  subtitle: "Microempreendedorismo Doce no Campus IFAC",
  description: "Um projeto que nasceu da vontade de empreender e levar momentos doces para o dia a dia da comunidade acadêmica no IFAC. Cada alfajor é preparado artesanalmente com ingredientes selecionados, recheio caprichado e embalagem feita com muito afeto.",
  image: "/images/alfajor-artesanal.jpg",
  highlights: [
    {
      title: "Produção 100% Artesanal",
      desc: "Massas frescas e fofinhas assadas no ponto certo, com textura macia que derrete na boca."
    },
    {
      title: "Recheio Generoso",
      desc: "Doce de leite tradicional cremoso e brigadeiro de dar água na boca."
    },
    {
      title: "Embalagem Especial",
      desc: "Embalados individualmente com laço dourado, perfeitos para lanche ou para presentear."
    },
    {
      title: "Gestão & Empreendedorismo",
      desc: "Controle de custos, fluxo de vendas no campus e relacionamento humanizado com clientes."
    }
  ],
  flavors: [
    { name: "Doce de Leite Clássico", tag: "Mais Vendido", desc: "Massa amanteigada com recheio tradicional de doce de leite cremoso e cobertura de chocolate." },
    { name: "Brigadeiro Gourmet", tag: "Favorito dos Alunos", desc: "Massa leve recheada com brigadeiro de panela cremoso com chocolate meio amargo." },
    { name: "Misto Especial", tag: "Edição Especial", desc: "Camada dupla com brigadeiro e doce de leite combinados em perfeita harmonia." }
  ]
};

export const masteredKnowledge = [
  {
    id: "excel-avancado",
    title: "Microsoft Excel Avançado",
    category: "Análise & Produtividade",
    level: "Domínio Avançado",
    hours: "50h de Cursos (Intermediário + Avançado)",
    icon: "Table",
    color: "from-amber-600 to-amber-700",
    summary: "Sei estruturar planilhas completas e inteligentes para tomada de decisão e controle prático.",
    skillsApplied: [
      "Fórmulas complexas e funções lógicas aninhadas",
      "Tabelas dinâmicas para análise rápida de volumes",
      "Planilhas de precificação, controle de custos e fluxo de vendas (usadas na prática no meu negócio)",
      "Gráficos dinâmicos e formatação condicional para relatórios visuais claros"
    ],
    verifiedBy: "Fundação Bradesco (Concluído em 2024)",
    certImage: "/certificates/excel-avancado.png"
  },
  {
    id: "powerpoint-avancado",
    title: "Microsoft PowerPoint Profissional",
    category: "Design Visual & Apresentações",
    level: "Domínio Avançado",
    hours: "16h de Cursos (Básico + Avançado)",
    icon: "Presentation",
    color: "from-orange-600 to-terracotta",
    summary: "Sei criar apresentações visuais de alto impacto, que comunicam ideias com clareza e elegância.",
    skillsApplied: [
      "Diagramação visual moderna e escolha estratégica de tipografia e paleta de cores",
      "Transições fluidas e uso equilibrado de elementos gráficos",
      "Estruturação de apresentações para seminários acadêmicos no IFAC e propostas",
      "Síntese de informações complexas em slides agradáveis e fáceis de assimilar"
    ],
    verifiedBy: "Fundação Bradesco (Concluído em 2024)",
    certImage: "/certificates/powerpoint-avancado.png"
  },
  {
    id: "seguranca-ti",
    title: "Segurança da Informação",
    category: "Tecnologia & Consciência Digital",
    level: "Qualificação Concluída",
    hours: "12h de Formação Especializada",
    icon: "ShieldCheck",
    color: "from-emerald-600 to-emerald-700",
    summary: "Sei aplicar as melhores práticas de proteção digital e segurança no uso da internet.",
    skillsApplied: [
      "Identificação e prevenção contra golpes digitais, phishing e malware",
      "Boas práticas de gestão de senhas seguras e autenticação em duas etapas",
      "Proteção de dados pessoais e conscientização sobre privacidade online",
      "Uso responsável de sistemas e redes no ambiente escolar e corporativo"
    ],
    verifiedBy: "Fundação Bradesco (Concluído em 2026)",
    certImage: "/certificates/seguranca-ti.png"
  },
  {
    id: "informatica-ifac",
    title: "Informática para Internet",
    category: "Formação Técnica no IFAC",
    level: "3º Ano em Andamento",
    hours: "Formação Regular Técnica",
    icon: "Globe",
    color: "from-autumn-700 to-warmBrown",
    summary: "Base sólida em tecnologia adquirida ao longo de 3 anos de dedicação no Instituto Federal do Acre.",
    skillsApplied: [
      "Fundamentos de redes de computadores e ecossistema da web",
      "Lógica estruturada e resolução prática de problemas computacionais",
      "Trabalho colaborativo em projetos multidisciplinares",
      "Capacidade rápida de assimilação de novos softwares e ferramentas digitais"
    ],
    verifiedBy: "Instituto Federal do Acre (IFAC)",
    certImage: null
  }
];

export const skillCategories = [
  {
    title: "Produtividade & Pacote Office",
    icon: "FileSpreadsheet",
    description: "Capacidade comprovada em ferramentas essenciais para gestão, relatórios e apresentações.",
    skills: [
      { name: "Microsoft Excel (Avançado)", level: 90, tag: "Domínio Prático" },
      { name: "Microsoft PowerPoint (Avançado)", level: 88, tag: "Domínio Prático" },
      { name: "Elaboração de Planilhas de Custos e Vendas", level: 85, tag: "Aplicado no Negócio" },
      { name: "Organização e Apresentação de Dados", level: 80, tag: "Prático" }
    ]
  },
  {
    title: "Microempreendedorismo & Negócios",
    icon: "Store",
    description: "Vivência prática diária na criação de produtos, precificação e atendimento ao cliente.",
    skills: [
      { name: "Confeitaria Artesanal (Alfajores)", level: 95, tag: "Destaque" },
      { name: "Atendimento & Relacionamento com Clientes", level: 92, tag: "Prático" },
      { name: "Controle de Estoque e Vendas", level: 82, tag: "Prático" },
      { name: "Precificação e Empreendedorismo Estudantil", level: 85, tag: "Prático" }
    ]
  },
  {
    title: "Informática & Competências Pessoais",
    icon: "Cpu",
    description: "Base acadêmica sólida no IFAC com foco em adaptabilidade e postura proativa.",
    skills: [
      { name: "Segurança da Informação e Boas Práticas", level: 82, tag: "Comprovado" },
      { name: "Noções de Web e Informática para Internet", level: 65, tag: "Em formação" },
      { name: "Proatividade e Aprendizado Rápido", level: 95, tag: "Essencial" },
      { name: "Pontualidade e Trabalho em Equipe", level: 92, tag: "Essencial" }
    ]
  }
];

export const testimonials = [
  {
    name: "Colega de Sala",
    role: "IFAC - 3º Ano",
    text: "O alfajor da Aline é parada obrigatória no intervalo! Além de delicioso e super caprichado, ela é sempre muito atenciosa e pontual com as encomendas."
  },
  {
    name: "Professora do Campus",
    role: "Instituto Federal do Acre",
    text: "Aline demonstra uma dedicação admirável, tanto nas aulas quanto na iniciativa de gerir seu próprio microempreendimento no campus. Tem um futuro brilhante pela frente!"
  }
];
