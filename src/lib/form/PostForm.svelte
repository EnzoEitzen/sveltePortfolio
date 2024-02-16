<script>
    import PostBodyInput from "$lib/form/Form Comps/PostBodyInput.svelte";
    import TitleInput from "$lib/form/Form Comps/TitleInput.svelte";
    import UserNameInput from "$lib/form/Form Comps/UserNameInput.svelte";
    import FormSubmitButtonGroup from "$lib/form/Form Comps/FormSubmitButtonGroup.svelte";

    export let userInput = "", titleInput = "", bodyInput = "", button, action = "";

</script>

<form class="space-x-9 mx-10" method="post" action="{action}">
    <div class="space-y-12">
        <div class="border-gray-300" class:border-b={button} class:pb-6={button}>
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <UserNameInput {userInput}/>
                <TitleInput {titleInput}/>
                <PostBodyInput {bodyInput}>
                    <slot name="textArea"/>
                </PostBodyInput>
            </div>
        </div>
        <slot/>
    </div>


    {#if button === true}
        <FormSubmitButtonGroup/>
    {/if}
</form>