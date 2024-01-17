import { Post } from "$lib/server/db.js"

export async function load() {
    await Post.sync()
    const postsModel = await Post.findAll()
    let posts = []

    postsModel.forEach(model => posts = [...posts, model.toJSON()])
    console.table(posts)
    return {
        posts: posts
    }
}

