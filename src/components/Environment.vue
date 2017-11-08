<template>
    <li><span>{{ env.name }}-{{ env.owner }}</span><a class="button">Claim</a></li>
</template>

<<script>
export default {
  name: 'environment',
  props: ['env'],
  methods: {
      claimEnvironment: function() {
          this.$store.commit('CLAIM',this.$store.state.owner,env);
      }
  }
}
</script>
