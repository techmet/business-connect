<template>
  <div class="form">
    <Competitors
      class="competitors-form"
    />
    <BusinessOpportunity
      class="business-opportunity-form"
    />
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
    Connection
  },
};
</script>

<style>
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./assets/fonts/Montserrat-VariableFont_wght.ttf) format("truetype");
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),
    url(./assets/fonts/Roboto-Regular.ttf) format("truetype");
}
#app {
  background-color: rgb(51, 51, 51);
  /* width: 950px; */
  /* margin: auto; */
  height: 1045px;
  font-family: Montserrat;
  color: white;
}
.form {
  padding-top: 10px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}
.business-opportunity-form{
  margin-top: 20px;
}
.connection-form{
  margin-top: 20px;
}
</style>
