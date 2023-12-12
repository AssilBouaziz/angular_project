import { Member } from './Member';

export interface Tool {
  id: string;
  createur: Member;
  date: Date;
  source: string;
}
