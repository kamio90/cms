import { UserInterface } from './user.interface';

export interface RoleInterface {
    _id: string;
    role: string;
    active: boolean;
    userRef: UserInterface;
    createdAt: string;
    updatedAt: string;
}
