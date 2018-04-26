import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public navItems: Array<{path: string, title: string}>;
  public navOpen: boolean;

  constructor(public dialog: MatDialog) {}


  ngOnInit() {
    this.navItems = [
      { path: '/', title: 'Lyrics' },
      { path: '/table', title: 'Table' },
      { path: '/form', title: 'Form' }
    ]
  }

  public openMainNav(): void {
    this.navOpen = true;
  }

  public navClosed(): void {
    this.navOpen = false;
  }

  public openModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {data: {
      title: 'This is an Example of a Modal',
      message: `Modals are a great way to communicate a focused message, bringing the user's attention to something important - generally a step in a workflow, or a message that indicates they're about to something that will have consequences.`
    }, maxWidth: 500});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public navigateToRepo() {
    window.location.href = 'https://github.com/colinjlacy/material-in-action';
  }

}
