import { Component, OnInit, ElementRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
    selector: 'autocomplete',
    host: {
        '(document:click)': 'handleClick($event)',
    },
    template: `
        <div style="width:inherit !important;" >
            <div class="input-field col s12">
              <input type="text" class="validate filter-input" [(ngModel)]=query (keyup)=keyUp.next() placeholder="Search Scrip">
            </div>
            <div class="suggestions" *ngIf="filteredList.length > 0">
                <ul *ngFor="let item of filteredList" >
                    <li (click)="select(item)">
                        <a>{{item[searchKey] || item}} {{item[searchKey2] || ''}}</a>
                    </li>
                </ul>
            </div>
        </div>  	
        `,
    styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

    @Input() dataList: any = [];
    @Input() emptyList: any;
    @Input() searchKey?: any;
    @Input() searchKey2?: any;
    @Input() setSelectedValue?: string;
    @Output() selectedData: EventEmitter<any> = new EventEmitter<any>()
    @Output() inputQuery: EventEmitter<any> = new EventEmitter<any>()

    public keyUp = new Subject<any>();
    public query = '';
    public filteredList = [];
    public elementRef;

    constructor(myElement: ElementRef) {
        this.elementRef = myElement;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.setSelectedValue = "";
        if (changes['dataList']) {
            // this.dataList = changes['dataList'].currentValue;
            this.filter();
            // //console.log("this.dataList.length : ",this.dataList ? this.dataList.length : 0);
        }
        if (changes['setSelectedValue'] && this.setSelectedValue) {
            // //console.log(this.setSelectedValue);
            this.query = "";//this.setSelectedValue;
        }

    }

    filter() {
        if (this.dataList) {
            if (this.query !== "" && this.query.length > 2) {
                this.filteredList = this.dataList// .filter(function(el){
                //     if(this.searchKey !== "" && this.searchKey !== undefined)
                //         return el[this.searchKey].toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                //     else
                //         return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                // }.bind(this));
            } else {
                this.filteredList = [];
            }
        }
    }

    select(item) {
        if (this.searchKey)
            this.query = item[this.searchKey];
        else
            this.query = item;
        this.selectedData.emit(item);
        this.filteredList = [];
    }

    handleClick(event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
        }
    }

    ngOnInit() {
        const subscription = this.keyUp
            .debounceTime(300)
            .subscribe(x => {
                this.inputQuery.emit(this.query);
            });
        if (this.emptyList) {
            this.emptyList.subscribe(x => {
                this.query = ""
            })
        }
    }

}