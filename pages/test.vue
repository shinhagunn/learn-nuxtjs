<template>
  <div class="main">
    <input v-model="checked" type="checkbox">
    <span>{{ checked }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class MyClass extends Vue {
  checked = false;
}
</script>
