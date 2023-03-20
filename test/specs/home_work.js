describe('general store', () => {
    it('work', async() => {
 await $('//*[@resource-id="com.androidsample.generalstore:id/spinnerCountry"]').click()
    
  await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Austria"))').click()
  await $('//*[@resource-id="com.androidsample.generalstore:id/nameField"]').addValue("Harshitha K")
  await $('//*[@resource-id="com.androidsample.generalstore:id/radioFemale"]').click()
  await $('//*[@resource-id="com.androidsample.generalstore:id/btnLetsShop"]').click()
 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Nike SFB Jungle"))')
  await driver.pause(5000)
 // await a.containsText("ADD TO CART").click()
 await $('//*[@bounds="[540,1968][1002,2006]"]').click()
  await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()
  await driver.pause(5000)
  
  await $('android=new UiSelector().textContains("Visit to the website to complete purchase")').click()
  await driver.pause(5000)
  
    
    });
});