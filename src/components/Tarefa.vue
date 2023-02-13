<template>
  <div>
    <v-list-item
    class="blue-lighten-5">

      <template v-slot:default="{}">
        <v-list-item-action>
          <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ tarefa.titulo }}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],

};
</script>

<style>
</style>