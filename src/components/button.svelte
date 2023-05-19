<script>
	import { goto } from '$app/navigation';

	export let path = '';
	export let content = '';
	export let idValue = '';

	function headToPage(path) {
		goto(path, true)
	}
</script>

<button id={idValue} on:click={headToPage(path)}>{content}</button>
