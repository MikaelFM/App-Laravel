<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Faça Login</title>
        <!--------------------------Scripts------------------------------------>
        <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script src="../../public/assets/js/jquery-3.6.0.min.js"></script>
        <!----------------------------CSS-------------------------------------->
        <link
            href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
            integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
            crossorigin="anonymous" referrerpolicy="no-referrer"/>
        <link rel="stylesheet" href="{{url('assets/css/login.css')}}">
        <!--------------------------------------------------------------------->
    </head>
    <body>
        <div id="modal">
            <div id="content">
                <!--Icone de Conta--->
                <span class="material-icons-outlined" id="account">account_circle</span>
                <!--Titulo--->
                <h1>LOGIN</h1>
                <!-------Form Input 1------>
                <div class="inputs">
                    <span class="material-icons-outlined icon-email ">email</span>
                    <input type="email" name="email" id="email" class="normal-input" placeholder="E-mail"
                        v-model="email">
                    <span class="material-icons-outlined icon-exclamacao" v-if="problemaEmail">priority_high</span>
                </div>
                <!-------Form Input 2------>
                <div class="inputs" id="inputSenha">
                    <span class="material-icons-outlined icon-email" v-if="initial">lock</span>
                    <span class="material-icons-outlined icon-email" v-if="visibility == true && initial == false" @click="visibilityOn()">visibility</span>
                    <span class="material-icons-outlined icon-email" v-if="visibility == false && initial == false"  @click="visibilityOff()">visibility_off</span>
                    <input v-bind:type="type" name="senha" id="senha" class="normal-input" placeholder="Senha" v-model="senha" @focus="initialFalse">
                    <span class="material-icons-outlined icon-exclamacao" v-if="problemaSenha">priority_high</span>
                </div>
                <!-------Texto de Erro------>
                <p id="error" v-if="problema != ''">@{{problema}}</p>
                <!-------Botão de Submit------>
                <div class="inputs">
                    <input type="submit" name="enviar" id="enviar" value="LOGIN" class="submit" @click="onSubmit()">
                </div>
                <!-------Texto de Redirecionamento------>
                <p class="cadastro">Não possui cadastro? <a href="/cadastro" class="cadastro">Cadastre-se</a></p>
            </div>
        </div>
        <!-------Vue JS------>
        <script src="{{url('assets/js/Login/scriptVue.js')}}"></script>
    </body>
</html>
