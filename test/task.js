import loginPage from '../pages/loginPage.js'
import taskPage from '../pages/taskPage.js'

fixture('ruum sap')
    .page('https://www.ruumapp.com/')
    


test('setting task status to done', async t => {

  
    await loginPage.login_successfully('bensu.konakoglu@gmail.com','123AbcdE.');
    await taskPage.task_creation();
    await taskPage.set_task_status_to_done();
});