import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        return [
            {
                id: 1,
                src: "https://cdn.adesk.ru/blog/media/d9b3c8bc587b4ba69dadca96bd62c83e-o.jpg",
                title: "Кредит",
                text: "Лучшая процентная ставка по кредиту!"
            },
            {
                id: 2,
                src: "https://leader-id.storage.yandexcloud.net/event_photo/303764/629b2b04b5e5a626793858.jpeg",
                title: "Крипта",
                text: "Лучшее решения для ваших накоплений"
            },
            {
                id: 3,
                src: "https://yar-ipoteka.ru/files/uploads/pics/faq/ipoteka-prostymy-slovamy-1.jpg",
                title: "Ипотека",
                text: "Лучшая подписка от наших партнеров"
            },
        ]
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }
        
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    
}