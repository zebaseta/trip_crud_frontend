import { Role } from './role';

export class UserFromToken {
  id: number;
  name: string;
  email: string;
  
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  
  }
}
