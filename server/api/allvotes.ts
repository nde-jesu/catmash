import { Cat } from '~/server/models/cat';

import { CatMongo } from '~/types/cat'

export default defineEventHandler (async () => {
    const statsCats: CatMongo[] = await Cat.find();

    return statsCats.reduce((acc, curr) => acc + curr.votes, 0);
})