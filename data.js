// data.js
const allCharacters = [
  { name: "Аліса", image: "images/pers/alisa.png" },
  { name: "Артем", image: "images/pers/artem.png" },
  { name: "Ілля", image: "images/pers/illya.png" },
  { name: "Інна", image: "images/pers/inna.png" },
  { name: "К. Котьєв", image: "images/pers/kotyev.png" },
  { name: "О. Котьєва", image: "images/pers/kotyeva.png" },
  { name: "ГГ", image: "images/pers/gg.png" },
  { name: "Кирило", image: "images/pers/kyrylo.png" },
  { name: "Макс", image: "images/pers/maks.png" },
  { name: "Олексій", image: "images/pers/oleksii.png" },
  { name: "Олена", image: "images/pers/olena.PNG" },
  { name: "Оля", image: "images/pers/olya.png" },
  { name: "Паша", image: "images/pers/pasha.png" },
  { name: "Слава", image: "images/pers/slava.png" },
  { name: "Старлєй", image: "images/pers/starlei.png" },
  { name: "Вадим", image: "images/pers/vadym.png" }
];

const allWeapons = [
  { name: "1911", image: "images/weapons/1911.png" },
  { name: "АК-20/П", image: "images/weapons/AK20P.png" },
  { name: "АКМС", image: "images/weapons/akms.png" },
  { name: "Browning X-Bolt", image: "images/weapons/browning.png" },
  { name: "CZ 75", image: "images/weapons/cz75.png" },
  { name: "Форт-17", image: "images/weapons/fort17.png" },
  { name: "Форт-25", image: "images/weapons/fort-25.png" },
  { name: "Glock 26", image: "images/weapons/gl26.png" },
  { name: "Glock 17", image: "images/weapons/glock17.png" },
  { name: "Hatsan Escort", image: "images/weapons/hatsan.png" },
  { name: "Hatsan MP-TS", image: "images/weapons/hatsanmpts.png" },
  { name: "Honey Badger", image: "images/weapons/hb.png" },
  { name: "Inter Ordinance", image: "images/weapons/inter.png" },
  { name: "M14", image: "images/weapons/m14.png" },
  { name: "Малюк", image: "images/weapons/malyuk.png" },
  { name: "Mossberg", image: "images/weapons/moss.png" },
  { name: "Colt Python", image: "images/weapons/python.png" },
  { name: "СКС", image: "images/weapons/sks.png" },
  { name: "Sub-2000", image: "images/weapons/sub2000.png" },
  { name: "Typhoon", image: "images/weapons/typhoon.png" },
  { name: "Вєпрь", image: "images/weapons/vepr.png" },
  { name: "Zbroyar UAR-15", image: "images/weapons/zbroyar.png" }
];

const gridConfig = [
  {
    id: 1,
    title: "Особисто вважаю канонічною кінцівкою",
    options: [
      { label: "Канонодрочер (Аліса)", image: "images/alend.png" },
      { label: "Косплеєр «Востока» (Олена гуд-енд)", image: "images/olgd.png" },
      { label: "Вскриваємось (Олена бед-енд)", image: "images/olbd.png" },
      { label: "Життя бентежне (Інна фолс-енд)", image: "images/infl.png" },
      { label: "Останній капіталіст (Інна гуд-енд)", image: "images/ingd.png" },
      { label: "Ну ти і лох (Інна бед-енд)", image: "images/inbd.png" },
      { label: "Міцна чоловіча дружба (Гачі тру-енд)", image: "images/gctr.png" },
      { label: "Настоящій мужик (Гачі фолс-енд)", image: "images/gcfl.png" }
    ]
  },
  {
    id: 2,
    title: "Найтупіша неочікувана смерть",
    options: [
      { label: "Бакшот рулет", image: "images/prograv.png" },
      { label: "Один в полі не воїн", image: "images/ubilo.png" },
      { label: "БМ-21 «Град», нахуй", image: "images/127.png" }
    ]
  },
  {
    id: 3,
    title: "Найкращий рут",
    options: [
      { label: "Аліса-рут", image: "images/alisa_rut.png" },
      { label: "Олена-рут", image: "images/olena_rut.png" },
      { label: "Інна-рут", image: "images/inna_rut.png" },
      { label: "Гачі-рут", image: "images/gctr.png" }
    ]
  },
  {
    id: 4,
    title: "Найкраща дівчинка",
    options: [
  { label: "Аліса", image: "images/pers/alisa.png" },
  { label: "Інна", image: "images/pers/inna.png" },
  { label: "О. Котьєва", image: "images/pers/kotyeva.png" },
  { label: "Олена", image: "images/pers/olena.png" },
  { label: "Оля", image: "images/pers/olya.png" }
]
  },
  {
    id: 5,
    title: "Найкращий хлопчик",
    options: [
  { label: "Артем", image: "images/pers/artem.png" },
  { label: "Ілля", image: "images/pers/illya.png" },
  { label: "К. Котьєв", image: "images/pers/kotyev.png" },
  { label: "ГГ", image: "images/pers/gg.png" },
  { label: "Кирило", image: "images/pers/kyrylo.png" },
  { label: "Макс", image: "images/pers/maks.png" },
  { label: "Олексій", image: "images/pers/oleksii.png" },
  { label: "Паша", image: "images/pers/pasha.png" },
  { label: "Слава", image: "images/pers/slava.png" },
  { label: "Старлєй", image: "images/pers/starlei.png" },
  { label: "Вадим", image: "images/pers/vadym.png" }
]
  },
  {
    id: 6,
    title: "Нахуя цей персонаж взагалі існує",
    options: allCharacters
  },
  {
    id: 7,
    title: "Недооцінений персонаж",
    options: allCharacters
  },
  {
    id: 8,
    title: "Переоцінений персонаж",
    options: allCharacters
  },
  {
    id: 9,
    title: "Оверхейтед персонаж",
    options: allCharacters
  },
  {
    id: 10,
    title: "Найкраща екшн-сцена",
    options: [
      { label: "Перестрілка на парковці (день 1)", image: "images/parklot.png" },
      { label: "Колумбайн (Олена-рут, день 2)", image: "images/kolymbain.png" },
      { label: "Колледж (Інна-рут, день 2)", image: "images/college.png" },
      { label: "Гаражний кооператив (Інна-рут, день 2)", image: "images/kooperativ.png" },
      { label: "Захист ліцею (Аліса/Гачі рут, день 3)", image: "images/ftl_stand.png" },
      { label: "Допомога ліцею (Інна рут, день 3)", image: "images/ftl_help.png" },
      { label: "Пансіонат (Аліса/Гачі рут, день 4)", image: "images/pansionat.png" },
      { label: "Засідка на автобус (Аліса/Гачі рут, день 4)", image: "images/ambush.png" }
    ]
  },
  {
    id: 11,
    title: "Найкраща хентай-сцеа",
    options: [
      { label: "Аліса", image: "images/alisa_hent.png" },
      { label: "Олена", image: "images/lena_hent.png" },
      { label: "Інна", image: "images/inna_hent.png" }
    ]
  },
  {
    id: 12,
    title: "ТОП зброя",
    options: allWeapons
  }
];
