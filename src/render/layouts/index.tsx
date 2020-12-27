import { defineComponent, ref } from 'vue'
import { Layout } from 'ant-design-vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import logo from '/assets/electron.png'
import './index.less'

export default defineComponent({
  setup(self, props) {
    // reactive 更推荐去定义复杂的数据类型
    // ref 更推荐定义基本类型
    let collapsed = ref(false)

    const clickCollapse = (ev: any) => {
      console.log(collapsed)
      collapsed.value = !collapsed.value
    }

    return () => {
      return <Layout class="app-layout d-flex h-100">
        <Layout.Sider width="initial" class={['app-sider', collapsed.value ? 'collapsed' : ''].join(' ')}>
          <div class="logo">
            <img src={logo} alt="electron-vue3-vite" />
          </div>

        </Layout.Sider>
        <Layout class="flex-fill">
          <Layout.Header class="app-header d-flex justify-content-between align-items-center">
            <span class="position-relative cursor-pointer p-2" style="line-height:11px;" onClick={clickCollapse}>
              {collapsed.value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </span>
          </Layout.Header>
          <Layout.Content>
            {props.slots}
          </Layout.Content>
        </Layout>
      </Layout>
    }
  }
})
