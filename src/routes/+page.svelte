<style lang="postcss">

</style>

<script>
    export let data
</script>


<form id="CreateForm" class="container mt-5" method="post" action="/create">
    <div class="row">
        <div class="input-group mb-3 col">
            <input name="user" type="text" class="form-control" placeholder="Username" aria-label="Username" required>
        </div>
        <div class="input-group mb-3 col">
            <input name="title" type="text" class="form-control" placeholder="Title" aria-label="Title" required>
        </div>
    </div>
    <div class="row mb-3">
        <div class="input-group col">
            <label for="postBody" class="input-group-text">Post:</label>
            <textarea name="postBody" class="form-control" aria-label="Post Body" required></textarea>
        </div>
    </div>
    <div class="btn-group">
        <button id="#submitButton" type="submit" class="btn btn-primary">Confirm</button>
        <button type="reset" class="btn btn-primary">Cancel</button>
    </div>
</form>
