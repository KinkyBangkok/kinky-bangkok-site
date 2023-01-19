import type { Session } from '@supabase/supabase-js';
import { derived, writable } from 'svelte/store';
import { supabase } from './SupabaseClient';

export const session = writable<Session>();

supabase.auth.onAuthStateChange((event, sbSession) => {
	console.log('Session set', event, sbSession);
	session.set(sbSession);
});

export const user = derived(session, ($session) => {
	return $session?.user || null;
});

export const loginState = derived(user, ($user) => {
	if ($user === undefined) return LoginState.UNKNOWN;
	if ($user === null) return LoginState.NOT_LOGGED_IN;
	return LoginState.LOGGED_IN;
});

export const token = derived(session, ($session) => {
	return $session.access_token;
});

export enum LoginState {
	UNKNOWN = 'unknown',
	NOT_LOGGED_IN = 'not-logged-in',
	LOGGED_IN = 'logged-in'
}

(async () => {
	const result = await supabase.auth.getSession();
	if (result.data.session) {
		session.set(result.data.session);
	}
})();
