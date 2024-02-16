<script>
    import {quintOut} from "svelte/easing";
    import {slide} from "svelte/transition";
    import Modal from "../Edit Post Popup/Modal.svelte";
    let showModal = false;
    export let userInput = "", titleInput = "", bodyInput = "", id;
</script>

<style>
    #mobile-menu {
        transform: translateX(-63.2%);
    }
    :global(*) {
        color: theme(colors.gray.300);
    }
</style>

<Modal bind:showModal {userInput} {titleInput} {bodyInput} {id}>
    <h2 slot="header">
        Edit Post - id: {id}
    </h2>

</Modal>


<div class="bg-gray-800 z-10 absolute text-nowrap rounded-md" id="mobile-menu"
     transition:slide={{ delay: 0, duration: 200, easing: quintOut, axis: 'y' }}>
    <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <button on:click={() => (showModal = true)}
                class=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
            Edit Post
        </button>
        <form method="POST" action="?/delete">
            <input name="id" type="hidden" value={id}>
            <button
                    class=" hover:bg-red-500 hover:text-white block rounded-md px-3 py-2 text-base font-medium size-full">
                Delete
            </button>
        </form>
    </div>
</div>