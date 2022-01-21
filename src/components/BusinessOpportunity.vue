<template>
  <div class="opportunity-form">
    <div class="header">
      <b> <span class="header-text">BUSINESS OPPORTUNITY</span></b>
    </div>
    <div class="opportunity-box">
      <div class="opportunity-box-text">Opportunity name</div>
      <div class="opportunity-box-text-box">
        <input v-model="name" type="text" />
      </div>
      <div class="opportunity-box-button">
        <input type="button" v-on:click="createOpportunity" value="ADD" />
      </div>
    </div>
    <div v-if="opportunities.length > 0" class="opportunity-form-labels">
      <div
        v-for="item in opportunities"
        :key="item.id"
        class="opportunity-form-label"
      >
        {{ item.name }}
        <span class="opportunity-clear" v-on:click="deleteOpportunity(item.id)"
          >×</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { API } from "aws-amplify";
import { createOpportunity, deleteOpportunity } from "../graphql/mutations";
import { listOpportunities } from "../graphql/queries";
export default {
  name: "BusinessOpportunity",
  async created() {
    this.getOpportunities();
  },
  data() {
    return {
      name: "",
      opportunities: [],
    };
  },
  methods: {
    async createOpportunity() {
      if (!this.name) return;
      const opportunity = await API.graphql({
        query: createOpportunity,
        variables: { input: { name: this.name } },
      });
      this.opportunities = [
        ...this.opportunities,
        opportunity.data.createOpportunity,
      ];
      this.name = "";
    },
    async getOpportunities() {
      const opportunities = await API.graphql({
        query: listOpportunities,
      });
      this.opportunities = opportunities.data.listOpportunities.items;
    },
    async deleteOpportunity(id) {
      const opportunity = { id };
      await API.graphql({
        query: deleteOpportunity,
        variables: { input: opportunity },
      });
      this.opportunities = this.opportunities.filter((item) => item.id !== id);
    },
  },
};
</script>
<style scoped>
.opportunity-form {
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
.opportunity-box {
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
.opportunity-box-text {
  width: 124px;
  font-family: Roboto;
  color: #ffffff;
  font-size: 13px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.opportunity-box-text-box input {
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
.opportunity-box-button input {
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
  cursor: pointer;
}
.opportunity-form-labels {
  height: auto;
  /* border: 1px solid #404040; */
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #404040;
  background-size: cover;
  border-style: solid;
  border-color: #333333;
  background-size: cover;
  padding: 15px;
  border-top-width: 0px;
  display: flex;
  flex-wrap: wrap;
}
.opportunity-form-label {
  height: 40px;
  line-height: 40px;
  width: 190px;
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
.opportunity-clear {
  float: right;
  vertical-align: top;
  margin-right: 8px;
  margin-top: -12px;
  cursor: pointer;
}
</style>
