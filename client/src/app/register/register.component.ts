import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any;
  @Output() cancelReigister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService){ }

  register(){
    this.accountService.register(this.model).subscribe({
      next : (res) => {
        console.log(res);
        this.cancel();
      },
      error : (err) => {
        console.log(err);
      }
    })
  }

  cancel(){
    this.cancelReigister.emit(false);
  }
}
