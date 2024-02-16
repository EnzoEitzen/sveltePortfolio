<script>
    export let titleInput = "";
</script>

<div class="sm:col-span-3">
    <label for="title" class="block text-sm font-medium leading-6 selection:bg-slate-400">Post
        Title</label>
    <div class="mt-2">
        <input type="text" name="title" id="title" autocomplete="off" value={titleInput}
               class="caret-indigo-500 bg-gray-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6">
    </div>
</div>