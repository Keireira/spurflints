export interface PushProps {
	id?: number;
	removePush?: (pushId: number) => void;
	title?: string;
	children?: any;
}
