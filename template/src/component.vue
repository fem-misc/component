<template>
  <div class="{{name}}">
    hello
  </div>
</template>

<script>
export default {
  name: '{{pascalify name}}',
  props: {},
  data() {
    return {}
  }
}
</script>

<style lang="stylus">
.{{name}} {

}
</style>
