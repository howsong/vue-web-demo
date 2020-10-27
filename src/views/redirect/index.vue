<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Redirect extends Vue {
  private created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query })
  }
  private render(h) {
    return h()
  }
}
</script>
