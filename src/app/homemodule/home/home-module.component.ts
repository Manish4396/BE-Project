import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../../SharedService/shared-service.service';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-homemodule',
  templateUrl: './home-module.component.html',
  styleUrls: ['./home-module.component.css'],
  providers:[SharedServiceService]
})
export class HomemoduleComponent implements OnInit {
  loginhome:any
  dloginhome:any
  selectedScrip:any;
  public selectedValue:string;
  public tempScripName = "";
  public scriptList: any;
  constructor(private router: Router,public _sharedService: SharedServiceService) { }
  search=[
    {label:"General Physician",value:"General Physician"},
    {label:"Cardiologist",value:"Cardiologist"},
    {label:"Dentist",value:"Dentist"},
    {label:"Dermatologist",value:"Dermatologist"},
    {label:"Gynaecologist",value:"Gynaecologist"},
    {label:"Neurologist",value:"Neurologist"},
    {label:"Oncologist",value:"Oncologist"},
    {label:"Opthalmologist",value:"Opthalmologist"},
    {label:"ENT",value:"ENT"},
    {label:"Psychiatrist",value:"Psychiatrist"},
    {label:"Urologist",value:"Urologist"},
  ];
  ngOnInit() {
    
  }

  getScripts(str) {
    if (this.tempScripName !== str) {
      this.tempScripName = str;
      if (str.length >= 3 ) {
       this.scriptList=this.search;
      }
    }
  }

  get(data){
    //alert(JSON.stringify(data));
  }

  ngAfterViewInit()
  {
    console.log(this._sharedService.login);
    this.loginhome=JSON.parse(localStorage.getItem('login'));
    this.dloginhome=JSON.parse(localStorage.getItem('dlogin'));
    // this.loginhome=this._sharedService.login;
  }

  onAssetSelected(obj) {
    this.selectedScrip = obj;
    var obj1=obj.value;
    console.log(this.selectedScrip);
    this.router.navigate(['/response'],{ queryParams: { obj1 } })
  }

}
