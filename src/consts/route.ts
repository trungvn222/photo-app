export const HOME_ROUTE = {
	path: "/",
	create: (): string => "/",
};
export const PHOTO_ROUTE = {
	path: "/photo/:id",
	create: (id: string): string => `/photo/${id}`,
};
