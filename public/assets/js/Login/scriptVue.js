var App1 = new Vue({
    el: '#modal',
    data: {
        email: '',
        senha: '',
        problema: '',
        problemaEmail: false,
        problemaSenha: false,
        verSenha: true,
        info: null,
        resposta: '',
        visibility: true,
        initial: true,
        type: "password"
    },
    methods: {
        OnClick: function(e){
            el = document.querySelector('#inputSenha')
            elemento = e['path'][1].id
            console.log(e)
            if(elemento != el.id){
                App1.initialTrue()
                document.querySelector('#modal').removeEventListener('click', App1.OnClick)
            }
        },
        initialFalse: function(){
            this.initial = false
            document.querySelector('#modal').addEventListener('click', App1.OnClick)
        },
        initialTrue: function(){
            this.initial = true
        },
        visibilityOn: function(){
            this.visibility = false
            this.type = "text"
        },
        visibilityOff: function(){
            this.visibility = true
            this.type = "password"
        },
        verificacao: function(){
            switch(this.info){
                case 0:
                    this.success()
                    break
                case 1:
                    this.onErro()
                    break
            }
        },
        success: function(){
            window.location.href = '../index.html'
        },
        onErro: function () {
            this.problemaEmail = true;
            this.problemaSenha = true
            this.problema = this.resposta
        },
        onSubmit: function () {
            this.problemaEmail = false;
            this.problemaSenha = false;
            email = this.email;
            senha = this.senha;
            var re = /\S+@\S+\.\S+/;
            if (re.test(email)) {
                axios.post('/loginGetValue', {
                    email: this.email,
                    senha: this.senha
                })
                    .then(function (response) {
                        response = response['data'];
                        App1.info = response['info']
                        App1.resposta = response['resposta']
                        App1.verificacao()
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                this.problemaEmail = true;
                this.problema = 'E-mail inválido, favor verificar'
            }
        }
    }
})
