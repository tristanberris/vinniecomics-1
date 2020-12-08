<template>
  <div class="row justify-content-center">
    <div class="com com-1 col-lg-4 col-sm-6 ml-5 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
       <p class="mt-3">
       Pet Illustation
        <br />-Stylized- 
         </p>
      </div>
      <span class="tag dog-tag">$60</span>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://i.imgur.com/817EseQ.jpg"
          alt
        />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Insert your pet into a cute illustrated scene</li>
          <li>Can be as simple or detailed as you’re looking for</li>
          <li style="border-bottom: none">Final file will be digital but print ready</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$35</div> -->
    </div>

    <div class="com com-1 com-2 col-lg-4 col-sm-6 ml-5 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Couple
        <br />Portrait
      </div>
      <span class="tag dog-tag">$75</span>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://i.imgur.com/q1jfjWw.jpg"
          alt
        />
      </div>
      <!-- description -->
      <div class="row desc ">
        <ul>
          <li>Illustrated portrait of you and your partner</li>
          <li>Optional simple background of your choosing</li>
          <li style="border-bottom: none">Final file will be digital but print ready</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$60</div> -->
    </div>

    <div class="com com-1 com-3 col-lg-4 col-md-6 ml-5 mr-5 mt-3">
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
          src="https://i.imgur.com/PZ6w2Tl.jpg"
          alt
        />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Realistic digital painting of your pet</li>
          <li>Optional simple background of your choosing</li>
          <li style="border-bottom: none">Final file will be digital but print ready</li>
        </ul>
      </div>
      <!-- price -->
      <!-- <div class="row justify-content-center price">$75</div> -->
    </div>
    <div class="com com-1 com-3 col-lg-4 col-md-6 ml-5 mr-5 mt-3">
      <!-- title -->
      <div class="row justify-content-center title">
        Romantic<br>Popsicles
      </div>
      <span class="tag dog-tag">$25</span>
      <!-- image -->
      <div class="row justify-content-center image">
        <img
          class="img-fluid"
          src="https://i.imgur.com/2JZn3RT.jpg"
          alt
        />
      </div>
      <!-- description -->
      <div class="row desc">
        <ul>
          <li>Cute and simple design of you and your partner as popsicles!</li>
          <li>Unlike a real popsicle these are immortal and cannot melt</li>
          <li style="border-bottom: none">Final file will be digital but print ready</li>
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
/* .overflow{
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 600px;
  content: "Hover for info!";
}
.overflow:hover{
  text-overflow: clip;
  white-space: normal;
  word-break: break-all;
} */
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