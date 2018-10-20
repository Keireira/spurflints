export type Push = {
	id?: number;
	title?: string;
	body?: string;
}

export interface RootProps {

}

export interface RootState {
	emboss: string;
	pushes: Push[];
}
