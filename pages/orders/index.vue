<template>
  <div class="order-form">
    <h1 class="title">Place Your Order</h1>
    <form @submit.prevent="postingOrders" class="form-container">
      <div class="input-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          placeholder="Enter your name"
          required
        />
      </div>
      <div class="input-group">
        <label for="surname">Surname</label>
        <input
          v-model="surname"
          type="text"
          id="surname"
          placeholder="Enter your surname"
          required
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="input-group">
        <label for="mobile">Mobile</label>
        <input
          v-model="mobile"
          type="text"
          id="mobile"
          placeholder="Enter your mobile number"
          required
        />
      </div>
      <div class="input-group">
        <label for="country">Country</label>
        <input
          v-model="country"
          type="text"
          id="country"
          placeholder="Enter your country"
          required
        />
      </div>
      <div class="input-group">
        <label for="product">Product</label>
        <input
          v-model="product"
          type="text"
          id="product"
          placeholder="Enter the product you want"
          required
        />
      </div>
      <button type="submit" class="submit-button">Order Now</button>
      <p v-if="message" class="success-message">{{ message }}</p>
    </form>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      mobile: "",
      country: "",
      product: "",
      message: "",
    };
  },
  methods: {
    async postingOrders() {
      const response = await axios.post("http://localhost:1337/api/orders", {
        data: {
          name: this.name,
          surname: this.surname,
          email: this.email,
          mobile: this.mobile,
          country: this.country,
          product: this.product,
        },
      });
      this.message = "Order placed successfully!";
      this.name = ""; // Clear form fields
      this.surname = "";
      this.email = "";
      this.mobile = "";
      this.country = "";
      this.product = "";
      // Handle success or error here (e.g., show confirmation or alert)
    },
  },
};
</script>

<style scoped>
/* General styles */
.order-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f4f6f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.form-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
}

input {
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #4caf50;
}

button {
  padding: 15px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

button:hover {
  background-color: #45a049;
}
.success-message {
  margin-top: 20px;
  color: #4caf50;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}

/* Responsive styling */
@media (max-width: 600px) {
  .order-form {
    padding: 20px;
  }

  .title {
    font-size: 1.75rem;
  }

  input {
    font-size: 0.9rem;
    padding: 10px;
  }

  button {
    font-size: 1rem;
    padding: 12px;
  }
}
</style>
