<template>
     <v-data-table
      :headers="headers"
      :items="tutorials"
      :search="search"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.age }}</td>
        <td class="layoutActions">
          <v-icon small class="mr-2" @click="editedItem(props.item)">
            edit</v-icon
          >
          <v-icon small @click="deleteItem(props.item.id)">delete</v-icon>
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
        tutorials: {
            type: Array,

        },
        search: {
            type: String,

        }
    },
    data() {
      return {

      }
    },
    methods: {
        editedItem(item) {
            this.$emit('editedItem', {item :item} )
        },
        deleteItem() {
          this.$emit('deleteItem')
        }
    }
}
</script>

<style scoped>
  .layoutActions{
    align-items: center;
  }
  .elevation-1{
    margin:50px 0px;
  }
</style>