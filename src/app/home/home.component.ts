import { Component, OnInit } from '@angular/core';

interface SubMenu {
    icon: string;
    menuname: string;
    url: string;

}

interface MenuList {
    icon: string;
    menuname: string;
    url?: string;
    submenuVisible?: boolean;
    submenu?: Array<SubMenu>;
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    menubar: boolean;
    menuList: Array<MenuList>;
    selectedMenu: MenuList;
    constructor() {
        this.menubar = false;
        this.menuList = [
            {
                icon: 'assets/icons/dashboard.svg', menuname: 'Dashboard', url: 'dashboard'
            },
            {
                icon: 'assets/icons/emp-detail.svg', menuname: 'Employee Details', url: 'employee-details'
            },
            {
                icon: 'assets/icons/cleint-detail.svg', menuname: 'Cleint Deails', url: 'cleint-details'
            },
            {
                icon: 'assets/icons/project-detail.svg', menuname: 'Project Details', url: 'project-details'
            },
            {
                icon: 'assets/icons/mapping.svg', menuname: 'Employee/Project Mapping', url: 'employee/project-mapping'
            },
            {
                icon: 'assets/icons/report.svg', menuname: 'Reports', submenu: [
                    {
                        icon: 'assets/icons/emp-report.svg', menuname: 'Employeee Hours Report', url: 'reports/employee-hours-report'
                    },
                    {
                        icon: 'assets/icons/proj-report.svg', menuname: 'Project Hours Report', url: 'reports/project-hours-report'
                    }
                ]
            }

        ];
    }

    ngOnInit(): void {

    }
    selectMenu(menu: MenuList, i) {
        this.selectedMenu = {
            icon: menu.icon,
            menuname: menu.menuname,
            url: menu.url
        };
        this.menuList[i].submenuVisible = !this.menuList[i].submenuVisible;
        if (menu.submenu && !this.menubar) {
            this.menubar = true;
            this.menuList[i].submenuVisible = true;
        }
    }
    submenuBackground(submenu, ind) {
        if (this.selectedMenu) {
            if (this.selectedMenu.submenu === submenu) {
                return true;
            }
        } else {
            return false;
        }
    }
    selectSubmenu(submenu, menu) {
        this.selectedMenu = {
            icon: menu.icon,
            menuname: menu.menuname,
            url: menu.url
        };
        this.selectedMenu.submenu = submenu;
    }
    menuBackground(menu, i) {
        if (this.selectedMenu) {
            if (this.selectedMenu.menuname === menu.menuname && this.selectedMenu.menuname === this.menuList[i].menuname) {
                return true;
            }
        } else {
            return false;
        }
    }
}



