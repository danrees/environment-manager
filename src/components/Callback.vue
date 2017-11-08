<<template>
  <div>
      <span>Loading, please wait</span>
  </div>
</template>

<<script>
export default {
  name: 'callback',
  props: ['auth'],
  data () {
      this.auth.handleAuthentication()
      return {}
  }
}
</script>

