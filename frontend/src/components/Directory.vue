<template>
  <div v-if="currentDirectory.length" style="height: 100%; overflow-y: auto">
    <a-tree
      v-model:expandedKeys="expandedKeys"
      v-model:selectedKeys="selectedKeys"
      v-model:checkedKeys="checkedKeys"
      checkable
      :tree-data="currentDirectory"
    >
      <template #title="{ title, key }">
        <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
        <span v-else style="font-size: 12px">{{ title }}</span>
      </template>
    </a-tree>
    <a-button @click="handleMenuClear">清空文件</a-button>
  </div>
  <div v-else><a-button @click="handleMenuSelect">选择目录</a-button></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { selectDirectory } from "/src/utils/files";
import { useStore } from "vuex";

const store = useStore();
const currentDirectory = computed(() => store.state.menuTree);
const expandedKeys = ref([]);
const selectedKeys = ref([]);
const checkedKeys = ref([]);

const handleMenuSelect = () => {
  selectDirectory();
};

const handleMenuClear = () => {
  store.commit("assign", {
    fileList: [],
    menuTree: [],
  });
};

onMounted(() => {
  console.log("hello");
  //   readDirectory();
});
</script>
