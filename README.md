## vue-router-uniapp
  通过this.$router的方式调用uniapp路由

## Install
```bash
  npm install vue-router-uniapp --save

```

## Usage
```js
  import Router from 'vue-router-uniapp'
  const router = new Router
  Vue.prototype.$router = router

```

## 路由映射关系
```js
  {
    push: "navigateTo",
    replace: "redirectTo",
    reLaunch: "reLaunch",
    switchTab: "switchTab",
    back: "navigateBack"
  }

```