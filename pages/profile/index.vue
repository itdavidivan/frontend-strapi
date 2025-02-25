<template>
  <div class="profile-list">
    <div class="profile-card">
      <h2>{{ person.name }}</h2>
      <p>Email: {{ person.email }}</p>
      <p>Role: {{ person.role }}</p>
      <!-- Add more fields as needed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: null,
        email: null,
        role: null,
      },
    };
  },
  methods: {
    name() {},
  },
};
</script>

<style scoped>
.profile-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.profile-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
}
</style>
