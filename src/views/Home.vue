<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Bem Vindo</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Dados Pessoais</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 3" step="3">Dados do Imóvel</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Cadastro Finalizado</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="my-5">
            <v-layout row wrap>
              <v-flex xs12>
                <v-form ref="nameForm">
                  <v-text-field prepend-inner-icon="account_circle" label="Nome" outline color="primary" clearable
                  hint="Digite seu primeiro nome" v-model="name" :rules="nameRules"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>

          <v-btn color="primary" @click="$refs.nameForm.validate() ? e1 = 2 : e1 = 1">Próximo</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="my-5">
            <v-layout row wrap>
              <v-flex xs12>
                <v-form ref="mailForm">
                  <v-text-field prepend-inner-icon="email" label="E-mail" outline color="primary" clearable
                  hint="Digite sua conta de e-mail" v-model="email" :rules="emailRules"></v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card>

          <v-btn flat @click="e1 = 1">Retornar</v-btn>
          <v-btn color="primary" @click="$refs.mailForm.validate() ? e1 = 3 : e1 = 2">Continuar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="my-5">
            <v-radio-group v-model="radios">
              <template v-slot:label>
                <div>Qual é o seu tipo de imóvel?</div>
              </template>
              <v-radio value="Apartamento">
                <template v-slot:label>
                  <div>Apartamento</div>
                </template>
              </v-radio>
              <v-radio value="Casa">
                <template v-slot:label>
                  <div>Casa</div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-card>

          <v-btn flat @click="e1 = 2">Retornar</v-btn>
          <v-btn color="primary" @click="e1 = 4">Finalizar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card class="my-5 py-3">
            <div class="title">{{name}}, </div>
            <div class="title">
              obrigado por nos contatar!
            </div>
            <div class="caption mt-2">
              Retornaremos no seu e-mail ({{email}}) o mais breve possível.
            </div>
          </v-card>

          <v-btn color="primary" block @click="home">Novo Cadastro</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>

export default {
  name: 'home',
   data () {
      return {
        e1: 0,
        radios: 'Casa',
        name: "",
        nameRules: [
          v => !!v || 'Nome é obrigatório',
          v => (v && v.length >= 3) || 'Nome deve conter mais de 3 letras'
        ],
        email: "",
        emailRules: [
          v => !!v || 'E-mail é obrigatório',
          v => /.+@.+/.test(v) || 'E-mail deve ser válido'
        ],
      }
    },
    methods: {
      home(){
        this.name = "";
        this.email = "";
        this.e1 = 1;
      }
    }
}
</script>
