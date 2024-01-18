<script>
    import BlogPost from "./BlogPost.svelte";
    import BlogLayout from "./BlogLayout.svelte";

    export let data
</script>

<BlogLayout>
    {#each data.posts as post}
        <BlogPost title={post.title} body={post.body}/>
    {/each}
</BlogLayout>