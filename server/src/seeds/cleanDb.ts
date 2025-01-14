import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    const modelDb = models[modelName]?.db?.db;

    if (modelDb?.listCollections) {
      const modelExists = await modelDb.listCollections({ name: collectionName }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      console.warn(`Model database or listCollections method is undefined for model: ${modelName}`);
    }
  } catch (err) {
    throw err;
  }
};
