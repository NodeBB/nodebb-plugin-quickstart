declare module 'settings' {
	export function save(hash: string, formEl: JQuery, callback?: () => void): void;
	export function load(hash: string, formEl: JQuery, callback?: () => void): void;
}

declare module 'uploader' {
	export function show(data: {
		route: string,
		params: {
			folder: string
		},
		accept: string,
	}, callback?: (image: string) => void): void;
}