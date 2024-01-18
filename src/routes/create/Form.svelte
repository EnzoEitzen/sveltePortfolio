<style lang="postcss">
</style>

<form class="space-x-9 mx-32" method="post">
    <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="user" class="block text-sm font-medium leading-6 text-gray-100 selection:bg-slate-400">UserName</label>
                    <div class="mt-2">
                        <input type="text" name="user" id="first-name"
                               class="caret-indigo-500 bg-gray-950 block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="sm:col-span-3">
                    <label for="title" class="block text-sm font-medium leading-6 text-gray-100 selection:bg-slate-400">Post Title</label>
                    <div class="mt-2">
                        <input type="text" name="title" id="last-name"
                               class="caret-indigo-500 bg-gray-950 block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="body" class="block text-sm font-medium leading-6 text-gray-100 selection:bg-slate-400">Post Body</label>
                    <div class="mt-2">
                        <textarea id="about" name="body" rows="3"
                                  class=" caret-indigo-600 bg-gray-950 block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <p class=" mt-3 text-sm leading-6 text-gray-100 selection:bg-slate-400">Write a few sentences about your day.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
        <button on:submit|preventDefault type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        <button type="reset" class="text-sm font-semibold leading-6 text-gray-100">Cancel</button>
    </div>
</form>

