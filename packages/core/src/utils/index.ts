

/**实例的Id */
export const ScopeModuleId = "__ScopeModuleId__"
/**代码运行时的ID */
export const RuntimeCtxId = "__RunTimeContainerID__";

export const createRuntimeContext = () => {
  let iframe = document.getElementById(RuntimeCtxId) as HTMLIFrameElement;
  try {
    if (!iframe) {
      iframe = document.createElement("iframe");
      // 只能访问与主文档具有相同源的内容，并且只能运行;JavaScript 脚本。这可以保证 iframe 与主文档之间的安全隔离，防止 iframe 中的恶意脚本影响主文档;
      iframe.setAttribute("sandbox", "allow-same-origin allow-scripts");
      iframe.style.display = "none";
      iframe.id = RuntimeCtxId;
      document.documentElement.appendChild(iframe);
    }

    return iframe;
  } catch (error) {
    console.error("初始化执行容器失败")
    return null
  }
};
