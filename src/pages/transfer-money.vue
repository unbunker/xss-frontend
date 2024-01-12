<script setup>

const amountOfMoney = ref(500);
const amountDeduct = ref();

const formSubmitHandler = () => {
  amountOfMoney.value =  amountOfMoney.value  - amountDeduct.value

  alert("The money has been send")
};


</script>

<template>
  <v-row class="match-height">
    <v-col cols="12" md="12">
      <v-card elevation="4" class="withbg">
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between pt-sm-2">
                <div>
                  <v-card-title class="text-h5">You have {{ amountOfMoney }} euro's</v-card-title>
                </div>
            </div>

            <form @submit.prevent="formSubmitHandler">
            <br/>
            <br/>

            <v-col cols="12">
              <v-text-field variant="underlined" label="To whom do you want to send money?" type="text"/>
            </v-col>
            <v-col cols="12">
              <v-text-field variant="underlined" v-model="amountDeduct" label="Amount" type="number"/>
            </v-col>

            <v-btn type="submit"  variant="outlined"> 
              Submit 
            </v-btn>
          </form>

        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
