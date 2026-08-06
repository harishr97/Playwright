export class SearchPage{
    constructor(page){
        this.page=page        
        this.location=page.locator('//select[@id="location"]')
        this.hotel=page.locator('//select[@id="hotels"]')
        this.room=page.locator('//select[@id="room_type"]')
        this.roomno=page.locator('//select[@id="room_nos"]')
        this.checkin=page.locator('//input[@id="datepick_in"]')
        this.checkout=page.locator('//input[@id="datepick_out"]')
        this.adultroom=page.locator('//select[@id="adult_room"]')
        this.childroom=page.locator('//select[@id="child_room"]')
        this.searchbtn=page.locator('//input[@id="Submit"]')
    }
    async selectLocation(){
        await this.location.selectOption({value:"New York"})
    }
    async selectHotels(){
        await this.hotel.selectOption({value:"Hotel Sunshine"})
    }
    async selectRoom(){
        await this.room.selectOption({value:"Deluxe"})
    }
    async SelectNoRoom(){
        await this.roomno.selectOption({value:"4"})
    }
    async EnterCheckIn(chkin){
        await this.checkin.fill(chkin)
    }
    async EnterCheckOut(chkout){
        await this.checkout.fill(chkout)
    }
    async EnterAdultRoom(){
        await this.adultroom.selectOption({value:"4"})
    }
    async EnterChildRoom(){
        await this.childroom.selectOption({value:"3"})
    }
    async ClickSearchButton(){
        await this.searchbtn.click()
    }
}