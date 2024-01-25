import { Sequelize } from "sequelize";
import models from "../models";
import configFile from "../config/";

const env = process.env.NODE_ENV || "development";
const config = configFile[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {
  sequelize,
  models: models(sequelize),
};
export default db;
