import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private accountService: AccountService, private toastr: ToastrService){ }

  register(){
    this.accountService.register(this.model).subscribe({
      next : (res) => {
        console.log(res);
        this.cancel();
      },
      error : (err) => {
        this.toastr.error(err.error);
      }
    })
  }

  cancel(){
    this.cancelReigister.emit(false);
  }
}
