<template>
  <div class="car-list">
    <h1 class="title">Cars</h1>
    <div class="wrapper">
      <div class="car-container" v-for="car in cars" :key="car.id">
        <div class="car-card">
          <h2 class="car-name">{{ car.name }}</h2>
          <h3 class="car-description">{{ car.description }}</h3>
          <h4 class="car-price">{{ car.price }}$</h4>
          <img :src="car.picture" alt="Car image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Car } from "~/types";
import axios from "axios";

export default {
  data() {
    return {
      cars: [] as Car[], // Pole pre ukladanie automobilov
    };
  },
  async mounted() {
    try {
      // Zavolanie Strapi API cez axios
      const response = await axios.get(
        "https://strapi-app-3so9.onrender.com/api/cars"
      ); // Zmeň URL na tvoje Strapi API URL
      this.cars = response.data.data; // Nastavenie získaných dát do premennej cars
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  },
};
</script>

<style scoped>
/* General styles */
img {
  max-width: 300px;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  gap: 50px;
}
.car-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
}

.title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.car-container {
  display: grid;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
}

.car-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.car-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.car-name {
  font-size: 1.5rem;
  color: #333;
  font-weight: 600;
  margin: 10px 0;
}

.car-description {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin: 10px 0;
}

.car-price {
  font-size: 1.25rem;
  color: #2d6a4f;
  font-weight: 600;
  margin-top: 10px;
}

/* Optional: Responsive design tweaks */
@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .car-card {
    padding: 15px;
  }

  .car-name {
    font-size: 1.3rem;
  }

  .car-price {
    font-size: 1.1rem;
  }
}
</style>
