<template>
  <div class="container-fluid">
    <navbar></navbar>
   
    <comission1></comission1>

 
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
