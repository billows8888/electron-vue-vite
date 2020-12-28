import { defineComponent, ref, toRaw } from 'vue'
import { Layout } from 'ant-design-vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import logo from '/assets/electron.png'
import './index.less'

export default defineComponent({
  setup(_, ctx) {
    // reactive 更推荐去定义复杂的数据类型
    // ref 更推荐定义基本类型
    const collapsed = ref(false)

    return () => {
      return <Layout class="app-layout h-100">
        <Layout.Header class="app-header d-flex justify-content-between align-items-center">
          <div class="logo">
            <img src={logo} alt="electron-vue3-vite" />
            <span
              class="position-relative cursor-pointer p-2"
              style="line-height:11px;"
              onClick={() => collapsed.value = !collapsed.value}>
              {collapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </div>
          <div class="flex-fill"></div>
        </Layout.Header>
        <Layout class="d-flex">
          <Layout.Sider width="initial" class={['app-sider', collapsed.value ? 'collapsed' : ''].join(' ')}>

          </Layout.Sider>
          <Layout.Content class="flex-fill">
            {ctx.slots}
          </Layout.Content>
        </Layout>
      </Layout>
    }
  }
})
