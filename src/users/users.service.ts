import { Injectable } from '@nestjs/common';

let fakeUsers: object[];
@Injectable()
export class UsersService {
  async getAllUsers(): Promise<object[]>{
    fakeUsers = [{
        id:1,
        name:"joa"
    }]
    return fakeUsers;
  }
}
