<template>
  <div class="register-container">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit" class="register-form">
      <div class="input-group">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          required
          placeholder="Enter your username"
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          required
          placeholder="Enter your email"
        />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" class="submit-btn">Register</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-else-if="message" class="message">
      {{ message }}

      <nuxt-link to="/login" class="submit-btn">Login</nuxt-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      error: null,
      message: null,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "https://strapi-app-3so9.onrender.com/api/auth/local/register",
          {
            username: this.username,
            email: this.email,
            password: this.password,
          }
        );
        console.log(response.data.jwt);
        this.message = "Registration successful!";
        this.error = null;
        this.username = ""; // Clear form fields
        this.email = "";
        this.password = "";
        // this.$router.push("/loginuser"); // Redirect to the login page after successful registration
      } catch (error) {
        this.error = error.response.data.message[0].messages[0].message;
        this.message = null;
      }
    },
  },
};
</script>

<style scoped>
/* Main container styling */
.register-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}
a {
  text-decoration: none;
  color: white;
}
/* Heading styling */
h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Form styling */
.register-form {
  display: flex;
  flex-direction: column;
}

/* Input group styling */
.input-group {
  margin-bottom: 1.2rem;
  text-align: left;
}

.input-group label {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.input-group input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  transition: border 0.3s ease;
}

.input-group input:focus {
  outline: none;
  border: 1px solid #007bff;
}

/* Submit button styling */
.submit-btn {
  padding: 12px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Error message styling */
.error {
  color: red;
  margin-top: 1em;
  font-size: 0.9rem;
}
.message {
  color: green;
  margin-top: 1em;
  font-size: 1.3rem;
  font-weight: bold;
  display: grid;
  gap: 20px;
}
</style>
