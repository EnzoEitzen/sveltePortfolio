<script>
    import PostForm from "$lib/form/PostForm.svelte";
</script>

<PostForm button={true}>
    <p class="mt-3 text-sm leading-6 selection:bg-slate-400" slot="textArea">
        Write a few sentences about your day.
    </p>
</PostForm>

