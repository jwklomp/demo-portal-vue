<template>
  <div>
  <h1>List of accounts</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">account number</th>
                <th scope="col">amount</th>
                <th scope="col">account status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for='account in accountList'>
                <td>{{account.accountNumber}}</td>
                <td>€ {{account.amount | amount}}</td>
                <td>{{account.accountStatus | lowercase}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import { myClientService } from "@/mixins/ClientService.js";

export default {
  mixins: [myClientService],
  name: "accountlist",
  data() {
    return {
      accountList: []
    };
  },
  computed: {},
  mounted() {
    this.getAccountListForClient("pda00001"); //todo: should be from logged in user
  },
  methods: {
    getAccountListForClient(clientId) {
      myClientService.getClientData(clientId).then(response => {
        if (response.data !== null) {
          this.accountList = response.data.accounts;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>