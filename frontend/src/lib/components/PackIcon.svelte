<script lang="ts">
    import type {Pack} from "$lib/index.server";

    export let pack: Pack;
</script>
<button class="card p-2 w-fit h-fit hover:cursor-pointer">
    <img src={pack.icon} alt={pack.name} width="128" height="128" />
    <p class="text-center">{pack.name}</p>
</button>