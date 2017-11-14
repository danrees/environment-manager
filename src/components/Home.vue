<<template>
  <div>
      <h4 v-if="authenticated">Logged in</h4>
      <h4 v-else>Please log in</h4>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['auth','authenticated']
}
</script>

