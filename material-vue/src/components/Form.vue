<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-60">
        <h2 class='md-display-2'>Simple Form</h2>
        <form novalidate class="md-layout">
            <md-field :class="getValidationClass('firstName')">
              <label>First Name</label>
              <md-input v-model="form.firstName"></md-input>
              <!-- <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span> -->
            </md-field>

            <md-field>
              <label>Middle Name</label>
              <md-input v-model="form.middleName"></md-input>
            </md-field>

            <md-field :class="getValidationClass('lastName')">
              <label>Last Name</label>
              <md-input v-model="form.lastName"></md-input>
              <!-- <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span> -->
            </md-field>

            <md-field :class="getValidationClass('age')">
              <label>Age</label>
              <md-input v-model="form.age"></md-input>
              <span class="md-helper-text">Numbers only, please</span>
              <!-- <span class="md-error" v-if="!$v.form.age.required">The age is required</span> -->
            </md-field>

            <div class="button-row">
                <md-button type="submit" class="md-raised md-primary">Create user</md-button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'TextFields',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        middleName: null,
        lastName: null,
        age: null
      },
      validations: {
        form: {
          firstName: { required },
          middleName: {},
          lastName: { required },
          age: { required }
        }
      }
    }),
    methods: {
      getValidationClass (fieldName) {
        // TODO: I can't get this to work, which is a bummer
        //
        // const field = this.$v.form[fieldName]
        //
        // if (field) {
        //   return {
        //     'md-invalid': field.$invalid && field.$dirty
        //   }
        // }
      }
    }
  }
</script>

<style scoped>
    h2 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .button-row {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 1rem;
    }
</style>
