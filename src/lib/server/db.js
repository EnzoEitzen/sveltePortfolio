import {Sequelize, DataTypes} from "sequelize";
import { url } from "$lib/url.json"

const sequelize = new Sequelize(url)

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export const Post = sequelize.define('post', {
    // Model attributes are defined here
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

export let allPosts = []