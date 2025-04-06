export const useStrapi = () => {
  const config = useRuntimeConfig(); // Získať runtime config
  const apiBase = config.public.apiBase; // Získať základnú URL Strapi API

  // Funkcia na načítanie dát zo Strapi
  const fetchStrapi = async (endpoint: string) => {
    try {
      const res = await fetch(`${apiBase}/api/${endpoint}`); // Opravená interpolácia
      if (!res.ok) {
        throw new Error(`Chyba: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Chyba pri načítaní z Strapi:", err);
      return null;
    }
  };

  return { fetchStrapi };
};
