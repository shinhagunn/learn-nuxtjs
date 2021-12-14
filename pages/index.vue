<template>
  <div>
    <AuthForm title="Form test" @submit.prevent="onSubmit">
      <AuthInput v-model="email" type="email" placeholder="Email"/>
      <AuthInput v-model="password" type="password" placeholder="Password" />
      <AuthButton type="submit">
        Submit
      </AuthButton>
    </AuthForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class index extends Vue {
  email = '';
  password = '';

  onSubmit() {
    console.log(this.email, this.password)
  }
}
</script>
