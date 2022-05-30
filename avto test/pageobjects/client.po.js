class ClientPage{
    get createModalPageButton(){ return $('button.clients-add-user-dialog');}
    get firstClientRow(){return $('table.crm-navigator-table tbody tr td span');}

    clickOnAddClienButton(){
        this.createModalPageButton.click();
    }

    clickOnFirstRow(){
        this.firstClientRow.click();

    }
}

module.exports= new ClientPage