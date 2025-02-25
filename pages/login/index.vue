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

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
      message: null, // Set to null initially
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "http://localhost:1337/api/auth/local", // Login endpoint
          {
            identifier: this.email, // Use 'identifier' instead of 'email' in Strapi login API
            password: this.password,
          }
        );

        // On successful login, show the success message and reset error
        this.message = "Prihlásenie bolo úspešné";
        this.error = null; // Clear error if login is successful
        this.$router.push("/cars");
      } catch (error) {
        // If error occurs, show the error message
        this.error = "Nesprávne meno alebo heslo.";
        this.message = null; // Clear success message if there's an error
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
