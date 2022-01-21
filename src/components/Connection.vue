<template>
  <div class="connection-form">
    <div class="header">
      <b> <span class="header-text">CONNECTION</span></b>
    </div>
    <div class="connection-box">
      <div class="connection-left-box">
        <div class="connection-select-text">Competitor</div>
        <div class="connection-select">
          <select v-model="competitor">
            <option value="" disabled selected>Choose competitor..</option>
            <option v-for="item in competitors" :key="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="connection-right-box">
        <div class="connection-select-text">Opportunity</div>
        <div class="connection-select">
          <select v-model="opportunity">
            <option value="" disabled selected>Choose opportunity..</option>
            <option v-for="item in opportunities" :key="item.id">
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="connection-left-box">
        <div class="connection-select-text">Challenge</div>
        <div class="connection-select">
          <input v-model="challenge" type="text" />
        </div>
      </div>
      <div class="connection-right-box">
        <div class="connection-select-text">Strategy</div>
        <div class="connection-select">
          <input v-model="strategy" type="text" />
        </div>
      </div>
      <div class="connection-box-button">
        <input type="button" v-on:click="createConnection" value="CONNECT" />
      </div>
    </div>
    <div
      v-for="item in connections"
      :key="item.id"
      class="connection-form-list"
    >
      <span class="connection-clear" v-on:click="deleteConnection(item.id)"
        >×</span
      >
      <div class="connection-form-list-header">
        <span class="connection-form-list-header-text">{{
          item.competitor
        }}</span>
        <span
          class="connection-form-list-header-text"
          style="height: 16px; width: 16px"
          >→</span
        >
        <span class="connection-form-list-header-text">{{
          item.opportunity
        }}</span>
      </div>
      <div class="connection-form-labels">
        <div class="connection-form-label">{{ item.challenge }}</div>
        <div class="connection-form-label">{{ item.strategy }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { API } from "aws-amplify";
import { createConnection, deleteConnection } from "../graphql/mutations";
import {
  onCreateCompetitor,
  onDeleteCompetitor,
  onCreateOpportunity,
  onDeleteOpportunity,
} from "../graphql/subscriptions";
import {
  listConnections,
  listCompetitors,
  listOpportunities,
} from "../graphql/queries";
export default {
  name: "Connection",
  async created() {
    this.getConnections();
    this.getCompetitors();
    this.getOpportunities();
    this.subscribe();
  },
  data() {
    return {
      competitor: "",
      opportunity: "",
      challenge: "",
      strategy: "",
      connections: [],
      opportunities: [],
      competitors: [],
    };
  },
  methods: {
    async createConnection() {
      const { competitor, opportunity, challenge, strategy } = this;
      if (!competitor || !opportunity || !challenge || !strategy) return;
      const connection = await API.graphql({
        query: createConnection,
        variables: { input: { competitor, opportunity, challenge, strategy } },
      });
      this.competitor = "";
      this.opportunity = "";
      this.challenge = "";
      this.strategy = "";
      this.connections = [
        ...this.connections,
        connection.data.createConnection,
      ];
    },
    async getOpportunities() {
      const opportunities = await API.graphql({
        query: listOpportunities,
      });
      this.opportunities = opportunities.data.listOpportunities.items;
    },
    async getCompetitors() {
      const competitors = await API.graphql({
        query: listCompetitors,
      });
      this.competitors = competitors.data.listCompetitors.items;
    },
    async getConnections() {
      const connections = await API.graphql({
        query: listConnections,
      });
      this.connections = connections.data.listConnections.items;
    },
    async deleteConnection(id) {
      const connection = { id };
      await API.graphql({
        query: deleteConnection,
        variables: { input: connection },
      });
      this.connections = this.connections.filter((item) => item.id !== id);
    },
    async subscribe() {
      API.graphql({ query: onCreateCompetitor }).subscribe({
        next: (eventData) => {
          let competitor = eventData.value.data.onCreateCompetitor;
          if (this.competitors.some((item) => item.name === competitor.name))
            return; // remove duplications
          this.competitors = [...this.competitors, competitor];
        },
      });
      API.graphql({ query: onDeleteCompetitor }).subscribe({
        next: (eventData) => {
          let competitor = eventData.value.data.onDeleteCompetitor;
          this.competitors = this.competitors.filter(
            (item) => item.id !== competitor.id
          );
        },
      });
      API.graphql({ query: onCreateOpportunity }).subscribe({
        next: (eventData) => {
          let opportunity = eventData.value.data.onCreateOpportunity;
          if (this.opportunities.some((item) => item.name == opportunity.name))
            return; // remove duplications
          this.opportunities = [...this.opportunities, opportunity];
        },
      });
      API.graphql({ query: onDeleteOpportunity }).subscribe({
        next: (eventData) => {
          let opportunity = eventData.value.data.onDeleteOpportunity;
          this.opportunities = this.opportunities.filter(
            (item) => item.id !== opportunity.id
          );
        },
      });
    },
  },
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
.connection-select option {
  width: 297px;
  height: 34px;
  padding: 0px 2px 0px 10px;
  border: 1px solid #5f5f5f;
  background-color: #404040;
  background-size: cover;
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
  cursor: pointer;
}
.connection-form-labels {
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
  margin-right: 10px;
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
.connection-clear {
  float: right;
  vertical-align: top;
  margin-right: 8px;
  cursor: pointer;
}
</style>
