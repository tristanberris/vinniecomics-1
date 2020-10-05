<template>
  <div class="row justify-content-center carousel">
    <div class="col-5">
      <div class="carousel">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100 img-fluid car-image"
                src=""
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 car-image"
                src=""
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 car-image"
                src=""
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "carousel",
  data() {
    return {};
  },
  computed: {},
  methods: {
    //   var carousel = new Vue({
    //   })
  },
  components: {}
};
</script>


<style scoped>
.carousel {
  height: auto;
  width: 100%;
  clip: rect(0px,390px,534x,390px);

}
.car-image{
    width: 524px;
    height: 390px;
}
</style>