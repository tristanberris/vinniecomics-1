<template>
  <div class="pos-f-t body">
  <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
  <a class="navbar-brand nav-text" href="#">Vinnie Comics</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div> -->
</nav>
</div>
</template>


<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.font-size{
    font-size: 2rem;
    
    opacity: 75%;
}
.nav-text{
    font-size: 30px;
    font-weight: bold;
    opacity: 60%;
}
</style>