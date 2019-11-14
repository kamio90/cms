import { PageInterface } from './page.interface';

export interface ElementInterface {
    _id: string;
    name: string;
    title: string;
    pageRef: PageInterface;
    createdAt: string;
    updatedAt: string;
}
