import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Request } from 'express';

/**
 * Controller that operate /admin routes
 */
@Controller('admin')
export class AdminController {
    /**
     * Creates an instance of admin controller.
     * @param adminService
     */
    constructor(private readonly adminService: AdminService) {}

    /**
     * Gets admin controller
     * @returns all admin fields in database as JSON object
     */
    @Get()
    findAll(): string {
        return this.adminService.findAll();
    }

    /**
     * Gets admin controller
     * @param request as params in page url
     * @returns find one admin with specify name as JSON object
     */
    @Get('/:name')
    find(@Req() request: Request): string {
        return this.adminService.find(request.params.name);
    }

    /**
     * Posts admin controller
     * @param request takes JSON object
     * @returns  created admin field as JSON object
     */
    @Post()
    add(@Body() body: Request) {
        return this.adminService.add(body);
    }
}
