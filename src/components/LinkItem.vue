<template>
    <router-link :to="route"
                 class="linkItem">
      <p class="title">{{title | capitalize}}</p>
      <p class="subtitle">{{subtitle | capitalize}}</p>
    </router-link>
</template>

<script>
export default {
  name: 'LinkItem',
  props: [
    'routeName',
    'title',
    'subtitle',
    'id'
  ],
  computed: {
    route () {
      return `/${this.routeName}/${this.id}`;
    }
  }
};
</script>

<style lang="scss">
.linkItem {
  width: 100%;
  padding: 20px 40px;
  border-radius: 6px;
  margin-bottom: 10px;
  background-color: $star-wars-gray;
  font-weight: bold;

  .title {
    padding-bottom: 10px;
    font-size: 2.5rem;
    color: $star-wars-white;
  }

  .subtitle {
    color: $star-wars-text-gray;
    padding-left: 4px;
    font-size: 16px;
  }

  &:hover {
    background-color: $star-wars-gray-opacity;
  }
}
</style>
