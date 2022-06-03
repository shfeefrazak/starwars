<template>

  <header>
    <router-link to="/" title="Home">
      <img src="@/assets/logo.png" alt="logo">
    </router-link>
    <nav>
     <router-link to="/films">
        <p>Films</p>
      </router-link>
       <router-link to="/starships?page=1">
        <p>Starships</p>
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navigation'
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 26px;
  width: 100%;
  overflow: hidden;
  background-color: $star-wars-yellow;
  color: #fff;

  nav {
    display: flex;
    flex-flow: nowrap;
    margin-top: 75px;
    min-height: 50%;

    a {
      border-radius: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing:1.2px;
      border: 1px solid #333;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      padding: 15px 60px;
      &.router-link-active, &:hover {
        background-color: rgba(49, 49, 49, 0.734);
      }

      p {
       align-items:left;
      }
      img{
      width: 100%;
      }

    }
  }

  @media only screen and (min-width: 640px) {
    nav {
      margin-top: 50px;

      a {
        padding: 2px 60px;

        p {
          display: block;
        }
    img{
      width: 100%;
      }
      }
    }
  }
}
</style>
