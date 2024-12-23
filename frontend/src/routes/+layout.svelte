<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<header class="top-0 bg-maindark-500 h-14 px-4 py-4 z-10">
    <div class="flex items-center justify-between">
        <aside>YLauncher</aside>
        <button>Client</button>
        <button>Profile</button>
    </div>
</header>

<main class="bg-maindark-700 p-4 space-y-4 grow flex flex-col">
    <div class="card p-4 h-3 grow">
        {@render children()}
    </div>
</main>
