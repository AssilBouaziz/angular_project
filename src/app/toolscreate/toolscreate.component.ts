import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-toolscreate',
  templateUrl: './toolscreate.component.html',
  styleUrls: ['./toolscreate.component.css'],
})
export class ToolscreateComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ToolscreateComponent>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      date: new FormControl(null, [Validators.required]),
      Source: new FormControl(null, []),
      createur: new FormControl(null, []),
    });
  }
  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close(this.form.value);
  }
}
