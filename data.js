 $(document).ready(function () {
      $('#tabela').DataTable({
        data: data,
        columns: colunas,
        language: {
          url: '//cdn.datatables.net/plug-ins/2.1.8/i18n/pt-BR.json',
        },
        columnDefs: [
          {
            targets: 3,
            searchable: false, 
            orderable: false,
            className: "text-center pb-2",
          }
        ]
      });
    });

const colunas = [
    { data: 'titulo' },
    { data: 'mensagem' },
    { data: 'dataEnvio' },
    { data: 'acoes' }
];

const data = [
    {
        id: 1,
        titulo: "Novo lançamento de imóvel",
        mensagem: "Existe um novo lançamento na planta no bairro Jardim das Flores.",
        dataEnvio: "20/03/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=1" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 2,
        titulo: "Oferta especial para apartamentos",
        mensagem: "Aproveite descontos exclusivos em apartamentos no centro da cidade.",
        dataEnvio: "15/04/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=2" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 3,
        titulo: "Feirão de imóveis próximo mês",
        mensagem: "Confira o feirão de imóveis com condições especiais de financiamento.",
        dataEnvio: "30/04/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=3" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 4,
        titulo: "Novo empreendimento em construção",
        mensagem: "Conheça o novo empreendimento residencial no bairro da Praia Verde.",
        dataEnvio: "05/05/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=4" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 5,
        titulo: "Últimas unidades disponíveis",
        mensagem: "Últimas unidades disponíveis no condomínio Parque das Águas.",
        dataEnvio: "20/05/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=5" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 6,
        titulo: "Loteamento aberto na zona rural",
        mensagem: "Loteamento residencial aberto para compra de terrenos na zona rural.",
        dataEnvio: "10/06/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=6" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 7,
        titulo: "Condições especiais para financiamento",
        mensagem: "Imóveis com condições facilitadas de financiamento na Vila Sol.",
        dataEnvio: "01/07/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=7" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 8,
        titulo: "Novo residencial próximo ao centro",
        mensagem: "Conheça o novo residencial familiar a poucos minutos do centro.",
        dataEnvio: "15/07/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=8" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 9,
        titulo: "Imóvel com desconto por tempo limitado",
        mensagem: "Descontos especiais em imóveis prontos para morar no Jardim Imperial.",
        dataEnvio: "25/07/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=9" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 10,
        titulo: "Casas com entrada facilitada",
        mensagem: "Casas novas no condomínio Bela Vista com entrada facilitada.",
        dataEnvio: "01/08/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=10" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    },
    {
        id: 11,
        titulo: "Lançamento exclusivo de casas sustentáveis",
        mensagem: "Conheça o novo projeto de casas ecológicas com energia solar no bairro Recanto Verde.",
        dataEnvio: "10/08/2021",
        acoes: `<a href="cadastrar-editar-notificacoes.html?id=11" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i> Editar</a>`,
    }
];
