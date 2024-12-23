<script lang="ts">
import PackIcon from "./PackIcon.svelte";
import Luce from "$lib/assets/luce.png"
import type {Pack} from "$lib/index.server";

let TestPacks: Pack[] = [];
for(let i = 0; i < 20; i++){
    TestPacks.push({
        icon: Luce,
        name: `Pack ${i}`
    });
}
export let Packs: Pack[] = TestPacks;
</script>

<div class="flex-grow grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] auto-rows-min gap-3 py-3 justify-between overflow-y-scroll">
    {#each Packs as pack}
        <PackIcon pack={pack}/>
    {/each}
</div>