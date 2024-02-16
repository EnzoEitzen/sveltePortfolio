<script>
    import PostForm from "$lib/form/PostForm.svelte";

    export let userInput = "", titleInput = "", bodyInput = "", id;
    export let showModal; // boolean

    let dialog; // HTMLDialogElement

    $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
        bind:this={dialog}
        on:close={() => (showModal = false)}
        on:click|self={() => dialog.close()}
        class="bg-gray-800"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation>
        <slot name="header"/>
        <hr/>
        <PostForm {userInput} {titleInput} {bodyInput} action="?/edit">
            <hr style="margin-top: 1.5rem"/>
            <!-- svelte-ignore a11y-autofocus -->
            <input name="id" type="hidden" value={id}>
            <div class="flex gap-3 justify-center" style="margin-top: 1.5rem">
                <button type="submit"
                        class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-gray-900"
                        autofocus on:click={() => dialog.close()}>Save Edit
                </button>
                <button type="button"
                        class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium bg-gray-900"
                        on:click={() => dialog.close()}>Close Edit
                </button>
            </div>
        </PostForm>
    </div>
</dialog>

<style>
    dialog {
        max-width: 32em;
        border-radius: 0.2em;
        border: none;
        padding: 0;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }

    dialog > div {
        padding: 1em;
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }

    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    button {
        display: block;
    }
</style>
