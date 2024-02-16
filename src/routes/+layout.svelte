<style lang="postcss">
    :global(html) {
        background-color: theme(colors.slate.900);
        color: theme(colors.gray.300);
    }
</style>

<script>
    import {slide} from 'svelte/transition';
    import {quintIn} from 'svelte/easing';
    import {page} from '$app/stores';
    import "../app.css";

    let toggle = false;

    let activePage = {
        main: false,
        view: false,
        create: false
    }

    $: switch ($page.url.pathname) {
        case "/":
            activePage.main = !activePage.main
            activePage.create = false
            activePage.view = false
            break
        case "/create":
            activePage.main = false
            activePage.create = !activePage.create
            activePage.view = false
            break
        case "/view":
            activePage.main = false
            activePage.create = false
            activePage.view = !activePage.view
            break
    }

</script>


<div class="min-h-full">
    <nav class="">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-800" class:rounded-b-md={!toggle}>
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                             alt="Your Company">
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <!--                             Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"-->
                            <a href="/" class:bg-gray-900={activePage.main}
                               class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Main
                                Menu</a>
                            <a href="/create" class:bg-gray-900={activePage.create}
                               class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Create
                                Posts</a>
                            <a href="/view" class:bg-gray-900={activePage.view}
                               class="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">View
                                Posts</a>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <button type="button" on:click={()=> {toggle = !toggle}}
                            class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!-- Menu open: "hidden", Menu closed: "block" -->
                        <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                        <!-- Menu open: "block", Menu closed: "hidden" -->
                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        {#if toggle}
            <div class="md:hidden bg-gray-800" id="mobile-menu"
                 transition:slide={{ delay: 0, duration: 200, easing: quintIn, axis: 'y' }}>
                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <a href="/" class:bg-gray-900={activePage.main}
                       class="hover:text-white block rounded-md px-3 py-2 text-base font-medium">Main Menu</a>
                    <a href="/create" class:bg-gray-900={activePage.create}
                       class="hover:text-white block rounded-md px-3 py-2 text-base font-medium">Create</a>
                    <a href="/view" class:bg-gray-900={activePage.view}
                       class="hover:text-white block rounded-md px-3 py-2 text-base font-medium">View</a>
                </div>
            </div>
        {/if}
    </nav>

    <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <slot/>
        </div>
    </main>
</div>

