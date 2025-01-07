import { CatJson, CatMongo } from '~/types/cat'
import { Cat } from '~/server/models/cat';

import allCats from '~/assets/cats';

export default defineEventHandler (async event => {
    const { page } = getQuery(event);
    const statsCats: CatMongo[] = await Cat.find();

    return allCats.map((cat: CatJson) => {
        const stats = statsCats.find(c => c.id === cat.id);

        return {
            ...cat,
            votes: stats?.votes || 0
        };
    }).sort((a, b) => b.votes - a.votes);
})