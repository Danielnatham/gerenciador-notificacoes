$(document).ready(function () {
    const colunas = [
        { data: 'titulo' },
        { data: 'mensagem' },
        {
            data: 'dataEnvio',
            render: function (data, type, row) {
                if (type === 'display' || type === 'filter') {
                    if (data) {
                        return data.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });
                    }
                }
                return row.dataEnvio;
            }
        },
        { data: 'acoes' }
    ];

    const notificacoes = [
        {
            id: 1,
            titulo: "Novo lançamento de imóvel",
            mensagem: "Existe um novo lançamento na planta no bairro Jardim das Flores.",
            dataEnvio: new Date(2021, 2, 20),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=1" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(1)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 2,
            titulo: "Oferta especial para apartamentos",
            mensagem: "Aproveite descontos exclusivos em apartamentos no centro da cidade.",
            dataEnvio: new Date(2021, 3, 15),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=2" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(2)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 3,
            titulo: "Lançamento de casa em condomínio fechado",
            mensagem: "Conheça nossas novas casas no condomínio Verde Vale.",
            dataEnvio: new Date(2021, 4, 22),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=3" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(3)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 4,
            titulo: "Promoção de imóveis comerciais",
            mensagem: "Descontos imperdíveis para imóveis comerciais no centro.",
            dataEnvio: new Date(2021, 5, 10),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=4" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(4)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 5,
            titulo: "Novo projeto de apartamentos",
            mensagem: "Descubra o novo projeto de apartamentos no bairro Novo Horizonte.",
            dataEnvio: new Date(2021, 6, 18),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=5" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(5)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 6,
            titulo: "Venda de lotes em área nobre",
            mensagem: "Aproveite a venda de lotes no bairro Vila Rica.",
            dataEnvio: new Date(2021, 7, 25),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=6" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(6)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 7,
            titulo: "Imóveis com financiamento facilitado",
            mensagem: "Aproveite nosso financiamento facilitado para imóveis.",
            dataEnvio: new Date(2021, 8, 30),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=7" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(7)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 8,
            titulo: "Visitas agendadas para novos imóveis",
            mensagem: "Agende sua visita para conhecer nossos novos imóveis.",
            dataEnvio: new Date(2021, 9, 14),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=8" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(8)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 9,
            titulo: "Imóvel de luxo à venda",
            mensagem: "Conheça nosso imóvel de luxo disponível para venda.",
            dataEnvio: new Date(2021, 10, 5),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=9" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(9)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 10,
            titulo: "Lançamento de imóveis na praia",
            mensagem: "Novos imóveis disponíveis na praia para temporada.",
            dataEnvio: new Date(2021, 11, 20),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=10" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(10)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
        {
            id: 11,
            titulo: "Oportunidade de investimento",
            mensagem: "Invista em imóveis com grande potencial de valorização.",
            dataEnvio: new Date(2022, 0, 15),
            acoes: `<a href="cadastrar-editar-notificacoes.html?id=11" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(11)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`,
        },
    ];


    const table = $('#tabela').DataTable({
        data: notificacoes,
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


    const adicionar = (notificacao) => {
        const id = Math.floor(Math.random() * 1000);

        notificacao['id'] = id
        notificacao['dataEnvio'] = new Date(notificacao['dataEnvio'] + "T00:00:00");
        notificacao['acoes'] = `<a href="cadastrar-editar-notificacoes.html?id=${id}" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></a>
                <a onclick="remover(${id})" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></a>`;

        table.row.add(notificacao).draw();
        $.toast({
            heading: 'Sucesso',
            text: `Notificação com ID ${id} adicionado!.`,
            icon: 'success',
            showHideTransition: 'fade',
            allowToastClose: true,
            hideAfter: 3000,
            stack: 5,
            position: 'top-right',
            textAlign: 'left',
            loader: true,
            loaderBg: '#9EC600',
        });
    };

    window.remover = (id) => {
        const rowIndex = table.rows().indexes().filter((index) => {
            return table.row(index).data().id === id;
        });

        if (rowIndex.length > 0) {
            table.row(rowIndex[0]).remove().draw();
            $.toast({
                heading: 'Sucesso',
                text: `Notificação com ID ${id} removida!.`,
                icon: 'success',
                showHideTransition: 'fade',
                allowToastClose: true,
                hideAfter: 3000,
                stack: 5,
                position: 'top-right',
                textAlign: 'left',
                loader: true,
                loaderBg: '#9EC600',
            });
        }
    };

    const atualizar = (id, updatedData) => {
        const rowIndex = table.rows().indexes().filter((index) => {
            return table.row(index).data().id === id;
        });

        if (rowIndex.length > 0) {
            table.row(rowIndex[0]).data({
                ...table.row(rowIndex[0]).data(),
                ...updatedData
            }).draw();
            $.toast({
                heading: 'Sucesso',
                text: `Notificação com ID ${id} atualizada!.`,
                icon: 'success',
                showHideTransition: 'fade',
                allowToastClose: true,
                hideAfter: 3000,
                stack: 5,
                position: 'top-right',
                textAlign: 'left',
                loader: true,
                loaderBg: '#9EC600',
            });
            console.log(`Row with ID ${id} updated and DataTable refreshed.`);
        }
    };

    $('#formularioAdicionarNotificacao').on('submit', function (event) {
        event.preventDefault();
        const formArray = $(this).serializeArray();
        const formData = {};

        $.each(formArray, function () {
            formData[this.name] = this.value;
        });

        console.log(formData)

        adicionar(formData)

        $('#fecharModal').click();
    });
});
