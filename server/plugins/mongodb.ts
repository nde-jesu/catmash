import { Nitro } from 'nitropack';
import mongoose from 'mongoose';

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();

    await mongoose.connect(config.mongoUrl);
};