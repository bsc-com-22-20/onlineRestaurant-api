import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenusService } from './menus.service';

@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}
  @Get()
  // localhost:3000/menus
  getMenus() {
    return this.menusService.fetchMenus();
  }

  @Post()
  // localhost:3000/menus
  addMenuItem(@Body() menu) {
    return this.menusService.createMenu(menu);
  }
}
