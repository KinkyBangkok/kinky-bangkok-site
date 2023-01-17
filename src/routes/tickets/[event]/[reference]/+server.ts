import { PRIVATE_SUPABASE_ADMIN_KEY } from '$env/static/private';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (e) => {
	const supabase = createClient(PUBLIC_SUPABASE_URL, PRIVATE_SUPABASE_ADMIN_KEY);

	const result = await supabase
		.from('ticket')
		.select()
		.eq('reference', e.params.reference)
		.eq('event_name', e.params.event);

	if (result.error) throw error(404, { message: 'Event not found' });
	if (result.data.length === 0) throw error(404, { message: 'Event not found' });

	const ticket = result.data[0];

	//Remove the person for Privacy purposes
	return json({ ...ticket, person: undefined });
};
