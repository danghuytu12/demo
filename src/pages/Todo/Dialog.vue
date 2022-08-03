<template>
  <div>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="blue" dark class="mb-2">Add User</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <!-- <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md12>
                <v-text-field v-model="editedItem.name" label="Name" :error-messages="nameErrors" :counter="10" required
                  @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md12>
                <v-text-field v-model="editedItem.age" label="Age" :error-messages="nameErrors" :counter="10" required
                  @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
        </v-card-text> -->
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="editedItem.name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

          <v-text-field v-model="editedItem.age" :rules="numberRule" label="Age" required></v-text-field>
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn :disabled="!valid" color="blue darken-1" flat @click.native="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  props: {
    editedItem: {
      type: Object,
    },
    dialog: {
      type: Boolean,
    },
    formTitle: {
      type: String,
    },
  },
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    numberRule: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 150) || 'Number has to be between 0 and 999']
  }),
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$emit('save')
      } else {
        this.$refs.form.validate()
      }
    },
    close() {
      this.$emit('close')
    },


  },

}
</script>

<style>
</style>