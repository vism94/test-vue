import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
    state: () => ({
        results: [] as any[],
    }),
    actions: {
        async fetchResults(query: string) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
            const data = await response.json();
            this.results = data;
        }
    }
});
