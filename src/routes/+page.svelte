<script>
    import Icon from "$lib/Icon/Icon.svelte";
    export let data;

</script>

<h1>Icon test</h1>

<p>Go to <a href="/one/two">/one/two</a> to view a page where the icon is not working</p>

<p>There should also be an arrow-right here:</p>

<Icon icon="arrow-right"></Icon>

{data.foo}
