
import { power_user } from '../../../power-user.js';
import { delay } from '../../../utils.js';

jQuery(async () => {

    //detect when a user clicks anywhere in the window
    $(window).on('mouseup', async (event) => {
        const isClickToEditOn = power_user.click_to_edit;
        const DoescurEditTextareaExist = $('#curEditTextarea').length > 0;
        //if click to edit is off, return
        if (!isClickToEditOn || !DoescurEditTextareaExist) {
            return;
        }

        await delay(100)
        //get the e.target
        const target = event.target;
        const $target = $(target);

        //if the target is not #curEditTextarea
        if (target.id !== 'curEditTextarea' && !$target.hasClass('mes_edit_done')) {
            //trigger click on .mes_edit_done inside the sibling named .ch_name
            const editDoneButton = $('#curEditTextarea').parent().parent().find('.mes_edit_done');
            if (!editDoneButton.length) {
                return;
            }
            editDoneButton.trigger('click');
        }
    });
});
