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
                src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/116215947_145794583821962_2686294316445970039_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uJfYGEPUJeAAX8Q8aJm&oh=1b60b7e1fd45112098379bf605020bb9&oe=5F553565"
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 car-image"
                src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/96173059_2311168605858335_4094833614201353109_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=TZaAJiGAhMwAX9S_YA4&oh=13fac57e7eabddc001ed9ad2ddee1881&oe=5F52090B"
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 car-image"
                src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116558351_923645838133901_6093552401345993248_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=nSHqPHAENGYAX9dO0Iy&oh=f7b89f9ab92da96bc7eacf009f103948&oe=5F547178"
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