import { defineComponent } from 'vue'
import Layout from './layouts/index'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  setup() {
    return () => (
      <Layout>
        <div>App.tsx Component</div>
        <HelloWorld />
      </Layout>
    )
  }
})
