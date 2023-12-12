import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent {
  constructor(private MS: MemberService, private dialog: MatDialog) {}

  dataSource = new MatTableDataSource(this.MS.tab);

  ngOnInit(): void {
    this.fetch();
  }

  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'type',
    'cv',
    'createdDate',
    'Action',
  ];

  onDelete(id: string): void {
    //ouvrir la boite
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '400px',
      width: '600px',
    });

    //attendre le resultat de after closed
    // if true
    dialogRef.afterClosed().subscribe((result) => {
      if (result == true)
        this.MS.deleteMemberById(id).subscribe(() => {
          this.dataSource.data = this.MS.tab;
        });
    });
  }
  fetch(): void {
    this.MS.getAllMembers().subscribe((tab) => {
      this.dataSource.data = tab;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
