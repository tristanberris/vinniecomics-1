<template>
  <div class="row justify-content-center">
    <div class="com-1 col-3">
      <!-- title -->
      <div class="row justify-content-center title">Title</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row justify-content-center desc">Description</div>
      <!-- price -->
      <div class="row justify-content-center price">Price</div>
    </div>
    <div class="com-2 col-3">
      <!-- title -->
      <div class="row justify-content-center title">Title</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row justify-content-center desc">Description</div>
      <!-- price -->
      <div class="row justify-content-center price">Price</div>
    </div>
    <div class="com-3 col-3">
      <!-- title -->
      <div class="row justify-content-center title">Title</div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img src="https://picsum.photos/200" alt />
      </div>
      <!-- description -->
      <div class="row justify-content-center desc">Description</div>
      <!-- price -->
      <div class="row justify-content-center price">Price</div>
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
  border: 2px;
  border-style: solid;
}
.image {
  border: 2px;
  border-style: solid;
}
.desc {
  border: 2px;
  border-style: solid;
}
</style>