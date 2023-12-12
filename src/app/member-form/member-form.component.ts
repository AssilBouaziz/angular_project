import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent {
  form!: FormGroup;
  memberGlobal!: Member;
  constructor(
    private MS: MemberService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [Validators.required]),
    });
  }
  initForm3(member: Member): void {
    this.form = new FormGroup({
      cin: new FormControl(member.cin, [Validators.required]),
      name: new FormControl(member.name, [Validators.required]),
      cv: new FormControl(member.cv),
      type: new FormControl(member.type, [Validators.required]),
    });
  }

  ngOnInit(): void {
    const idcourant1 = this.activatedRoute.snapshot.params['id'];
    console.log(idcourant1);
    if (!!idcourant1) {
      // je suis dans edit
      this.MS.getMemberById(idcourant1).subscribe((member) => {
        this.memberGlobal = member;
        this.initForm3(member);
      });
    } else {
      //je suis dans create
      this.initForm;
    }
  }

  // OnSubmit(): void {
  //   // récupérer le contenu
  //   console.log(this.form.value);
  //   const member1 = { ...memberGlobal, ...this.form.value };
  //   const member2 = {
  //     ...member1,
  //     id: member1.id ?? Math.ceil(Math.random() * 1000),
  //     createdDate: member1.createdDate ?? new Date().toISOString().toString(),
  //   };
  //   const member = {
  //     ...this.form.value,
  //     id: Math.ceil(Math.random() * 1000),
  //     createdDate: new Date().toISOString(),
  //   };
  //   this.MS.saveMember1(member1).subscribe(() => {
  //     this.router.navigate(['/members']);
  //   }); //recrutement@sofia-technologies.com
  // }
  OnSubmit(): void {
    // récupérer le contenu
    console.log(this.form.value);

    const member = { ...this.memberGlobal, ...this.form.value };
    // const memberNew = {
    //   ...member,
    //   id: member.id ?? Math.ceil(Math.random() * 1000),
    //   createdDate: member.createdDate ?? new Date().toISOString(),
    // };

    // this.MS.saveMember(memberNew).subscribe(() => {
    //   this.router.navigate(['/members']);
    // });

    //():retour de l'observalble , {} : action à faire après le travail du thread
    this.MS.saveMember(member).subscribe(() => {
      this.router.navigate(['/members']);
    }); /////redirect vers /member
  }
}
