const combos = [
  {
    number: 1,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Витаминный", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Борщ со сметаной на курином бульоне", weight: 250, allergens: ["молоко"] },
      { label: "Второе блюдо", name: "Куриная отбивная под сыром", weight: 100, allergens: ["молоко"] },
      { label: "Гарнир", name: "Рис с овощами", weight: 150, allergens: [] },
      { label: "Напиток", name: "Компот из сухофруктов", weight: 200, allergens: [] }
    ]
  },
  {
    number: 2,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Винегрет", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Щи из свежей капусты на курином бульоне", weight: 250, allergens: [] },
      { label: "Второе блюдо", name: "Котлета Студенческая", weight: 90, allergens: ["яйцо", "глютен", "молоко"] },
      { label: "Гарнир", name: "Картофельное пюре", weight: 150, allergens: ["молоко"] },
      { label: "Напиток", name: "Чай с лимоном", weight: 200, allergens: [] }
    ]
  },
  {
    number: 3,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Коул Слоу (из капусты)", weight: 100, allergens: ["яйцо", "молоко"] },
      { label: "Первое блюдо (Суп)", name: "Суп гороховый на курином бульоне с гренками", weight: 250, allergens: ["глютен"] },
      { label: "Второе блюдо", name: "Гуляш из мяса кур", weight: 90, allergens: [] },
      { label: "Гарнир", name: "Гречка рассыпчатая", weight: 150, allergens: [] },
      { label: "Напиток", name: "Чай каркаде", weight: 200, allergens: [] }
    ]
  },
  {
    number: 4,
    price: 200,
    items: [
      { label: "Салат", name: "Салат из свёклы с чесноком", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Рассольник Ленинградский", weight: 250, allergens: ["молоко"] },
      { label: "Второе блюдо", name: "Тефтели в томатном соусе", weight: 100, allergens: ["глютен", "яйцо"] },
      { label: "Гарнир", name: "Макароны отварные", weight: 150, allergens: ["глютен"] },
      { label: "Напиток", name: "Чай с сахаром", weight: 200, allergens: [] }
    ]
  },
  {
    number: 5,
    price: 200,
    items: [
      { label: "Салат", name: "Салат «Венский»", weight: 100, allergens: ["яйцо"] },
      { label: "Первое блюдо (Суп)", name: "Суп лапша с курицей", weight: 250, allergens: ["глютен"] },
      { label: "Второе блюдо", name: "Запеканка Бифаше с фаршем", weight: 250, allergens: ["молоко"] },
      { label: "Напиток", name: "Напиток из шиповника", weight: 200, allergens: [] }
    ]
  },
  {
    number: 6,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Свежесть (из капусты)", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Суп Харчо с рисом на курином бульоне", weight: 250, allergens: [] },
      { label: "Второе блюдо", name: "Котлета куриная", weight: 90, allergens: ["яйцо", "глютен", "молоко"] },
      { label: "Гарнир", name: "Макароны отварные", weight: 150, allergens: ["глютен"] },
      { label: "Напиток", name: "Компот из сухофруктов", weight: 200, allergens: [] }
    ]
  },
  {
    number: 7,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Морковь по-корейски", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Суп Свекольник на курином бульоне", weight: 250, allergens: [] },
      { label: "Второе блюдо", name: "Жаркое с курицей", weight: 250, allergens: [] },
      { label: "Напиток", name: "Чай с лимоном", weight: 200, allergens: [] }
    ]
  },
  {
    number: 8,
    price: 200,
    items: [
      { label: "Салат", name: "Салат из свёклы с зелёным горошком", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Суп с клецками с курицей", weight: 250, allergens: ["глютен", "яйцо"] },
      { label: "Второе блюдо", name: "Гуляш из мяса кур", weight: 90, allergens: [] },
      { label: "Гарнир", name: "Гречка рассыпчатая", weight: 150, allergens: [] },
      { label: "Напиток", name: "Чай каркаде", weight: 200, allergens: [] }
    ]
  },
  {
    number: 9,
    price: 200,
    items: [
      { label: "Салат", name: "Салат из свежей капусты", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Борщ на курином бульоне", weight: 250, allergens: ["молоко"] },
      { label: "Второе блюдо", name: "Плов из мяса кур", weight: 250, allergens: [] },
      { label: "Напиток", name: "Чай с сахаром", weight: 200, allergens: [] }
    ]
  },
  {
    number: 10,
    price: 200,
    items: [
      { label: "Салат", name: "Салат Винегрет", weight: 100, allergens: [] },
      { label: "Первое блюдо (Суп)", name: "Тыквенный суп-пюре с гренками", weight: 250, allergens: ["глютен"] },
      { label: "Второе блюдо", name: "Котлета студенческая", weight: 90, allergens: ["яйцо", "глютен", "молоко"] },
      { label: "Гарнир", name: "Картофель запечённый по-деревенски", weight: 150, allergens: [] },
      { label: "Напиток", name: "Напиток из шиповника", weight: 200, allergens: [] }
    ]
  }
];

const dailyMenu = [
  {
    title: "Завтрак",
    items: [
      { name: "Каша пшённая", price: 40, allergens: [] },
      { name: "Сырники", price: 75, allergens: ["молоко", "яйцо", "глютен"] },
      { name: "Блинчики с творогом", price: 70, allergens: ["глютен", "яйцо", "молоко"] },
      { name: "Драники со сметаной", price: 50, allergens: ["молоко"] }
    ]
  },
  {
    title: "Супы",
    items: [
      { name: "Борщ", price: 45, allergens: ["молоко"] },
      { name: "Солянка", price: 90, allergens: [] }
    ]
  },
  {
    title: "Гарниры",
    items: [
      { name: "Перловка с овощами", price: 45, allergens: [] },
      { name: "Макароны", price: 30, allergens: ["глютен"] },
      { name: "Гречка", price: 30, allergens: [] },
      { name: "Картофель с морковью", price: 40, allergens: [] }
    ]
  },
  {
    title: "Вторые блюда",
    items: [
      { name: "Плов из курицы", price: 125, allergens: [] },
      { name: "Минтай по-сибирски", price: 160, allergens: ["рыба"] },
      { name: "Запеканка картофельная с курицей", price: 115, allergens: ["молоко", "яйцо"] },
      { name: "Пельмени (100 г)", price: 105, allergens: ["глютен", "яйцо"] },
      { name: "Куриная отбивная с соусом", price: 100, allergens: [] },
      { name: "Куриная отбивная с овощами", price: 145, allergens: [] },
      { name: "Куриная отбивная с ананасом", price: 145, allergens: [] },
      { name: "Свиная отбивная с овощами", price: 135, allergens: [] }
    ]
  },
  {
    title: "Салаты",
    items: [
      { name: "Капустный", price: null, allergens: [] },
      { name: "Свёкла под шубой", price: null, allergens: ["яйцо", "молоко"] },
      { name: "Оливье", price: null, allergens: ["яйцо", "молоко"] }
    ]
  },
  {
    title: "Напитки",
    items: [
      { name: "Сок яблочный", price: null, allergens: [] },
      { name: "Облепиха", price: null, allergens: [] },
      { name: "Каркаде", price: null, allergens: [] }
    ]
  }
];

const comboGrid = document.getElementById("menu-grid");
const dailyGrid = document.getElementById("daily-grid");
const highlightCheckbox = document.getElementById("highlight-allergens");

function formatPrice(price) {
  return price === null ? "\u2014" : price + " \u20BD";
}

function renderCombos() {
  comboGrid.innerHTML = "";
  const highlight = highlightCheckbox.checked;

  combos.forEach(function (combo) {
    const card = document.createElement("article");
    card.className = "dish-card";

    const hasAllergens = combo.items.some(function (item) {
      return item.allergens.length > 0;
    });
    if (highlight && hasAllergens) {
      card.classList.add("has-allergens");
    }

    const header = document.createElement("div");
    header.className = "dish-header";

    const title = document.createElement("h3");
    title.className = "dish-name";
    title.textContent = "Студенческое КОМБО №" + combo.number;

    const price = document.createElement("span");
    price.className = "dish-price";
    price.textContent = formatPrice(combo.price);

    header.appendChild(title);
    header.appendChild(price);
    card.appendChild(header);

    const list = document.createElement("ul");
    list.className = "combo-items";

    combo.items.forEach(function (item) {
      const li = document.createElement("li");

      const line = document.createElement("span");
      line.className = "combo-item-line";
      line.textContent = item.label + ": " + item.name + " — " + item.weight + " г";
      li.appendChild(line);

      if (item.allergens.length > 0) {
        const allergens = document.createElement("span");
        allergens.className = "combo-item-allergens";
        allergens.textContent = "Аллергены: " + item.allergens.join(", ");
        li.appendChild(allergens);
      }

      list.appendChild(li);
    });

    card.appendChild(list);
    comboGrid.appendChild(card);
  });
}

function renderDaily() {
  dailyGrid.innerHTML = "";
  const highlight = highlightCheckbox.checked;

  dailyMenu.forEach(function (category) {
    const card = document.createElement("article");
    card.className = "daily-card";

    const hasAllergens = category.items.some(function (item) {
      return item.allergens.length > 0;
    });
    if (highlight && hasAllergens) {
      card.classList.add("has-allergens");
    }

    const title = document.createElement("h3");
    title.className = "daily-title";
    title.textContent = category.title;
    card.appendChild(title);

    const list = document.createElement("ul");
    list.className = "daily-items";

    category.items.forEach(function (item) {
      const li = document.createElement("li");

      const row = document.createElement("span");
      row.className = "daily-item-row";

      const name = document.createElement("span");
      name.className = "daily-item-name";
      name.textContent = item.name;

      const price = document.createElement("span");
      price.className = "daily-item-price";
      price.textContent = formatPrice(item.price);

      row.appendChild(name);
      row.appendChild(price);
      li.appendChild(row);

      if (item.allergens.length > 0) {
        const allergens = document.createElement("span");
        allergens.className = "daily-item-allergens";
        allergens.textContent = "Аллергены: " + item.allergens.join(", ");
        li.appendChild(allergens);
      }

      list.appendChild(li);
    });

    card.appendChild(list);
    dailyGrid.appendChild(card);
  });
}

highlightCheckbox.addEventListener("change", function () {
  renderCombos();
  renderDaily();
});

renderCombos();
renderDaily();
