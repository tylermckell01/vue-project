<template>
  <div class="carousel-container">
    <div class="title">Tic-Tac-Toe Component</div>
    <div class="component third">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdCarousel",
};
</script>

<style lang="scss">
.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
  }

  .component {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 30px;
    gap: 5px;

    .box {
      background-color: gray;
      border: solid 1px black;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .third {
    background-color: #6d6dfc;
  }
}
</style>
