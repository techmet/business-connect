<template>
  <div class="app-header">
    <span class="app-header-text">Business Connect</span>
  </div>
  <div class="form">
    <Competitors class="competitors-form" />
    <BusinessOpportunity class="business-opportunity-form" />
    <Connection class="connection-form" />
  </div>
</template>

<script>
import BusinessOpportunity from "./components/BusinessOpportunity.vue";
import Competitors from "./components/Competitors.vue";
import Connection from "./components/Connection.vue";

export default {
  name: "App",
  components: {
    Competitors,
    BusinessOpportunity,
    Connection,
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./assets/fonts/Montserrat-VariableFont_wght.ttf) format("truetype");
  font-weight: 1 999;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
  font-weight: 1 999;
}
#app {
  background-color: rgb(51, 51, 51);
  width: 60%;
  margin: auto;
  min-height: 900px;
  font-family: Montserrat;
  color: white;
}
.app-header {
  display: flex;
  align-items: center;
  padding-left: 10px;
  height: 60px;
  background-color: #0a0a0a;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.03);
}
.app-header-text {
  font-weight: bold;
  font-family: Montserrat;
  font-size: 16px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
}
.form {
  padding-top: 10px;
  width: 66%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10px;
}
.business-opportunity-form {
  margin-top: 20px;
}
.connection-form {
  margin-top: 20px;
}
</style>
