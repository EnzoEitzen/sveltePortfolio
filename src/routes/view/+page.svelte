<script>
    import BlogPost from "./Post/BlogPost.svelte";
    import BlogLayout from "./Post/BlogLayout.svelte";
    import {writable} from "svelte/store";

    export let data

    const toggled = writable(null);
</script>

{#if data.posts.length > 0}
    <BlogLayout>
        {#each data.posts as post}
            <BlogPost title={post.title} body={post.body} id={post.id} toggled={toggled}/>
        {/each}
    </BlogLayout>
{:else}
    <h1 class="text-center text-6xl mt-28 select-none">Im sorry but there are no posts available 🥹</h1>
{/if}