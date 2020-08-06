<template>
  <div class="container-fluid background">
    <navbar class="pt-3"></navbar>

    <comission1 class></comission1>
    

    <div class="row text-white justify-content-center mt-5">
      <div class="col-3 mr-3" id="order">
        Order
        <br />A
        <br />Commission!
      </div>
      <div class="col-3 ml-3 mr-3">
        <div class="form-group">
          <label for="sel1">Select list</label>
          <select class="form-control" id="sel1">
            <option>Animal Crossing Pet Portrait - $35</option>
            <option>Couple Portrait - $60</option>
            <option>Digital Painting Pet Portrait - $75</option>
          </select>
        </div>
        <div class="form-group">
          <label for="usr">Email</label>
          <input type="text" class="form-control" id="usr" />
        </div>
      </div>
      <div class="col-3">
        <div class="form-group">
          <label for="comment">Comment</label>
          <textarea
            class="form-control"
            placeholder="Enter description here..."
            rows="5"
            id="comment"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row pb-4">
      <div class="col">
      <button type="button" class="btn  p-2">Place Your Order</button>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "../components/navbar.vue";
import comission1 from "../components/commission-1.vue";
export default {
  name: "Home",
  components: {
    navbar,
    comission1
  }
};
</script>
<style scoped>
.background {
  background-color: #cd7063;
  justify-content: center;
  height: 100%;
}
.prices {
  background-color: #cd7063;
  color: rgb(0, 0, 0);
  opacity: 60%;
  font-size: 30px;
  font-weight: bold;
}
#order {
  font-size: 40px;
  font-weight: bold;
  opacity: 60%;
  color: rgb(0, 0, 0);
  font-family: 'Antic Slab', serif;
}
.btn{
  background-color: #fff3b2;
  color: #814032;
}
</style>
