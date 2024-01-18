import { Post } from "$lib/server/db.js"

export async function load() {
    await Post.sync()
}

export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        let formEntries = []    // change so that it saves to database
        for (const key of data.entries()) {
            formEntries = [...formEntries, key]
        }
        await Post.create({title: formEntries[1][1], body: formEntries[2][1]})
    }
};
