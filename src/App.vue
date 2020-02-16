<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="stylus">
body, #app {
  font-family: 'Ubuntu Light';
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#nav {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 4vh;

  & > a {
    border-radius: 14px 14px 0 0;
    padding: 12px 14px;
    background-color: navy;
    flex: 1 1 0;
    text-decoration: none;
    font-size: 1.4rem;
    color: white;

    &:hover {
      background-color: steelblue;
    }
  }
}
</style>
