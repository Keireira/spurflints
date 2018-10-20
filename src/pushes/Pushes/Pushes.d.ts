import { Push } from '../../Root/Root.d'

export interface PushesProps {
	pushes: Push[];
	removePush: (pushId: number) => void;
}
