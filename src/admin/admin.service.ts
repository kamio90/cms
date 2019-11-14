import { Injectable } from '@nestjs/common';

/**
 * Injectable service for admin routes controller
 */
@Injectable()
export class AdminService {
    /**
     * Finds all admin fields in database
     * @returns all admin fields in database as JSON object
     */
    findAll(): string {
        return 'aa';
    }

    /**
     * Finds admin field
     * @param param string
     * @returns one admin field as JSON object
     */
    find(param: string): string {
        return param;
    }

    /**
     * Adds admin field to database
     * @param body JSON object
     * @returns one admin field that is created as JSON object
     */
    add(body: object): object {
        return body;
    }
}
