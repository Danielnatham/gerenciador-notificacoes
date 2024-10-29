$(document).ready(function () {
    $('#formularioLogin').on('submit', function (event) {
        event.preventDefault();

        const usuario = $('#usuario').val();
        const senha = $('#senha').val();

        if (usuario === "admin" && senha === "admin") {
            $.toast({
                heading: 'Login realizado com sucesso!',
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
        } else {
            $.toast({
                heading: 'Usuário ou senha inválidos!',
                icon: 'error',
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
    });

    $('#formularioRecuperarSenha').on('submit', function (event) {
        event.preventDefault();

        const recoveryEmail = $('#recoveryEmail').val();

        $.toast({
            heading: 'Sucesso',
            text: 'Email de recuperação enviado para ' + recoveryEmail,
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

        $('#recoveryEmail').val('');
        $('#fecharModal').click();
    });
});