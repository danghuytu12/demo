<template>
    <div>
        <v-dialog v-model="dialog" max-width="500px">
           <v-btn slot="activator" color="dark" dark class="mb-2">Add User</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md12>
                  <v-text-field
                    v-model="editedItem.name"
                    label="Name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md12>
                  <v-text-field
                    v-model="editedItem.age"
                    label="Age"
                  ></v-text-field>
                </v-flex>
                
              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close"
              >Cancel</v-btn
            >
            <v-btn color="blue darken-1" flat @click.native="save()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'dialogCus',
    props: {
        editedItem: {
            type: Object,
            required: true
        },
        dialog: {
            type: Boolean,
            required: true
        },
        formTitle: {
            type: String,
            required: true
        },
    },
    data() {
      return {

      }
    },
    methods: {
        save() {
            this.$emit('save')
        },
        close() {
          this.$emit('close')
        }
    }
}
</script>

<style>

</style>