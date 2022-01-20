<template>
  <div class="competitor-form">
    <div class="header">
      <b> <span class="header-text">COMPETITORS</span></b>
    </div>
    <div class="competitor-box">
      <div class="competitor-box-text">Competitor name</div>
      <div class="competitor-box-text-box"><input type="text" /></div>
      <div class="competitor-box-button">
        <input type="button" value="ADD" />
      </div>
    </div>
    <div class="competitor-form-labels">
      <div class="competitor-form-label">Apple</div>
      <div class="competitor-form-label">Tesla</div>
      <div class="competitor-form-label">IBM</div>
      <div class="competitor-form-label">Microsoft</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Competitors",
  props: {},
};
</script>
<style scoped>
.competitor-form {
  width: 100%;
}
.header {
  padding: 10px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #333333;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #575757;
  background-size: cover;
}
.header-text {
  width: 203px;
  height: 14px;
  font-family: Montserrat;
  font-size: 11px;
  color: #ffffff;
  font-weight: bold;
}
.competitor-box {
  display: flex;
  flex-direction: row;
  background-color: #404040;
  border-style: solid;
  border-color: #333333;
  background-size: cover;
  padding: 10px;
  border-top-width: 0px;
  border-bottom-width: 1px;
}
.competitor-box-text {
  width: 124px;
  font-family: Roboto;
  color: #ffffff;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.competitor-box-text-box input {
  width: 339px;
  height: 34px;
  padding: 0px 10px;
  border: 1px solid #5f5f5f;
  background-color: #404040;
  font-family: Roboto;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
}
.competitor-box-button input {
  width: 132px;
  height: 34px;
  padding: 0px 20px;
  border-radius: 3px;
  background-color: #57c046;
  font-family: Montserrat;
  font-size: 11px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  text-align: center;
  margin-left: 15px;
  border: 1px;
}
.competitor-form-labels {
  height: auto;
  /* border: 1px solid #404040; */
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #404040;
  background-size: cover;
  padding: 5px;
  border-style: solid;
  border-color: #333333;
  background-size: cover;
  padding: 10px;
  border-top-width: 0px;
  display: flex;
  flex-wrap: wrap;
}
.competitor-form-label {
  height: 40px;
  line-height: 40px;
  width: 190px;
  margin-top: 15px;
  padding: 0px 0px 0px 15px;
  border-top-width: 1px;
  border-style: solid;
  border-color: #404040;
  border-radius: 3px;
  background-color: #333333;
  background-size: cover;
  font-family: Roboto;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
}
</style>
