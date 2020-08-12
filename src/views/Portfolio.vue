<template>
    <div class="container-fluid background">
        <navbar> </navbar>
        <h1 class="intro-text pb-5 pt-5">-portfolio-</h1>
        <h5 style="color: #fff3b2;">personal favorites:</h5>
        <div class="row">
            <div class="col-12 pb-5">
                <carousel class=""> </carousel>
            </div>
            <div class="col-12 pt-3">
               <h5 style="color: #fff3b2;">
                all work:
               </h5>
            </div >
        </div>
            <div class="row images pb-4">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            </div>
            <div class="row images pb-4">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            </div>
            <div class="row images pb-4">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            </div>
            <div class="row images pb-4">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            <img src="https://picsum.photos/200" alt="..." class="img-thumbnail col-3">
            </div>

    </div>
</template>


<script>
    import navbar from "../components/navbar-portfolio.vue";
    import carousel from "../components/carousel.vue";
export default {
    name: 'component',
    data(){
        return {}
    },
    computed:{},
    methods:{},
    components:{
        navbar,
        carousel
    }
}
</script>


<style scoped>
.background {
  background-color: #cd7063;
  justify-content: center;
  height: 100%;
}
.intro-text{
   font-size: 30px;
    font-weight: bold;
    /* opacity: 100%; */
    color: #fff3b2;
    font-family: 'Antic Slab', serif;
    letter-spacing: 7px;
}
.images{
    justify-content: space-evenly;
}

</style>