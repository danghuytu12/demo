<template>
  <v-data-table :headers="headers" :items="tutorials" :search="search" class="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.age }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="layoutActions">
        <v-icon small class="mr-2" @click="editUser(props.item)">
          edit</v-icon>
        <v-row justify="center">
          <v-icon small class="mr-2" @click.stop="dialog = true">
            delete</v-icon>

          <v-dialog v-model="dialog" persistent max-width="500">
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this user information?
              </v-card-title>

              <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when
                no apps are running.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" flat @click="deleteUser(props.item.id)">Delete</v-btn>

              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>



      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'TableTodo',
  data() {
    return {
      dialog: false,
    }
  },
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
  methods: {
    editUser(item) {
      this.$emit('editUser', { item: item })
    },
    deleteUser(item) {
      this.$emit('deleteUser', item)
      this.dialog = false;
    },
  }
}
</script>

<style scoped>
.layoutActions {
  align-items: center;
}

.elevation-1 {
  margin: 50px 0px;
}

.v-overlay:before {
  background-color: transparent;
}
</style>