<<template>
    <div>
        <div>Welcome {{owner}}</div>
        <div class="field has-addons">
            <div class="control">
                <input class="input" type="text" placeholder="New Environment Name" v-model="newEnv.name">
             </div>
             <div class="control">
                <a href="#" class="button is-black" v-on:click="addEnv">Add Environment</a>
             </div>
        </div>
        
    </div>
</template>

<<script>
export default {
  name: 'create-environment',
  data() {
    return {
      newEnv: {}
    }
  },
  computed: {
      owner() {
          return this.$store.state.owner
      }
  },
    methods: {
    addEnv: function(event){
      this.$store.commit('add',{name: this.newEnv.name, id: this.newEnv.id, owner: this.owner});
      //Possibly hacky way of clearing the field, but once we've entered the new environment in the state we don't really need it anymore anyways      
      this.newEnv = {};
    }
  },
}
</script>
