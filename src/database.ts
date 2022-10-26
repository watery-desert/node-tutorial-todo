import { MongoClient, Db } from 'mongodb';

export class Database {
  private static mongoClient: MongoClient;

  private constructor() {}

  static async initilize() {
    this.mongoClient = await MongoClient.connect(
      'mongodb+srv://ahmed:saap4OmaiWVBi6kR@cluster0.v3mqsv3.mongodb.net/todo?retryWrites=true&w=majority'
    );
  }

  static getDb() {
    return this.mongoClient.db();
  }
}
