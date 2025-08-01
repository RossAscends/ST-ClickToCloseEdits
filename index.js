
import { power_user } from '../../../power-user.js';
import { delay } from '../../../utils.js';

jQuery(async () => {

    //detect when a user clicks anywhere in the window
    $(window).on('mousedown', async (event) => {
        //const isClickToEditOn = power_user.click_to_edit;
        const DoescurEditTextareaExist = $('#curEditTextarea').length > 0;
        //if there's no open edit box, do nothing
        if (!DoescurEditTextareaExist) {
            return;
        }

        await delay(50)
        //get the click target
        const target = event.target;
        const $target = $(target);
        const $mes = $('#curEditTextarea').parent().parent();

        if (!$target.hasClass('mes_edit_done') && !$target.is($mes) && !$mes[0].contains(target)) {
            const editDoneButton = $mes.find('.mes_edit_done');
            if (!editDoneButton.length) {
                return;
            }
            editDoneButton.trigger('click');
        }
    });
});
