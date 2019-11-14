import { PageInterface } from './page.interface';
import { PictureInterface } from './picture.interface';
import { ElementInterface } from './element.interface';

export interface PostInterface {
    _id: string;
    name: string;
    title: string;
    description: string;
    modify: boolean;
    pageRef: PageInterface;
    pictureRef: PictureInterface;
    elementRef: ElementInterface;
    createdAt: string;
    updatedAt: string;
}
