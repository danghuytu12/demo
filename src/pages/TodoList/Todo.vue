<template>
  <div>
    
    <v-toolbar flat>
      <Dialog
        :editedUser="editedUser"
        :dialog="dialog"
        :title="title"
        @save="save"
        @close="close"
      />
      <v-spacer></v-spacer>
      
      <v-flex xs12 sm6 md3>
        <v-text-field
          align-center
          v-model="search"
          clearable
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-flex>
      
    </v-toolbar>
    <TableTodo
      @editUser="editUser"
      @deleteUser="deleteUser"
      :headers="headers"
      :search="search"
      :tutorials="tutorials"
    />
  </div>
</template>

<script>
import { HTTP } from "../../api/data";
import Dialog from "./Dialog.vue";
import TableTodo from "./TableTodo.vue";
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      { text: "Name", align: "left", sortable: true, value: "name" },
      { text: "Age", value: "age" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "name", sortable: false }
    ],
    tutorials: [],
    editedIndex: -1,
    editedUser: {
      name: "",
      age: "",
      email:""
    },
    defaultItem: {
      name: "",
      age: "",
      email:""
    }
  }),
  created() {
    this.loadData();
  },
  mounted() {},
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  components: {
    Dialog,
    TableTodo
  },
  computed: {
    title() {
      return this.editedIndex === -1 ? "Add User" : "Edit User";
    }
    
  },
  methods: {
    editUser(item) {
      this.editedUser = { ...item.item };
      this.editedIndex = 1;
      this.dialog = true;
    },

    
    deleteUser(item) {
      HTTP.delete(`/todo/${item}`,)
        .then(() => {
          this.loadData();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    close() {
      this.dialog = false;
      this.loadData;
      this.loadForm();
    },

    save() {
      if (this.editedIndex === -1) {
        this.saveUser();
      } else {
        HTTP.put(`/todo/${this.editedUser.id}`, this.editedUser)
          .then(res => {
            this.loadData();
          })
          .catch(e => {
            console.log(e)
          });
      }

      this.close();
    },

    saveUser() {
      HTTP.post('/todo', this.editedUser)
        .then(res => {
          this.loadForm();
          this.loadData();
          
        })
        .catch(e => {
          console.log(e)
        });
    },

    loadData() {
      HTTP.get('/todo')
        .then(res => {
          this.tutorials = res.data;
        })
        .catch(e => {
          console.log(e)
        });
    },

    loadForm() {
      this.editedUser = {
        name: "",
        age: "",
        email:""
      };
    }
  }
};
</script>
<style scoped>
.v-overlay:before {
  background-color: transparent;
}
</style>