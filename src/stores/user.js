import { writable, Writable } from "svelte/store";

const user = writable({ userName: null, jwt: '1' });

export default user;