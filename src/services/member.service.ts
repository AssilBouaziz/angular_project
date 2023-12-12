import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  tab: Member[] = GLOBAL._DB.members;
  //Injection de HTTP CLIENT
  constructor(private httpClient: HttpClient) {}

  saveMember(member: Member): Observable<void> {
    // return this.httpClient.post<void>('http://localhost:9000/MEMBER-SERVICE/members', member);
    //ken maandekch back-end
    // this.tab.unshift(member);
    this.tab = [member, ...this.tab.filter((item) => item.id !== member.id)];
    return new Observable((observer) => {
      observer.next();
    });
  }
  getMemberById(idcourant: string): Observable<Member> {
    // return this.httpClient.get<Member>(
    //   'linktoRestAPIiiiiiiiiiiiiiiiiiiiiiiiiiiii'
    // );
    return new Observable((observer) => {
      observer.next(this.tab.find((item) => item.id == idcourant));
    });
  }

  deleteMemberById(id: string): Observable<void> {
    //return this.httpClient.delete<void>('http://localhost:9000/MEMBRE-SERVICE/delete..'+id);

    this.tab = this.tab.filter((item) => item.id != id);
    return new Observable((observer) => {
      observer.next();
    });
  }
  getAllMembers(): Observable<Member[]> {
    //return this.httpClient.get<Member[]>('http://localhost:9000/MEMBRE-SERVICE/members');

    return new Observable((observer) => {
      observer.next(this.tab);
    });
  }
}
