import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(``);
  if (res.status !== 200) {
    throw error(res.status, await res.json());
  }
	const ticket = await res.json();
	return { ticket };
};
