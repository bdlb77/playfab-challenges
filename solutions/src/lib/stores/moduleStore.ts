import type { Module } from "$lib/api/data";
import { writable } from "svelte/store";

const modules: Module[] = [];
const moduleStore = writable(modules)

export default moduleStore
