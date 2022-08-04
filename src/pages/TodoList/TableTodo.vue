<template>
     <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.age }}</td>
        <td class="layoutActions">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit</v-icon
          >
          <v-icon small @click="deleteItem(props.item.id)"> delete</v-icon>
        </td>
      </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'TableTodo',
    props: {
        headers: {
            type: Array,
        },
        projects: {
            type: Array,
        },
        search: {
            type: String,
        }
    },
    methods: {
        editItem(item) {
            this.$emit('editItem', {item :item} )
        },
        deleteItem(item) {
          this.$emit('deleteItem',item)
        }
    }
}
</script>

<style scoped>
  .layoutActions{
    align-items: center;
  }
  .elevation-1{
    margin: 50px 0px;
  }
</style>