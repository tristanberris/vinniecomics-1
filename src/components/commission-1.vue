<template>
  <div class="row justify-content-center">
    <div class="com com-1 col-3 ml-3 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">Animal Crossing<br>Pet Portrait</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Lorem ipsum dolor sit aet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$35</div> -->
    </div>

    <div class="com com-2 col-3 ml-3 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">Couple<br>Portrait</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$60</div> -->
    </div>

    <div class="com com-3 col-3 ml-3 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">Digital Painting<br>Pet Portrait</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$75</div> -->
    </div>
  </div>
</template>


<script>
export default {
  name: "com-1",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.com-1 {
  display: inline;
}
.title {
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 5px;
  border-style: solid;
  border-color: white;
  margin-bottom: 15px;
  padding-bottom: 5px;
  font-size: 20px;
    font-weight: bold;
    opacity: 60%;
}
.image {
  /* border: 2px;
    border-bottom: 0px;
  border-style: solid; */
  /* margin-top: 5px; */
  margin-bottom: 10px;
  
}
.desc {
   border-top: 5px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
  border-color: white;
  opacity: 70%;
  margin-top: 15px;
  padding-top: 5px;
  border-style: solid;
  
  
}
/* .price{
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 25px;
    font-weight: bold;
} */
.com{
    background-color: rgb(179, 179, 179);
      border-radius: 25px;
      color: rgb(0, 0, 0);

}
</style>