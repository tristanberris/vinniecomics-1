<template>
  <div class="row justify-content-center">
    <div class="col-2"></div>
    <div class="com com-1 col-3 ml-3 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
       <p>
       Animal Crossing
        <br />Pet Portrait
         </p>
      </div>
      <span class="tag dog-tag">$20</span>
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

    <div class="com com-1 com-2 col-3 ml-5 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Couple
        <br />Portrait
      </div>
      <span class="tag dog-tag">$35</span>
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
          <li>Lorem ipsum dfolor sit amet</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$60</div> -->
    </div>
    <div class="col-2"></div>

    <div class="com com-1 com-3 col-3 ml-3 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
       <span>  Digital Painting 
        <br />Pet Portrait </span>
      </div>
      <span class="tag dog-tag">$65</span>
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
    <div class="com com-1 com-3 col-3 ml-5 mr-3 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Romantic<br>Popsicles
      </div>
      <span class="tag dog-tag">$25</span>
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
  transition: background-color .4s;
  /* box-shadow: 10px 10px 0px #663429; */
}
.com-1:hover{
  background-color: #fff8ce;   
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.603)
}
ul{
  list-style-type: none;
  padding-left: 0px;
}
li{
  border-bottom: 1px solid #cfcaa9;
  text-align: center;
  padding: 16px

}
.title {

  padding-bottom: 5px;
  font-size: 26px;
  font-weight: bold;
  color: #814032;
  font-family: "Antic Slab", serif;
  letter-spacing: 3px;

}
.dog-tag{
  position: absolute;
  left: 95%;
  top: 12%;
}
.tag:hover{
  transform: rotate(-10deg);
}
.tag {
  transition: .3s;
	display: inline-block;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.603);
  width: auto;
  height: 60px;
  
	
	background-color: #fff3b2;
	-webkit-border-radius: 3px 4px 4px 3px;
	-moz-border-radius: 3px 4px 4px 3px;
	border-radius: 3px 4px 4px 3px;
	
	border-left: 1px solid #fff3b2;

	/* This makes room for the triangle */
	margin-left: 19px;
	
	/* position: relative; */
	
	color: #814032;
	font-weight: 300;
	font-family: 'Source Sans Pro', sans-serif;
	font-size: 34px;
  line-height: 60px;
   

	padding: 0 10px 0 10px;
}

/* Makes the triangle */
.tag:before {
	content: "";
	position: absolute;
	display: block;
	left: -30px;
	width: 0;
	height: 0;
	border-top: 30px solid transparent;
	border-bottom: 30px solid transparent;
  border-right: 30px solid #fff3b2;
  /* transform: rotate(180deg); */
}

/* Makes the circle */
.tag:after {
	content: "";
	background-color: #814032;
	border-radius: 50%;
	width: 7px;
	height: 7px;
	display: block;
	position: absolute;
	left: -12px;
  top: 27px;
  
}

.image {

}
.desc {
  
  /* opacity: 100%; */
  color: #814032;
  justify-content: center;
  /* margin-top: 15px; */
  padding-top: 5px;
  /* border-style: solid; */
  font-size: 25px;
  font-family: "Antic Slab", serif;
}

.com {
  background-color: #fff3b2;
  border-radius: 25px;
  color: rgb(0, 0, 0);
  font-family: "Antic Slab", serif;
}
</style>