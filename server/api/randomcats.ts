import allCats from '~/assets/cats';

export default defineEventHandler (async () => {
    return allCats.sort(() => 0.5 - Math.random()).slice(0, 2);
})