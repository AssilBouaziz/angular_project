import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToolscreateComponent } from '../toolscreate/toolscreate.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css'],
})
export class ToolComponent {
  constructor(private dialog: MatDialog) {}

  OpenToolCreate(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // this.dialog.open(ToolscreateComponent, dialogConfig);
    const dialogRef = this.dialog.open(ToolscreateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      console.log(data);
    });
  }
}
