<script>
    import {createEventDispatcher} from "svelte";
    import ConfigMenu from "../Config Menu/ConfigMenu.svelte";
    import ConfigButton from "../Config Menu/ConfigButton.svelte";
    import Modal from "../Edit Post Popup/Modal.svelte";

    export let title, body, id, name = "", toggled;
    let visible = false;
    const dispatch = createEventDispatcher();

    $: visible = $toggled === id;

    function toggle() {
        visible = !visible;
        if (visible) {
            toggled.set(id); // set the store to the current id
        } else {
            toggled.set(null); // reset the store to null
        }
        dispatch("toggle", {id, visible}); // emit the custom event
    }
</script>

<div class="justify-center bg-cyan-900 rounded-md text-wrap break-all">
    <div class="m-2 flex justify-between">
        <h1 class="text-xl m-1">{id} - {title}</h1>
        <div>
            <ConfigButton on:toggle={toggle}/>
            {#if visible}
                <ConfigMenu {id} userInput={name} titleInput={title} bodyInput={body}/>
            {/if}
        </div>
    </div>
    <hr/>
    <article class="m-3">
        <p class="text-sm">{body}</p>
    </article>
</div>
