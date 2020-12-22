import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
// 判断window上是否有这个变量，这个变量的作用是观测是否安装了react-devtools这个插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnhancers(
    // 使用异步中间件
    applyMiddleware(thunk)
))

export default store