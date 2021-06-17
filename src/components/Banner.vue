<template>
  <div class="banner">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://picsum.photos/id/1015/1140/600" class="d-block w-100 object-cover" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/1040/1140/600" class="d-block w-100 object-cover" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/1036/1140/600" class="d-block w-100 object-cover" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'banner',
};
</script>

<style>
.object-cover {
  max-height: 400px;
  object-fit:fill;
}
</style>
