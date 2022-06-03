<template>
<section>
  <marquee direction="up" class="scrollingtext" scrollamount="4" behavior="scroll">
    <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG42.png" width="25%">
    <h1>{{name}}</h1>
    <br>
    <br>
    <p>{{data | capitalize}}</p>
    <br>
    <br>
    <p>{{release}}</p>
    <p>Directed by {{director}}</p>
    <p>Flim producer {{producer}}</p>
  </marquee>
</section>
</template>

<script>
export default {
  name: 'SectionMovieIntro',
  props: ['name', 'title', 'data', 'release', 'director', 'producer']
};
</script>
