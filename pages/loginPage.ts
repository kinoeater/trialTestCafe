import { Selector, t } from 'testcafe';

class loginPage {
    login_button: Selector;
    next_button: Selector;
    email_input: Selector;
    password_input: Selector;
    signin_button: Selector;

    constructor() {
        this.login_button = Selector('.header-navlink.brand.login.w-button');
        this.next_button = Selector('button[data-test="ruum-auth-signin-button"]')
        this.email_input = Selector('input[data-test="ruum-auth-email-input"]')
        this.password_input = Selector('input[data-test="ruum-auth-password-input"]')
        this.signin_button = Selector('button[data-test="ruum-auth-signin-button"]')

     //   this.user_email = 'bensu.konakoglu@gmail.com'
     //   this.user_password = '123AbcdE.'

    }
    async login_successfully(user_email,user_password) {
        await t
            .navigateTo('https://open.ruumapp.com/auth')
            .maximizeWindow()
            .typeText(this.email_input, user_email)
            .click(this.next_button)
            .typeText(this.password_input, user_password)
            .click(this.signin_button)
    }
}
export default new loginPage();