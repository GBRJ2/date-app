<template>
  <router-view></router-view>
</template>
<script>
export default {};
</script>

<style scoped>
@font-face {
  font-family: "pretendard";
  src: url(../src/assets/font/Pretendard-Medium.ttf);
}

@font-face {
  font-family: "pretendard-otf";
  src: url(../src/assets/font/Pretendard-Medium.otf);
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  font-family: "pretendard", "pretendard-otf";
  margin: 0;
  padding: 0;
}

a{
  color: rgb(77, 77, 77)
}

</style>
