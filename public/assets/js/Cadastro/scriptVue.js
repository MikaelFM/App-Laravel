var App1 = new Vue({
    el: '#modal',
    data: {
        email: '',
        senha: '',
        csenha: '',
        problema: '',
        problemaEmail: false,
        problemaSenha: false,
        verSenha: true,
        info: null,
        resposta: '',
        visibility: true,
        cvisibility: true,
        initial: true,
        cinitial: true,
        type: "password",
        ctype: "password",
        elementoAtual: ''
    },
    methods: {
        OnClick: function(elementoClicado){
            el = this.elementoAtual.id
            console.log(el)
            elemento = elementoClicado['path'][1].id
            switch(this.elementoAtual.id){
                case 'senha':
                    el = 'inputSenha';
                    break
                case 'csenha':
                    el = 'inputSenha2';
                    break
                default:
                    el = ''
                    break
            }
            if(elemento != el){
                App1.initialTrue(this.elementoAtual)
                document.querySelector('#modal').removeEventListener('click', App1.OnClick)
            }
        },
        initialFalse: function(z){
            z = document.getElementById(z)
            if(this.elementoAtual != ''){
                console.log(this.elementoAtual)
                App1.initialTrue(this.elementoAtual)
            }
            this.elementoAtual = z
            switch(z.id){
                case 'senha':
                    this.initial = false;
                    break
                case 'csenha':
                    this.cinitial = false;
                    break
            }
            document.querySelector('#modal').addEventListener('click', App1.OnClick)
        },
        initialTrue: function(e){
            switch(e.id){
                case 'senha':
                    App1.initial = true
                    break
                case 'csenha':
                    App1.cinitial = true
                    break
            }
        },
        visibilityOn: function(e){
            switch(e['path'][1].id){
                case 'inputSenha':
                    this.visibility = false
                    this.type = "text"
                    break
                case 'inputSenha2':
                    this.cvisibility = false
                    this.ctype = "text"
                    break
            }
        },
        visibilityOff: function(e){
            switch(e['path'][1].id){
                case 'inputSenha':
                    this.visibility = true
                    this.type = "password"
                    break
                case 'inputSenha2':
                    this.cvisibility = true
                    this.ctype = "password"
                    break
            }
        },
        verificacao: function(e){
            switch(this.info){
                case 0:
                    this.success();
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
                axios.post('./index.php', {
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
