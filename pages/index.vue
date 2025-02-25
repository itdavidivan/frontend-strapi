<template>
  <div class="home-container">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="overlay">
        <h1>Vitajte v našom E-shope</h1>
        <p>Objavte najnovšie produkty a výnimočné ponuky</p>
        <div class="cta-buttons">
          <nuxt-link to="/cars" class="cta-button">Pozrieť produkty</nuxt-link>
          <nuxt-link to="/login" class="cta-button login-btn"
            >Prihlásiť sa</nuxt-link
          >
          <nuxt-link to="/register" class="cta-button register-btn"
            >Registrovať sa</nuxt-link
          >
          <nuxt-link to="/orders" class="cta-button orders-btn"
            >Objednávka</nuxt-link
          >
        </div>
      </div>
    </header>

    <!-- Categories Section -->
    <section class="categories">
      <div class="category-card">
        <h2>Elektronika</h2>
        <p>Objavte najnovšie technologické novinky</p>
        <nuxt-link to="/electronics" class="category-link"
          >Zobraziť kategóriu</nuxt-link
        >
      </div>

      <div class="category-card">
        <h2>Móda</h2>
        <p>Štýlové kúsky pre každú príležitosť</p>
        <nuxt-link to="/fashion" class="category-link"
          >Zobraziť kategóriu</nuxt-link
        >
      </div>

      <div class="category-card">
        <h2>Domácnosť</h2>
        <p>Všetko, čo potrebujete pre váš domov</p>
        <nuxt-link to="/home" class="category-link"
          >Zobraziť kategóriu</nuxt-link
        >
      </div>
    </section>

    <!-- Special Offers Section -->
    <section class="special-offers">
      <h2>Špeciálne ponuky</h2>
      <div class="offer-card">
        <h3>Exkluzívne zľavy!</h3>
        <p>Ušetrite až 50% na vybraných produktoch.</p>
        <nuxt-link to="/offers" class="offer-link">Pozrieť ponuky</nuxt-link>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>&copy; 2025 Váš E-shop. Všetky práva vyhradené.</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-container {
  font-family: "Arial", sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

.hero-section {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 100px 100px;
  position: relative;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

.hero-section p {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-button {
  background-color: #f39c12;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #e67e22;
}

.login-btn {
  background-color: #3498db;
}

.login-btn:hover {
  background-color: #2980b9;
}

.register-btn {
  background-color: #27ae60;
}

.register-btn:hover {
  background-color: #2ecc71;
}
.orders-btn {
  background-color: #c0392b;
}

.orders-btn:hover {
  background-color: #e74c3c;
}

.categories {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  gap: 30px;
}

.category-card {
  background-color: #ecf0f1;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  transition: transform 0.3s;
}

.category-card:hover {
  transform: translateY(-10px);
}

.category-card h2 {
  font-size: 2rem;
  color: #2c3e50;
}

.category-card p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.category-link {
  text-decoration: none;
  color: #3498db;
  font-weight: bold;
  margin-top: 20px;
  display: inline-block;
}

.category-link:hover {
  text-decoration: underline;
}

.special-offers {
  background-color: #f5f5f5;
  padding: 50px;
  text-align: center;
}

.offer-card {
  background-color: #fff;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  width: 45%;
  margin-top: 20px;
}

.offer-link {
  display: inline-block;
  margin-top: 15px;
  text-decoration: none;
  color: #e74c3c;
  font-weight: bold;
  transition: color 0.3s;
}

.offer-link:hover {
  color: #c0392b;
}

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 50px;
}
</style>
