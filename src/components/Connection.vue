<template>
  <div class="connection-form">
    <div class="header">
      <b> <span class="header-text">CONNECTION</span></b>
    </div>
    <div class="connection-box">
      <div class="connection-left-box">
        <div class="connection-select-text">Competitor</div>
        <div class="connection-select"><select></select></div>
      </div>
      <div class="connection-right-box">
        <div class="connection-select-text">Opportunity</div>
        <div class="connection-select"><select></select></div>
      </div>
      <div class="connection-left-box">
        <div class="connection-select-text">Challenge</div>
        <div class="connection-select"><input type="text" /></div>
      </div>
      <div class="connection-right-box">
        <div class="connection-select-text">Strategy</div>
        <div class="connection-select"><input type="text" /></div>
      </div>
      <div class="connection-box-button">
        <input type="button" value="CONNECT" />
      </div>
    </div>
    <div class="connection-form-list">
      <div class="connection-form-list-header">
        <span class="connection-form-list-header-text">Apple</span>
        <span
          class="connection-form-list-header-text"
          style="height: 16px; width: 16px"
          >→</span
        >
        <span class="connection-form-list-header-text">Tesla</span>
      </div>
      <div class="connection-form-labels">
        <div class="connection-form-label">Example Challenge</div>
        <div class="connection-form-label">Example Opportunity</div>
      </div>
    </div>
    <div class="connection-form-list">
      <div class="connection-form-list-header">
        <span class="connection-form-list-header-text">Tesla</span>
        <span
          class="connection-form-list-header-text"
          style="height: 16px; width: 16px"
          >→</span
        >
        <span class="connection-form-list-header-text">Microsoft</span>
      </div>
      <div class="connection-form-labels">
        <div class="connection-form-label">Example Challenge</div>
        <div class="connection-form-label">Example Opportunity</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Connection",
  props: {},
};
</script>
<style scoped>
.connection-form {
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
.connection-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #404040;
  border-style: solid;
  border-color: #333333;
  background-size: cover;
  padding: 10px;
  border-top-width: 0px;
  border-bottom-width: 1px;
}
.connection-select-text {
  width: 124px;
  font-family: Roboto;
  color: #ffffff;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.connection-select-text > div {
  padding-left: 9px;
}
.connection-select select,
.connection-select input {
  width: 297px;
  height: 34px;
  padding: 0px 10px;
  border: 1px solid #5f5f5f;
  background-color: #404040;
  font-family: Roboto;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
}
.connection-select input {
  width: 276px;
}
.connection-box-button input {
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
.connection-form-labels {
  /* border: 1px solid #404040; */
  background-color: #404040;
  background-size: cover;
  padding: 5px 5px 5px 10px;
  border-style: solid;
  border-color: #333333;
  background-size: cover;
  padding: 10px;
  border-top-width: 0px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
}
.connection-form-label {
  height: 40px;
  line-height: 40px;
  padding: 0px 0px 0px 15px;
  margin-left: 5px;
  background-size: cover;
  font-family: Roboto;
  font-size: 13px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  width: 295px;
  border-color: #404040;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #333333;
  background-size: cover;
}
.connection-left-box {
  padding-left: 17px;
}
.connection-right-box {
  padding-left: 9px;
}
.connection-box-button {
  margin-left: auto;
  margin-top: 15px;
  margin-right: 15px;
}
.connection-form-list {
  height: 104px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #333333;
  background-color: #404040;
  background-size: cover;
  padding-bottom: 10px;
}
.connection-form-list-header {
  margin: 15px;
}
.connection-form-list-header-text {
  width: 34px;
  height: 20px;
  font-family: Roboto;
  font-size: 14px;
  color: #ffffff;
  text-decoration: none solid rgb(255, 255, 255);
  line-height: 20px;
  margin-left: 9px;
}
.connection-form-labels {
  display: flex;
  flex-direction: row;
  border: 1px solid #404040;
}
</style>
