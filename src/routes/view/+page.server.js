import { Post } from "$lib/server/db.js"

export async function load() {
    await Post.sync()
    const postsModel = await Post.findAll()
    let posts = []

    postsModel.forEach(model => posts = [...posts, model.toJSON()])
    // console.table(posts)
    return {
        posts: posts
    }
}

export const actions = {
    edit: async ({request}) => {
        const data = await request.formData()
        let formEntries = []
        for (const key of data.entries()) {
            formEntries = [...formEntries, key]
        }
        // formEntries[1][1]
        // formEntries[2][1]
        // formEntries[3][1]
        await Post.update({ title: formEntries[1][1], body: formEntries[2][1] }, {
            where: {
                id: formEntries[3][1]
            }
        });
    },
    delete: async ({request}) => {
        const data = await request.formData()
        let formEntries = []
        for (const key of data.entries()) {
            formEntries = [...formEntries, key]
        }
        await Post.destroy({
            where: {
                id: formEntries[0][1]
            }
        })
    }
};

