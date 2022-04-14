import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { VesselMasterSetupService } from 'src/app/admin/vessel-master-setup/vessel-master-setup.service';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { BroadcastService } from '../../shared/services/broadcast/broadcast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  userName: any;
  userRole: any;
  vesselName: any;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private broadcastService: BroadcastService,
    // private vesselMasterSetupService : VesselMasterSetupService,
    private broadCastService: BroadcastService,
    ) {
    this.userName = 'USER';
    this.userRole = 'USER';
  }

  ngOnInit() {
    // var userInfo = this.authService.getUserInfo();
    this.userName = localStorage.getItem('isq_username')
    this.userRole = JSON.parse(localStorage.getItem('role')).userrole

    if (this.userRole == 'Ship Owner') {
      var vessel_id = JSON.parse(localStorage.getItem('role')).vessel_master_id
      // this.vesselMasterSetupService.getVesselById(vessel_id).subscribe((res) => {
      //   this.vesselName = res.data[0].vessel_name;
      // }, err => this.broadCastService.handleError()
    // );
    }
  }

  onLogout() {
    this.authService.onLogout().subscribe(
      res => {
        if (res.success) {
          this.router.navigateByUrl('/login');
        } else {
          this.broadcastService.handleError(res.message);
        }
      },
      err => {
        this.broadcastService.handleError(err.message);
      }
    );
  }
}






