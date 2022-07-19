function maxItemAssociation(shoppingList) {
    
    // создадим мапу со связями для каждого товара из списков
    let itemLinks = new Map();

    shoppingList.forEach(singleList => {
        singleList.forEach(i => {
            if (!itemLinks.has(i)) {
                itemLinks.set(i, new Set());
            }
            singleList.forEach(j => {itemLinks.get(i).add(j)})
        })        
    });

    // для каждого списка покупок получим группу рекомендаций (сет, состоящий из связанных товаров для каждого товара из текущего списка)
    let recommendations = [];
    shoppingList.forEach(singleList => {
        first = true;
        singleList.forEach(item => {
            let currentRecomendation = itemLinks.get(item);
            if (first) {
                recommendations.push(currentRecomendation);
                first = false;
            } else {
                itemLinks.get(item).forEach(link => currentRecomendation.add(link));
            }
        })
    });

    //отсортируем и вернем результат
    recommendations = recommendations
      .map((recomendation) => [...recomendation].sort())
      .sort(function(a,b) {return b.length === a.length ? (a.join('') < b.join('') ? -1 : 1) : b.length - a.length});

      return recommendations[0];
}


