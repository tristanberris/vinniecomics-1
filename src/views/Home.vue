<template>
  <div class="container-fluid background">
    <navbar class="pt-3"></navbar>
   
    <comission1 class=" "></comission1>
    <div class="row prices justify-content-center">
      <div class="col-3 ml-3 mr-3">$35</div>
      <div class="col-3 ml-3 mr-3">$60</div>
      <div class="col-3 ml-3 mr-3">$75</div>
    </div>
    

 
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar.vue";
import comission1 from "../components/commission-1.vue"
export default {
  name: "Home",
  components: {
    navbar,
    comission1
  }
};
</script>
<style scoped>
.background{
  background-color: rgb(63, 63, 63);
  justify-content: center;
  margin-top: 35px;
  border-radius: 25px;
  width: 96%;
  height: 90vh;
}
.prices{
   background-color: rgb(63, 63, 63);
    color: white;
    font-size: 30px;
    font-weight: bold;
    /* justify-content: space-around; */
    /* padding-left: 7%;
    padding-right: 7%; */
}
</style>
