<template>
  <div class="row justify-content-center">
    <div class="col-2"></div>
    <div class="com com-1 col-3 ml-3 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Animal Crossing
        <br />Pet Portrait
      </div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/116215947_145794583821962_2686294316445970039_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=uJfYGEPUJeAAX8Q8aJm&oh=1b60b7e1fd45112098379bf605020bb9&oe=5F553565"
          alt
        />
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

    <div class="com com-2 col-3 ml-5 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Couple
        <br />Portrait
      </div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/96173059_2311168605858335_4094833614201353109_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=TZaAJiGAhMwAX9S_YA4&oh=13fac57e7eabddc001ed9ad2ddee1881&oe=5F52090B"
          alt
        />
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
    <div class="col-2"></div>

    <div class="com com-3 col-3 ml-3 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Digital Painting
        <br />Pet Portrait
      </div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/110363858_695142728002505_4120438381942782556_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Y4vnXDB3_sEAX_KX5ha&oh=053d8dc346bf40c8c31723d432802756&oe=5F547F14"
          alt
        />
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
    <div class="com com-3 col-3 ml-5 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Romantic<br>Popsicles
      </div>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://instagram.fboi1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116558351_923645838133901_6093552401345993248_n.jpg?_nc_ht=instagram.fboi1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=nSHqPHAENGYAX9dO0Iy&oh=f7b89f9ab92da96bc7eacf009f103948&oe=5F547178"
          alt
        />
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
  font-family: "Antic Slab", serif;
}
.title {
 
  padding-bottom: 5px;
  font-size: 26px;
  font-weight: bold;
  color: #814032;
  opacity: 100%;
  font-family: "Antic Slab", serif;
      letter-spacing: 3px;

}
.image {
  /* border: 2px;
    border-bottom: 0px;
  border-style: solid; */
  /* margin-top: 5px; */
  /* margin-bottom: 10px; */
}
.desc {
  
  opacity: 100%;
  color: #814032;

  /* margin-top: 15px; */
  padding-top: 5px;
  /* border-style: solid; */
  font-size: 25px;
  font-family: "Antic Slab", serif;
}
/* .price{
    background-color: rgb(63, 63, 63);
    color: white;
    font-size: 25px;
    font-weight: bold;
} */
.com {
  background-color: #fff3b2;
  border-radius: 25px;
  color: rgb(0, 0, 0);
  font-family: "Antic Slab", serif;
}
</style>