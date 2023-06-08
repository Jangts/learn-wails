<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo">转换工具</div>
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="240" style="background: #fff">
        <Directory />
      </a-layout-sider>
      <a-layout style="padding: 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import Directory from "./Directory.vue";
export default defineComponent({
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    Directory,
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>
<style lang="scss" scoped>
.layout {
  height: 100vh;
  .header {
    display: flex;

    align-items: center;
    padding: 0;
    .logo {
      width: 240px;
      height: 40px;
      line-height: 40px;
      font-size: 30px;
      font-weight: 200;
      color: white;
    }
    .ant-menu {
      flex: 1;
      width: 0;
    }
  }
}
</style>
