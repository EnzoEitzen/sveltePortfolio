<script>
    export let bodyInput = ""
</script>

<div class="col-span-full">
    <label for="body" class="block text-sm font-medium leading-6 selection:bg-slate-400">Post Body</label>
    <div class="mt-2">
        <textarea id="about" name="body" rows="3" autocomplete="off"
                  class="caret-indigo-600 bg-gray-950 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6">
            {bodyInput}
        </textarea>
    </div>
    <slot/>
</div>