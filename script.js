class Products {
    static counter = 0;
    #id;
    constructor(title, manufacture, price) {
        Products.counter++;
        this.#id = Products.counter;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get manufacture() {
        return this._manufacture;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

class Milk extends Products {

    constructor(title, manufacture, price, fat) {
        super(title, manufacture, price);
        this._fat = fat;
    }

    get fat() {
        return this._fat;
    }

    set fat(value) {
        this._fat = value;
    }
}

class Chocolate extends Products {
    constructor(title, manufacture, price, kind) {
        super(title, manufacture, price);
        this._kind = kind;
    }
    get kind() {
        return this._kind;
    }

    set kind(value) {
        this._kind = value;
    }
}

class Wine extends Products {
    constructor(title, manufacture, price, alcohol) {
        super(title, manufacture, price);
        this._alcohol = alcohol;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(value) {
        this._alcohol = value;
    }
}

class Store {
    constructor() {
        this.store = [];
    }
    addProduct(product) {
        if (this.store.find(item => item.id === product.id))
            return false;
        else {
            this.store.push(product);
            return true;
        }
    }
    getAllProducts() {
        return [...this.store];
    }
    getByType(type) {
        return this.store.filter(item => {
            if (item.constructor.name.toLowerCase() === type.toLowerCase())
                return item;
        });
    }
}