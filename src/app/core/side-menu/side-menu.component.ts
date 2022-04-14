import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../app/shared/services/authentication.service';
import { UserType } from '../../shared/model/constants';
import { SideMenuService } from './side-menu.service';
// import { NbSidebarService } from '@nebular/theme';
interface SubMenu {
  icon: string;
  title: string;
  url: string;
}
interface MenuList {
  icon: string;
  title: string;
  url?: string;
  submenuVisible?: boolean;
  submenu?: Array<SubMenu>;
}
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})

export class SideMenuComponent {

  @Output() togelsideMenu = new EventEmitter();
  menubar: boolean;
  menuList: Array<MenuList>;
  selectedMenu: MenuList;
  site_name: string;
  private BASE_URL: string;

  constructor(private router: Router, private authService: AuthenticationService, private sideMenu: SideMenuService) {
    this.menubar = false;
    this.site_name = 'EHMS'
    this.siteName()
  }

  ngOnInit() {
    this.getMenuList();
  }

  siteName() {
    this.BASE_URL = location.origin
    if(this.BASE_URL == 'http://ec2-13-214-73-99.ap-southeast-1.compute.amazonaws.com:4000') {
      this.site_name = 'EHMS (LIVE)'
    }
  }

  currentUserRole() {
    let currentRole = null;
    if (this.authService.getUserInfo()) {
      currentRole = this.authService.getUserInfo().userrole;
    }
    return currentRole;
  }
  togglesidemenu(menu) {
    this.togelsideMenu.emit(menu)
  }
  userTypeCheck() {
    return UserType.EMPLOYEE;
  }
  // openUrl(url) {
  //   this.router.navigate([url]);
  // }
  selectMenu(menu: MenuList, i) {
    this.selectedMenu = {
      icon: menu.icon,
      title: menu.title,
      url: menu.url
    };
    // console.log('Inside SideMenuComponent - selectMenu()')
    // console.log(menu.url);
    this.menuList[i].submenuVisible = !this.menuList[i].submenuVisible;
    if (menu.url !== undefined && menu.url !== '') {
      this.router.navigate([menu.url]);
    }
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
      title: menu.title,
      url: menu.url
    };
    this.selectedMenu.submenu = submenu;
    this.router.navigate([submenu.url]);
    this.menubar = false;
  }
  menuBackground(menu, i) {

    if (this.selectedMenu) {
      if (this.selectedMenu.title === menu.title && this.selectedMenu.title === this.menuList[i].title) {
        return true;
      }
    } else {
      return false;
    }

  }

  getMenuList() {
    let resultArr = {};
    let resultMenu = [];
    this.sideMenu.getMenuListApi().subscribe((res) => {
      // TO SET THE VALUE
      this.authService.setMenuList(res.data);
      // console.log('Inside SideMenuComponent - getMenuList()')
      // console.log(res.data);
      const arrValue = res.data;
      const result = arrValue.reduce((accumulator, currentValue) => {
        accumulator[currentValue.parent] = accumulator[currentValue.parent] || [];
        accumulator[currentValue.parent].push(currentValue);

        return accumulator;
      }, Object.create(null));
      console.log('ORDER: 1. Dashboard 2. Calculate Port Dues 3. Transaction 4. Document Management 5. Master Setup 6. Security');
      resultArr = result;
      
        for (let key in resultArr) {
          if (key.trim()) {
            // let iconurl = `assets/icons/menu/${key}.svg`;
            let iconurl = "";
            if (key === 'Master Setup') {
              iconurl = 'assets/icons/menu/report.svg';
            } else if (key === 'Transaction') {
              iconurl = 'assets/icons/menu/clock.svg';
            } else if (key === 'Document Management') {
              iconurl = 'assets/icons/menu/report.svg';
            } else if (key === 'Security') {
              iconurl = 'assets/icons/menu/report.svg';
            } else if (key === 'Ship Owner') {
              iconurl = 'assets/icons/menu/report.svg';
            } else if (key === 'Reports') {
              iconurl = 'assets/icons/menu/calander.svg';
            }else if (key === 'Time Sheet New') {
              iconurl = 'assets/icons/menu/calander.svg';
            }
  
            let obj = { icon: iconurl, title: key, submenu: resultArr[key] };
            resultMenu.push(obj);
          } else {
            resultMenu.push(...resultArr[key])
          }
        }
        
      this.menuList = resultMenu;
    });
  }

  onClickedOutside(e: Event) {
    this.menubar = false;
  }

  dashboard() {
    this.router.navigateByUrl('/home')
  }

  port_call_dues() {
    var port_call_url = JSON.parse(localStorage.getItem('common_settings'))[0].value      
    window.open(port_call_url, '_blank')
  }

}
