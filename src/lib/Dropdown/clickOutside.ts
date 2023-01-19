export function clickOutside(node: HTMLElement): SvelteActionReturnType {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as HTMLElement)) {
			node.dispatchEvent(new CustomEvent<void>('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		},
	};
}
