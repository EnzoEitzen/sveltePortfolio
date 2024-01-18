<script>
    export let title;
    export let body;
</script>


<div class="justify-center bg-cyan-900 rounded-2xl text-slate-100 text-wrap break-all">
    <div class="m-2 flex justify-between">
        <h1 class="text-xl m-1">{title}</h1>
        <h2 class="text-base m-2"></h2>
    </div>
    <hr/>
    <article class="m-3">
        <p class="text-sm">{body}</p>
    </article>
</div>
