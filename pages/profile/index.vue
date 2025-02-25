<template>
  <div class="profile-list">
    <div v-if="person === null">Loading...</div>
    <div v-else class="profile-card">
      <h2>{{ person.username }}</h2>
      <p>Email: {{ person.email }}</p>
      <p>Role: {{ person.provider }}</p>
      <!-- Add more fields as needed -->
      <button @click="logoutUser">Logout</button>
    </div>
  </div>
</template>

<script lang="ts">
import type { Profile } from "~/types";
import { useStrapiAuth } from "#imports";
export default {
  data() {
    return {
      person: null as Profile | null,
    };
  },
  methods: {
    logoutUser() {
      const { logout } = useStrapiAuth();
      this.$router.push("/login");
      logout();
    },
  },
  async mounted() {
    const { fetchUser } = useStrapiAuth();

    const user = await fetchUser();
    console.log(user);
    this.person = user;
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
