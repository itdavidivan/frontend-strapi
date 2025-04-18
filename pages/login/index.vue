<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit" class="login-form">
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
      <button type="submit" class="submit-btn">Login</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>
    <p v-else-if="message" class="message">{{ message }}</p>
    <p>
      <nuxt-link to="/register" class="register-link">Register</nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null as string | null,
      message: null as string | null, // Set to null initially
    };
  },
  methods: {
    async handleSubmit(): Promise<void> {
      try {
        // Send login request via API
        const response = await axios.post<{ jwt: string }>(
          "https://strapi-app-3so9.onrender.com/api/auth/local",
          {
            identifier: this.email,
            password: this.password,
          }
        );

        // Assuming the response contains a JWT token, extract it
        const jwt = response.data.jwt;

        // Store the token in localStorage or sessionStorage
        localStorage.setItem("jwt", jwt); // or sessionStorage.setItem('authToken', token);

        // Redirect to profile page
        this.$router.push("/");

        // Set the success message
        this.message = "Login successful!";
        this.error = null;
      } catch (error: unknown) {
        // Handle any errors that occurred during login
        if (axios.isAxiosError(error)) {
          this.error =
            error.response?.data?.message[0]?.messages[0]?.message ||
            "An error occurred during login.";
        } else {
          this.error = "An unexpected error occurred.";
        }
        this.message = null; // Clear success message if an error occurs
      } finally {
        // Clear form fields after submission
        this.email = "";
        this.password = "";
      }
    },
  },
};
</script>

<style scoped>
/* Main container styling */
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Heading styling */
h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
}

/* Form styling */
.login-form {
  display: flex;
  flex-direction: column;
}

/* Input group styling */
.input-group {
  margin-bottom: 1.2rem;
  text-align: left;
}
a {
  text-decoration: none;
  color: white;
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
  width: -webkit-fill-available;
}

.submit-btn:hover {
  background-color: #0056b3;
}

/* Message styling */
.message {
  color: green;
  margin-top: 1em;
}

.error {
  color: red;
  margin-top: 1em;
}
.register-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  display: inline-block;
  padding: 12px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border-radius: 5px;
  width: -webkit-fill-available;
}
.register-link:hover {
  background-color: #0056b3;
}
</style>
