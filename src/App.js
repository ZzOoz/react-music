import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
// 使用react-hook 不使用类组件
function App() {
  return (
    //   引入store
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {/* 渲染第一层的路由 就是Home组件 */}
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
