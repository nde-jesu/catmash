import { Cat } from '~/server/models/cat';

export default defineEventHandler (async event => {
    const { id } = getQuery(event);
    await Cat.updateOne({ id }, { $inc: { votes: 1 } }, { upsert: true });
})

