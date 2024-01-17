<script>
    import BlogPost from "./BlogPost.svelte";

    export let data
</script>

{#each data.posts as post}
    <BlogPost title={post.title} body={post.body}/>
{/each}