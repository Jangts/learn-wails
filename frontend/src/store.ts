import { TreeProps } from "ant-design-vue";
import { DataNode } from "ant-design-vue/lib/tree";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      fileList: [],
      menuTree: [],
    };
  },
  mutations: {
    assign(state, payload: any) {
      Object.assign(state, payload);
    },
  },
  actions: {
    updateMenu({ commit }, files: FileList) {
      const tree: TreeProps["treeData"] = [];
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        const arr = file.webkitRelativePath.split("/");
        let list = tree;
        for (let index = 0; index < arr.length; index++) {
          const key = arr.slice(0, index + 1).join("/");
          const title = arr[index];
          if (title === ".DS_Store") continue;

          let item: DataNode | undefined = list.find(
            (item) => item.key === key
          );
          if (!item) {
            if (index < arr.length - 1) {
              item = {
                key,
                title,
                children: [],
                meta: {
                  type: index ? "Dir" : "Root",
                },
              };
            } else {
              item = {
                key,
                title,
                meta: {
                  type: "File",
                  file,
                },
              };
            }
            list.push(item);
          }
          if (index < arr.length - 1) {
            list = item.children!;
          }
        }
      }
      //   console.log("tree:", tree);
      commit("assign", {
        fileList: files,
        menuTree: tree,
      });
    },
  },
});

export default store;
