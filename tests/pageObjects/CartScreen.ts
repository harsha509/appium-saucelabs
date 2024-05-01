
class CartScreen {

    sauceLabsBikeLightItem(item: string) {
        return $(`//XCUIElementTypeStaticText[@name="${item}"]`)
    }

    get textPrice() {
        return $(`//XCUIElementTypeOther[@name="test-Price"]/XCUIElementTypeStaticText`)
    }

    get checkout() {
        return  $(`~test-CHECKOUT`);
    }
}

export default new CartScreen();
