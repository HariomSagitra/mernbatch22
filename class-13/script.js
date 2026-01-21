const ob1 = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
        "rate": 3.9,
        "skills": [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                "rating": {
                    "rate": 3.9,
                    "count": 120,
                    "data": {
                        "id": 1,
                        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        "price": 109.95,
                        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                        "rating": {
                            "rate": 3.924,
                            "count": 1200
                        }
                    }
                }
            },
            {
                    "rate": 3.9,
                    "count": 120,
                    "data": {
                        "id": 1,
                        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        "price": 109.95,
                        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        "category": "men's clothing",
                        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                        "rating": {
                            "rate": 3.924,
                            "count": 789456
                        }
                    }
                }
    
        ],
        "count": 120
    }
}
console.log(ob1.rating.skills[0].rating.data.rating.rate)
console.log(ob1.rating.skills[1].data.rating.count)