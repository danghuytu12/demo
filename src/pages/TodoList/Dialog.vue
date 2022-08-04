<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="blue" dark class="mb-2">Add User</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field class="spacing_input" v-model="editedUser.name" :counter="50" :rules="nameRules" label="Name"
            required>
          </v-text-field>

          <v-text-field class="spacing_input" v-model="editedUser.age" :rules="numberRule" label="Age" required>
          </v-text-field>
          <v-text-field class="spacing_input" v-model="editedUser.email" :rules="emailRules" label="E-mail" required>
          </v-text-field>
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
import { validateAge, validateName, validateEmail } from '../../untils/validateInput';
export default {

  props: {
    editedUser: {
      type: Object,
    },
    dialog: {
      type: Boolean,
    },
    title: {
      type: String,
    },

  },

  data: () => ({
    valid: true,
    name: '',
    age: '',
    email: '',
    nameRules: validateName(),
    emailRules: validateEmail(),
    numberRule: validateAge(),
  }),
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$emit('save')
        this.$refs.form.validate()
        this.$refs.form.resetValidation()
      } else {
        this.$refs.form.validate()
        this.$refs.form.resetValidation()
      }
    },
    close() {

      this.$emit('close')

    },
  },

}
</script>

<style scoped>
.spacing_input {
  padding: 5px 20px;
}

.v-overlay:before {
  background-color: transparent;
}
</style>