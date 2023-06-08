import store from "@src/store";

export const selectDirectory = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.setAttribute("webkitdirectory", "");
  input.setAttribute("directory", "");
  input.setAttribute("multiple", "");
  input.onchange = (e: any) => {
    store.dispatch("updateMenu", (e.target?.files as FileList) || []);
  };
  input.click();
};

// export const readDirectory = (directory) => {
//   if (directory.createReader) {
//     // 获取指定目录下的文件列表
//     directory.createReader().readEntries(function (entries) {
//       // 遍历文件列表
//       entries.forEach(function (entry) {
//         if (entry.isFile) {
//           // 如果是文件，输出文件信息
//           console.log("File name: " + entry.name);
//           console.log("File size: " + entry.size);
//           console.log("Last modified: " + entry.lastModifiedDate);
//         } else if (entry.isDirectory) {
//           // 如果是目录，递归读取目录下的文件列表
//           readDirectory(entry);
//         }
//       });
//     });
//   }
// };
