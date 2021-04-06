export class Product{
    id: number;
    title: string;
    desc: string;
    img: string;
    price: number;

    constructor(id = 0,title = '', desc = '',img = '',price = 0) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.price = price;
    }
}