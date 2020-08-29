import { Selector, t } from 'testcafe';
import XPathSelector from '../config/xpath-selector';

class taskPage {

    constructor() {
        this.new_task_button = Selector('button[class="btn btn-primary pl-2 ml-2"]')
        this.task_list_button = Selector('button[title="Task List"]')
        this.add_ruum = Selector('input[data-test="ruum-modal-task-ruum"]')
        this.ruum_option_one = Selector('button[id="ngb-typeahead-0-0"]')
        this.add_section = Selector('input[data-test="ruum-select-section"]')
        this.section_two = Selector('button[id="ngb-typeahead-1-2"]')

        this.create_task_button = Selector('button[class="btn btn-lg btn-primary"]')
        this.task_name_input = Selector('textarea[placeholder="Type the task name..."]')
        const task_name = 'It is a test task + ' + Date.now()
        this.task_name = task_name
        this.first_task = XPathSelector('//span[@class="interface text-truncate" and text()="' + task_name + '"]/ancestor::cdk-row//i[@class="icon icon-task-open"]')
        this.done = XPathSelector('//span[@class="flex-fill text-left text-truncate" and text()="Done"]')
        this.task_status_done = XPathSelector('//span[@class="interface text-truncate" and text()="' + task_name + '"]/ancestor::cdk-row//i[@class="icon icon-task-completed-filled"]')

    }

    async task_creation() {
        await t
            .click(this.task_list_button)
            .click(this.new_task_button)
            .typeText(this.task_name_input, this.task_name)
            .click(this.add_ruum)
            .click(this.ruum_option_one)
            .click(this.add_section)
            .click(this.section_two)
            .click(this.create_task_button)
    }

    async set_task_status_to_done() {
        await t
            .click(this.first_task)
            .click(this.done)
            .expect(this.task_status_done.exists).ok();
    }
}

export default new taskPage();