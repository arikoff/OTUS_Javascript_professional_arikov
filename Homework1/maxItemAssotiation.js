function maxItemAssociation(shoppingList) {
  // создадим мапу со связями для каждого товара из списков
  const itemLinks = new Map();

  shoppingList.forEach((singleList) => {
    singleList.forEach((i) => {
      if (!itemLinks.has(i)) {
        itemLinks.set(i, new Set(singleList));
      } else {
        const currentLink = itemLinks.get(i);
        singleList.forEach((j) => {
          currentLink.add(j);
        });
      }
    });
  });

  // для каждого списка покупок получим группу рекомендаций (сет, состоящий из связанных товаров для каждого товара из текущего списка)
  let recommendations = [];
  shoppingList.forEach((singleList) => {
    let first = true;
    singleList.forEach((item) => {
      let currentRecomendation = itemLinks.get(item);
      if (first) {
        recommendations.push(currentRecomendation);
        first = false;
      } else {
        itemLinks.get(item).forEach((link) => currentRecomendation.add(link));
      }
    });
  });

  //отсортируем и вернем результат
  recommendations = recommendations
    .map((recomendation) => [...recomendation].sort())
    .sort(function (a, b) {
      return b.length === a.length
        ? a.join("") < b.join("")
          ? -1
          : 1
        : b.length - a.length;
    });

  console.log(recommendations);
  return recommendations[0];
}

maxItemAssociation([
  ["d", "c"],
  ["c", "b"],
  ["b", "a"],
]);
