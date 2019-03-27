import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUSerCreds } from 'app/services/user/typings';

@Component({
    selector: 'app-login-form',
    templateUrl: './form.component.html'
})
class LoginFormComponent {
    @Output() onsubmit: EventEmitter<IUSerCreds> = new EventEmitter();
    constructor(
        private fb: FormBuilder
    ) {}

    authGroup = this.fb.group({
        login: ['', Validators.required],
        pass: ['', Validators.required]
    });

    submit = () => {
        if (this.authGroup.valid) {
            this.onsubmit.emit(this.authGroup.value);
        }
    }
}

export {
    LoginFormComponent
};
