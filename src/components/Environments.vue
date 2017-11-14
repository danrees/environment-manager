<<template>
    <div>
        <create-environment />
        <h2 class="title is-3">Current Environments</h2>
    <ul>
      <environment v-for="env in environments" :key="env.id" :env="env"></environment>
    </ul>
    </div>
</template>

<script>
import Environment from './Environment.vue'
import CreateEnvironment from './CreateEnvironment.vue'

export default {
  name: 'environments',
  computed: {
      environments() {
        return this.$store.state.environments;
    }
  },
    components: {
        Environment,
        CreateEnvironment
    }
}
</script>
