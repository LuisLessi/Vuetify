<template>
  <div>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
          v-model="createMesage"
            label="Criar anotação"
            clearable 
            outlined
            @keyup.enter="handleSaveAnnotation()"
          ></v-text-field>
        </v-col>

    <v-list flat subheader>
      <v-list-item-group 
      multiple 
      active-class="">
      
        <div v-for="tarefa, index in tarefas"
        :key="index">
          <Tarefa 
          :tarefa="tarefa"/>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import Tarefa from "../components/Tarefa.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TarefasView",

  components: {
    Tarefa,
  },
  data() {
    return {
      createMesage: null,
      tarefas: [
        {
          titulo: "Ir ao mercado",
          concluido: false,
        },
        {
          titulo: "Comprar ração",
          concluido: true,
        },
      ],
    };
  },
  methods:{
    handleSaveAnnotation(){
      if(this.createMesage !== null){
        this.tarefas.push({
          titulo: this.createMesage,
          concluido: false
        })
        this.createMesage = null
      }
    }
  }
});
</script>
