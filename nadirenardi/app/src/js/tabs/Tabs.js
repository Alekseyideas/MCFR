export class Tab{
    constructor(btn,content){

        const button = $(`${btn}`);
        const activeButton = $(`${btn}.active`);
        const tab = {
            btn: button,
            btnData: button.data('tab'),
            activeBtnData: activeButton.data('tab'),
            info: content,
            showTab: function (tab,slug) {
                $(`${tab}--${slug}`).addClass('active');
            },
            hideTab: function (tab) {
                $(`${tab}`).removeClass('active');
            }
        };

        $(`${tab.info}--${tab.activeBtnData}`).addClass('active');

        button.click(function () {
            button.removeClass('active');

            $(this).addClass('active');

            tab.hideTab(tab.info);

            tab.activeBtnData = $(this).data('tab');

            tab.showTab(tab.info,tab.activeBtnData);
        })

    }



}