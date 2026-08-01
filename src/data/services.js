import avaliacaoImage from "../../assets/images/avaliacao.png";
import bariatricaImage from "../../assets/images/bariatrica.png";
import tdahImage from "../../assets/images/tdah.png";
import terapiaImage from "../../assets/images/terapia-conv.png";
import vasectomiaImage from "../../assets/images/vasectomia.png";

export const serviceGroups = [
  {
    id: "psicoterapia",
    eyebrow: "Acompanhamento",
    title: "Psicoterapia",
    description:
      "Formatos de cuidado para processos contínuos ou demandas pontuais.",
    services: [
      {
        id: "psicoterapia-individual",
        number: "01",
        title: "Psicoterapia individual",
        image: terapiaImage,
        imageWidth: 547,
        imageHeight: 456,
        summary:
          "Um processo contínuo para compreender padrões, fortalecer recursos emocionais e construir mudanças possíveis.",
        details:
          "A psicoterapia pode acontecer ao longo de semanas ou meses, permitindo um acompanhamento contínuo. É indicada para questões mais complexas ou dificuldades que pedem um cuidado aprofundado e duradouro, com estratégias construídas ao longo do processo.",
      },
      {
        id: "terapia-sessao-unica",
        number: "02",
        title: "Terapia de Sessão Única",
        image: avaliacaoImage,
        imageWidth: 462,
        imageHeight: 540,
        summary:
          "Um encontro focado para organizar uma questão específica e encontrar próximos passos.",
        details:
          "A Terapia de Sessão Única (TSU) é um encontro de 1h30, estruturado com início, meio e fim. Pode ser uma alternativa para crises, dúvidas momentâneas ou decisões importantes que pedem orientação pontual, sem exigir a continuidade de um processo terapêutico longo.",
      },
    ],
  },
  {
    id: "avaliacoes",
    eyebrow: "Investigação",
    title: "Avaliações psicológicas",
    description:
      "Processos estruturados, conduzidos de acordo com cada demanda e finalidade.",
    services: [
      {
        id: "diagnostico-diferencial-tdah",
        number: "03",
        title: "Diagnóstico diferencial do TDAH",
        image: tdahImage,
        imageWidth: 577,
        imageHeight: 432,
        summary:
          "Investigação cuidadosa de sintomas e condições que podem apresentar características semelhantes.",
        details:
          "A avaliação psicológica investiga padrões de desatenção, hiperatividade e impulsividade. O processo integra métodos, técnicas e informações para contribuir com o diagnóstico diferencial do TDAH em relação a outras condições e apoiar decisões de cuidado mais adequadas.",
      },
      {
        id: "avaliacao-cirurgia-bariatrica",
        number: "04",
        title: "Cirurgia bariátrica",
        image: bariatricaImage,
        imageWidth: 500,
        imageHeight: 500,
        summary:
          "Compreensão de expectativas, recursos emocionais e adaptação às mudanças relacionadas ao procedimento.",
        details:
          "A avaliação busca compreender aspectos emocionais, comportamentais e expectativas antes da cirurgia bariátrica. Também ajuda a identificar recursos e possíveis dificuldades para lidar com as mudanças físicas e emocionais envolvidas nesse processo.",
      },
      {
        id: "avaliacao-vasectomia",
        number: "05",
        title: "Vasectomia",
        image: vasectomiaImage,
        imageWidth: 500,
        imageHeight: 500,
        summary:
          "Um processo de escuta e avaliação dos aspectos psicológicos relacionados à decisão.",
        details:
          "A avaliação psicológica explora motivações, expectativas e aspectos emocionais relacionados à decisão e ao procedimento. O processo considera a demanda específica e reúne informações que podem apoiar uma tomada de decisão consciente.",
      },
    ],
  },
];
