declare type DndEvent = import('svelte-dnd-action').DndEvent;
declare namespace svelte.JSX {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface HTMLAttributes<T> {
		onoutclick?: () => void;
	}
}

declare interface Window {
	initMap: () => void;
}
