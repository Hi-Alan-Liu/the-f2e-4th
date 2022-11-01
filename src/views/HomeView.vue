<template>
  <div class="container">
    <div class="card p-4">

      <div class="d-flex justify-content-evenly">
        <img src="../assets/images/avatar.jpg" class="rounded-circle" alt="Avatar" height="150" width="150">
      </div>

      <h2 class="mt-3">Alan Liu</h2>

      <p>
        <span class="badge text-bg-success m-1">VUE好讚</span>
        <span class="badge text-bg-primary m-1">戀上GSAP</span>
      </p>

      <div class="btn-group-vertical float-left" role="group" aria-label="Vertical button group">
        <router-link type="button" class="btn btn-light py-2 text-start" to="/Week01/">
          <span class="ms-3">Week 1 - The F2E 活動網站設計</span>
        </router-link>
        <router-link type="button" class="btn btn-light py-2 text-start disabled" to="/Week02/">
          <span class="ms-3">Week 2 - 今晚，我想來點點簽</span>
        </router-link>
        <router-link type="button" class="btn btn-light py-2 text-start disabled" to="/Week03/">
          <span class="ms-3">Week 3 - Scrum 新手村</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.card {
  margin-top: 5rem !important;
  margin-top: 50px;
  width: 100%;
  min-width: 280px;
  max-width: 460px;
  margin: auto;
  background-color: #e9ecef;
}
</style>