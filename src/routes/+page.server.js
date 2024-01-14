import {error} from '@sveltejs/kit';
import {Sequelize, Op, Model, DataTypes} from "sequelize";

/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    const sequelize = new Sequelize("postgres://postgres:Darrrrrr01!@localhost:3000/Blog")

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    const Post = sequelize.define('post', {
        // Model attributes are defined here
        PostID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrementIdentity: true
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    await Post.sync()

    const posts = await Post.findAll()

    let jsonData = {
        rows: []
    }

    posts.forEach((params) => {
        jsonData.rows = [...jsonData.rows, params.toJSON()]
    })

    // console.log(jsonData)

    await sequelize.close()

    return {
        countries: jsonData
    }
}