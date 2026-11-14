const PHOTOS = {
  building1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82",
  building2: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=82",
  building3: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82",
  building4: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1200&q=82",
  building5: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1200&q=82",
  building6: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=82",
  car1: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=82",
  car2: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=82",
  car3: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=82",
  car4: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=82",
  car5: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=82",
  car6: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=82",
  car7: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=82",
  car8: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=82",
  people1: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=82",
  people2: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=82",
  people3: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1000&q=82",
  t1People: "./assets/case/t1-people.png",
  t1Yard: "./assets/case/t1-yard.jpeg",
  t2Building: "./assets/case/t2-building.jpeg",
  t2Observer: "./assets/case/t2-observer.png",
  t2Person: "./assets/case/t2-person.jpeg",
  t3Street: "./assets/case/t3-street.jpg",
  t4Building: "./assets/case/t4-building.jpg",
  mapT56: "./assets/case/map-t56.jpg",
  t6Sector: "./assets/case/t6-sector.jpg",
  pickupPeugeot: "./assets/stock/peugeot.jpg",
  pickupToyota: "./assets/stock/military-hilux.jpg",
  pickupSsang: "./assets/stock/ssangyong.jpg",
  fordBus: "./assets/stock/ford-transit.jpg",
  euroCar: "./assets/stock/skoda.jpg",
  euroAdapted: "./assets/stock/paris-car.jpg",
  peopleWalk: "./assets/stock/walk-busy.jpg",
  peopleTac: "./assets/stock/multicam-group.jpg",
  peopleCamo: "./assets/stock/multicam.jpg",
  login: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85"
};

const reportCase = {
  number: "ORS-1031-26",
  from: "2026-10-27",
  to: "2026-10-31",
  label: "27.10–31.10.2026",
  intro: "У ході відпрацювання з 27.10 по 31.10 у зоні постійного місця перебування виявлено 7 місць скупчення осіб і автотранспорту, який за описом відповідає перебуванню військовослужбовців на прихованих місцях розташування.",
  criteria: [
    "Мілітарний або тактичний одяг",
    "Військова атрибутика: патчі, шеврони",
    "Амуніція: тактичні сумки та ремені",
    "Приховане носіння зброї",
    "Пікапи кольору хакі, іноземні номери або номери, що не відповідають державній реєстрації, військова атрибутика на авто"
  ],
  closing: [
    "Протягом звітного періоду оперативна група виявила підозрілі локації. Станом на дату складання звіту оперативна робота триває.",
    "Група продовжує спостереження за локаціями та перевіряє відомості про осіб і об’єкти, які привернули її увагу.",
    "Про результати спостереження та перевірки старший групи доповість окремо.",
    "У разі виявлення ознак безпосередньої загрози старший групи невідкладно поінформує командира групи."
  ]
};

const objects = [
  { code: "X1", group: "base", name: "Північний сектор", address: "Eixample", coords: [41.3937, 2.1638], status: "Активний", photo: PHOTOS.building1, description: "Адміністративний комплекс. Контроль центрального входу, паркінгу та північного периметра." },
  { code: "B3", group: "base", name: "Діловий квартал", address: "Plaça de Catalunya", coords: [41.3874, 2.1686], status: "Активний", photo: PHOTOS.building2, description: "Офісний об’єкт із двома контрольованими в’їздами та підземним паркінгом." },
  { code: "K7", group: "base", name: "Західний контур", address: "Sants-Montjuïc", coords: [41.3751, 2.1496], status: "Активний", photo: PHOTOS.building3, description: "Логістичний майданчик. Фіксуються всі автомобілі та відвідувачі." },
  { code: "M4", group: "base", name: "Центральний вузол", address: "Sagrada Família", coords: [41.4036, 2.1744], status: "Активний", photo: PHOTOS.building4, description: "Об’єкт під цілодобовим спостереженням. Три входи та гостьова стоянка." },
  { code: "P8", group: "base", name: "Східний сектор", address: "Poblenou", coords: [41.3994, 2.1945], status: "Активний", photo: PHOTOS.building5, description: "Сучасний офісний кампус. Контроль КПП, гостьового паркінгу та службового входу." },
  { code: "D2", group: "base", name: "Промисловий сектор", address: "Sant Martí", coords: [41.4102, 2.2015], status: "Активний", photo: PHOTOS.building6, description: "Закрита виробнича територія з окремими в’їздами для персоналу та вантажного транспорту." },
  { code: "T1", group: "report", name: "Тест 1", address: "Gràcia · внутрішній двір", coords: [41.4042, 2.1560], status: "Активний", photo: PHOTOS.t1Yard, description: "Тильна сторона об’єкта. Протягом дня зафіксовано людей у чорному тактичному одязі. З автомобілів неодноразово завантажували та вивантажували контейнери, схожі на тару для перевезення бортів БПЛА. З боку центральної дороги зранку збираються групи по 3–4 особи." },
  { code: "T2", group: "report", name: "Тест 2", address: "Eixample · перехрестя району", coords: [41.3917, 2.1788], status: "Активний", photo: PHOTOS.t2Building, description: "Особи збираються орієнтовно о 08:20 на розі будівлі та заходять усередину за картками. Автомобілі залишають на Тест 3. Біля входу чергує спостерігач у тактичному одязі. Протягом стеження помічено підозрілих осіб, тому є припущення про зовнішнє спостереження." },
  { code: "T3", group: "report", name: "Тест 3", address: "Les Corts · паркувальний сектор", coords: [41.3891, 2.1368], status: "Активний", photo: PHOTOS.t3Street, description: "Місце паркування цивільних автомобілів на європейських номерах. За час спостереження з автомобілів виходили по 3–4 особи та рухалися до Тест 1 або Тест 2. Зранку збирається близько 5–8 автомобілів, які відповідають опису." },
  { code: "T4", group: "report", name: "Тест 4", address: "Sant Antoni · між житловими будинками", coords: [41.3775, 2.1595], status: "Активний", photo: PHOTOS.t4Building, description: "Нежитлова будівля між житловими будинками. З неї виходять особи в штанах мультикам, худі військової тематики та тактичному одязі; візуально розпізнається зброя під одягом. Навпроти паркуються автомобілі на єврономерах." },
  { code: "T5", group: "report", name: "Тест 5", address: "El Born · північний край району", coords: [41.3852, 2.1885], status: "Активний", photo: PHOTOS.mapT56, description: "Майже щодня збираються автомобілі на військових і європейських номерах. Присутні особи в цивільному, тактичному та військовому одязі." },
  { code: "T6", group: "report", name: "Тест 6", address: "Horta · північний сектор", coords: [41.4252, 2.1642], status: "Активний", photo: PHOTOS.t6Sector, description: "Пов’язана з Тест 5 зона щоденного скупчення. Автомобілі на військових і єврономерах, особи в цивільному, тактичному та військовому одязі." },
  { code: "T7", group: "report", name: "Тест 7", address: "El Guinardó · сектор спостереження", coords: [41.4148, 2.1855], status: "Дані уточнюються", photo: "", description: "У доповідній зазначено сім місць скупчення, однак окремий опис і фотоматеріали сьомого місця відсутні." }
];

let events = [
  { id: 101, object: "X1", type: "car", time: "14:36", date: "03.11.2026", title: "KA 2311 CE", desc: "Audi A6 · чорний · 2 особи", agent: "СОКІЛ-7", status: "pending", image: PHOTOS.car1, gallery: [PHOTOS.car1, PHOTOS.car4, PHOTOS.car5, PHOTOS.car6], note: "Заїхав через центральний в’їзд.", arrival: "14:31", departure: "—" },
  { id: 102, object: "X1", type: "people", time: "13:58", date: "03.11.2026", title: "3 особи", desc: "Біля головного входу, розмовляють", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Поведінка спокійна." },
  { id: 103, object: "X1", type: "car", time: "12:44", date: "03.11.2026", title: "AA 8420 KT", desc: "Toyota Camry · білий · 1 особа", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2, PHOTOS.car5, PHOTOS.car3, PHOTOS.car7], note: "Виїхав о 13:12.", arrival: "12:44", departure: "13:12" },
  { id: 104, object: "B3", type: "people", time: "11:30", date: "03.11.2026", title: "10 осіб", desc: "Група біля бокового входу", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people2, note: "Зайшли всередину о 11:42." },
  { id: 105, object: "K7", type: "car", time: "10:18", date: "03.11.2026", title: "AI 7714 OP", desc: "Volkswagen Transporter · сірий · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car3, gallery: [PHOTOS.car3, PHOTOS.car6, PHOTOS.car4, PHOTOS.car8], note: "Розвантаження у західній зоні.", arrival: "10:18", departure: "11:06" },
  { id: 106, object: "M4", type: "people", time: "09:42", date: "03.11.2026", title: "1 особа", desc: "Чоловік у темному пальті, очікує", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people3, note: "Залишив територію о 10:03." },
  { id: 107, object: "B3", type: "car", time: "14:12", date: "03.11.2026", title: "KA 9084 IP", desc: "Mercedes-Benz E-Class · сірий · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car4, gallery: [PHOTOS.car4, PHOTOS.car1, PHOTOS.car7, PHOTOS.car5], note: "Зупинився на гостьовій стоянці.", arrival: "14:12", departure: "14:48" },
  { id: 108, object: "B3", type: "car", time: "13:47", date: "03.11.2026", title: "CE 4402 BX", desc: "BMW X5 · синій · 3 особи", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car5, gallery: [PHOTOS.car5, PHOTOS.car8, PHOTOS.car2, PHOTOS.car4], note: "Водій показав перепустку.", arrival: "13:47", departure: "—" },
  { id: 109, object: "P8", type: "car", time: "15:04", date: "03.11.2026", title: "KA 2311 CE", desc: "Audi A6 · чорний · 2 особи", agent: "СОКІЛ-7", status: "pending", image: PHOTOS.car6, gallery: [PHOTOS.car6, PHOTOS.car2, PHOTOS.car5, PHOTOS.car7], note: "Повторно помічений біля іншого об’єкта.", arrival: "15:04", departure: "—" },
  { id: 110, object: "P8", type: "people", time: "14:51", date: "03.11.2026", title: "4 особи", desc: "Вийшли з офісного корпусу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people1, note: "Пройшли у напрямку паркінгу." },
  { id: 111, object: "D2", type: "car", time: "13:22", date: "03.11.2026", title: "BK 7051 IA", desc: "Ford Transit · білий · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car7, gallery: [PHOTOS.car7, PHOTOS.car3, PHOTOS.car6, PHOTOS.car1], note: "Вантажний транспорт, в’їзд за накладною.", arrival: "13:22", departure: "14:05" },
  { id: 112, object: "D2", type: "car", time: "11:16", date: "03.11.2026", title: "AX 3810 EP", desc: "Skoda Octavia · чорний · 1 особа", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car8, gallery: [PHOTOS.car8, PHOTOS.car4, PHOTOS.car5, PHOTOS.car2], note: "Автомобіль співробітника.", arrival: "11:16", departure: "—" },
  { id: 113, object: "X1", type: "people", time: "12:08", date: "03.11.2026", title: "2 особи", desc: "Розмовляють біля паркінгу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people2, note: "Залишили територію через 7 хвилин." },
  { id: 114, object: "B3", type: "people", time: "10:54", date: "03.11.2026", title: "2 особи", desc: "Очікують біля рецепції", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people3, note: "Відвідувачі офісного центру." },
  { id: 115, object: "K7", type: "car", time: "14:02", date: "03.11.2026", title: "KA 6205 AM", desc: "Nissan Qashqai · сірий · 1 особа", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car4, gallery: [PHOTOS.car4, PHOTOS.car1, PHOTOS.car6, PHOTOS.car8], note: "Заїзд через західне КПП.", arrival: "14:02", departure: "—" },
  { id: 116, object: "K7", type: "people", time: "13:38", date: "03.11.2026", title: "3 особи", desc: "Працівники біля зони розвантаження", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Проводять огляд вантажу." },
  { id: 117, object: "K7", type: "people", time: "11:24", date: "03.11.2026", title: "1 особа", desc: "Чоловік біля службового входу", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people3, note: "Пред’явив перепустку." },
  { id: 118, object: "M4", type: "car", time: "14:45", date: "03.11.2026", title: "AA 1048 PI", desc: "Lexus RX · чорний · 2 особи", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car5, gallery: [PHOTOS.car5, PHOTOS.car8, PHOTOS.car2, PHOTOS.car4], note: "Гостьова стоянка.", arrival: "14:45", departure: "—" },
  { id: 119, object: "M4", type: "car", time: "12:19", date: "03.11.2026", title: "BI 7750 CA", desc: "Hyundai Tucson · білий · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2, PHOTOS.car6, PHOTOS.car3, PHOTOS.car7], note: "Зупинка біля центрального входу.", arrival: "12:19", departure: "12:34" },
  { id: 120, object: "M4", type: "people", time: "11:07", date: "03.11.2026", title: "4 особи", desc: "Група біля гостьового входу", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people2, note: "Зайшли до будівлі." },
  { id: 121, object: "P8", type: "car", time: "12:52", date: "03.11.2026", title: "AE 9027 TO", desc: "Kia Sportage · синій · 2 особи", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.car8, gallery: [PHOTOS.car8, PHOTOS.car4, PHOTOS.car5, PHOTOS.car2], note: "Перепустку перевірено.", arrival: "12:52", departure: "13:40" },
  { id: 122, object: "P8", type: "people", time: "11:46", date: "03.11.2026", title: "2 особи", desc: "Очікують біля службового входу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people3, note: "Зустрілися зі співробітником." },
  { id: 123, object: "D2", type: "people", time: "14:28", date: "03.11.2026", title: "5 осіб", desc: "Зміна біля прохідної", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Планова зміна персоналу." },
  { id: 124, object: "D2", type: "people", time: "10:32", date: "03.11.2026", title: "2 особи", desc: "Огляд вантажного майданчика", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people2, note: "Порушень не зафіксовано." },
  { id: 1, object: "T1", type: "car", time: "09:14", date: "28.10.2026", title: "Пікап Peugeot", desc: "Хакі · 2 особи · номер не відповідає реєстрації", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Припаркований уздовж вулиці біля тильної сторони.", arrival: "09:14", departure: "11:02", fresh: true },
  { id: 2, object: "T1", type: "car", time: "10:40", date: "29.10.2026", title: "Пікап Toyota", desc: "Хакі · 3 особи", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Повторно помічений також на стоянці Тест 3.", arrival: "10:40", departure: "12:15", fresh: true },
  { id: 3, object: "T1", type: "car", time: "08:50", date: "30.10.2026", title: "Пікап SsangYong", desc: "Хакі · 2 особи", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Стоїть у сусідньому провулку.", arrival: "08:50", departure: "10:35", fresh: true },
  { id: 4, object: "T1", type: "car", time: "13:05", date: "31.10.2026", title: "Бус Ford", desc: "Темний · 4 особи · завантаження контейнерів", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Контейнери схожі на тару для перевезення бортів БПЛА.", arrival: "13:05", departure: "13:48", fresh: true },
  { id: 5, object: "T1", type: "people", time: "09:20", date: "28.10.2026", title: "2 особи", desc: "Чорний тактичний одяг, переносять контейнери", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.t1People, gallery: [PHOTOS.t1People], note: "Рух від автомобіля до тильної сторони.", fresh: true },
  { id: 6, object: "T1", type: "people", time: "08:35", date: "30.10.2026", title: "4 особи", desc: "Група з боку центральної дороги", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Ранкове скупчення біля об’єкта.", fresh: true },
  { id: 7, object: "T1", type: "note", time: "16:10", date: "31.10.2026", title: "Контейнери та ранкові групи", desc: "Текстова нотатка агента", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Протягом дня люди в чорному тактичному одязі. З автівок кілька разів вивантажували контейнери, схожі на тару для бортів БПЛА. Зранку групи по 3–4 особи.", audio: "00:47", fresh: true },
  { id: 8, object: "T2", type: "car", time: "08:10", date: "27.10.2026", title: "Легкове євро", desc: "Європейський номер · 1 особа · далі поїхало на Тест 3", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Коротка зупинка перед входом.", arrival: "08:10", departure: "08:18", fresh: true },
  { id: 9, object: "T2", type: "car", time: "08:16", date: "29.10.2026", title: "Легкове адаптоване", desc: "Номер під державну реєстрацію · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Авто залишили та зайшли за карткою.", arrival: "08:16", departure: "08:22", fresh: true },
  { id: 10, object: "T2", type: "people", time: "08:20", date: "28.10.2026", title: "Спостерігач", desc: "Тактичний одяг, черга біля входу", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.t2Observer, gallery: [PHOTOS.t2Observer], note: "Стоїть на вході протягом ранкового заходу групи.", fresh: true },
  { id: 11, object: "T2", type: "people", time: "11:05", date: "30.10.2026", title: "1 особа", desc: "Темний одяг, велика сумка", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.t2Person, gallery: [PHOTOS.t2Person], note: "Підозріла особа під час зовнішнього спостереження.", fresh: true },
  { id: 12, object: "T2", type: "people", time: "08:20", date: "27.10.2026", title: "4 особи", desc: "Зустріч на розі, вхід за картками", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Група зайшла всередину будівлі.", fresh: true },
  { id: 13, object: "T2", type: "note", time: "17:05", date: "31.10.2026", title: "Підозра на зовнішнє спостереження", desc: "Текстова нотатка агента", agent: "ВЕКТОР-3", status: "pending", image: "", gallery: [], note: "Збір о 08:20, вхід за картками, авто залишають на Тест 3. Біля входу спостерігач у тактичному одязі. Протягом стеження помічено підозрілих осіб.", audio: "01:12", fresh: true },
  { id: 14, object: "T3", type: "car", time: "08:05", date: "27.10.2026", title: "Легкове євро", desc: "Європейський номер · 3 особи", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Одна з 5–8 ранкових автівок.", arrival: "08:05", departure: "13:40", fresh: true },
  { id: 15, object: "T3", type: "car", time: "07:55", date: "30.10.2026", title: "Пікап Toyota", desc: "Хакі · 2 особи · після Тест 1", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Той самий тип авто, що на Тест 1.", arrival: "07:55", departure: "09:10", fresh: true },
  { id: 16, object: "T3", type: "people", time: "08:30", date: "28.10.2026", title: "3 особи", desc: "Вийшли з авто і рухаються до Тест 1", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Пішки в напрямку тильної сторони.", fresh: true },
  { id: 17, object: "T3", type: "people", time: "08:40", date: "30.10.2026", title: "4 особи", desc: "Вийшли з авто і рухаються до Тест 2", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Напрямок кутового входу.", fresh: true },
  { id: 18, object: "T3", type: "note", time: "08:00", date: "29.10.2026", title: "Ранкове скупчення авто", desc: "Текстова нотатка агента", agent: "СОКІЛ-7", status: "verified", image: "", gallery: [], note: "Зранку 5–8 автівок на єврономерах. З них виходять по 3–4 особи та йдуть до Тест 1 або Тест 2.", audio: "00:36", fresh: true },
  { id: 19, object: "T4", type: "car", time: "09:20", date: "28.10.2026", title: "Легкове євро", desc: "Європейський номер · 2 особи", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Паркування навпроти нежитлової будівлі.", arrival: "09:20", departure: "11:40", fresh: true },
  { id: 20, object: "T4", type: "car", time: "12:10", date: "29.10.2026", title: "Авто за ознаками", desc: "Відповідає первинним ознакам · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Стоїть на вулиці між житловими будинками.", arrival: "12:10", departure: "14:05", fresh: true },
  { id: 21, object: "T4", type: "people", time: "10:15", date: "28.10.2026", title: "3 особи", desc: "Штани мультикам, худі військової тематики", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Вийшли з нежитлової будівлі.", fresh: true },
  { id: 22, object: "T4", type: "people", time: "13:40", date: "31.10.2026", title: "2 особи", desc: "Тактичний одяг, візуально зброя під одягом", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Пройшли до припаркованого авто.", fresh: true },
  { id: 23, object: "T4", type: "note", time: "13:46", date: "31.10.2026", title: "Тактичний одяг і прихована зброя", desc: "Текстова нотатка агента", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Нежитлова будівля між житловими. Виходять особи в мультикам і тактичному одязі, візуально розпізнається зброя під одягом. Багато схожих осіб у районі.", audio: "00:58", fresh: true },
  { id: 24, object: "T5", type: "car", time: "09:00", date: "27.10.2026", title: "Військовий номер", desc: "Військовий номерний знак · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Щоденне ранкове скупчення.", arrival: "09:00", departure: "12:30", fresh: true },
  { id: 25, object: "T5", type: "car", time: "10:15", date: "29.10.2026", title: "Легкове євро", desc: "Європейський номер · 3 особи", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Повторна поява типу авто з Тест 3 і Тест 4.", arrival: "10:15", departure: "15:00", fresh: true },
  { id: 26, object: "T5", type: "people", time: "11:20", date: "28.10.2026", title: "4 особи", desc: "Цивільний і військовий одяг", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Скупчення біля північного краю.", fresh: true },
  { id: 27, object: "T5", type: "people", time: "16:05", date: "30.10.2026", title: "3 особи", desc: "Тактичний одяг", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Вечірнє скупчення.", fresh: true },
  { id: 28, object: "T5", type: "note", time: "16:20", date: "30.10.2026", title: "Щоденне скупчення", desc: "Текстова нотатка агента", agent: "ВЕКТОР-3", status: "verified", image: "", gallery: [], note: "Майже щодня авто на військових і єврономерах. Особи в цивільному, тактичному та військовому одязі.", audio: "00:41", fresh: true },
  { id: 29, object: "T6", type: "car", time: "08:40", date: "28.10.2026", title: "Військовий номер", desc: "Військовий номерний знак · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Пов’язано зі скупченням Тест 5.", arrival: "08:40", departure: "11:50", fresh: true },
  { id: 30, object: "T6", type: "car", time: "09:30", date: "31.10.2026", title: "Легкове євро", desc: "Європейський номер · 2 особи", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Північний сектор пов’язаної зони.", arrival: "09:30", departure: "13:10", fresh: true },
  { id: 31, object: "T6", type: "people", time: "14:10", date: "29.10.2026", title: "5 осіб", desc: "Цивільний і військовий одяг", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Група біля пов’язаної зони.", fresh: true },
  { id: 32, object: "T6", type: "people", time: "10:05", date: "31.10.2026", title: "2 особи", desc: "Тактичний одяг", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Коротке перебування.", fresh: true },
  { id: 33, object: "T6", type: "note", time: "10:12", date: "31.10.2026", title: "Зв’язок Тест 5 і Тест 6", desc: "Текстова нотатка агента", agent: "ФАКЕЛ-2", status: "verified", image: "", gallery: [], note: "Тест 6 повторює режим Тест 5: військові та єврономери, змішаний одяг. Спостереження триває.", audio: "00:29", fresh: true }
];

const plateSeed = {
  1: ["mismatch", "номер не співпадає"], 2: ["match", "номер співпадає"], 3: ["pending", "очікує перевірки номера"], 4: ["match", "номер співпадає"],
  8: ["match", "номер співпадає"], 9: ["mismatch", "номер не співпадає"], 14: ["pending", "очікує перевірки номера"], 15: ["match", "номер співпадає"],
  19: ["mismatch", "номер не співпадає"], 20: ["pending", "очікує перевірки номера"], 24: ["match", "номер співпадає"], 25: ["mismatch", "номер не співпадає"],
  29: ["match", "номер співпадає"], 30: ["pending", "очікує перевірки номера"], 101: ["mismatch", "номер не співпадає"], 103: ["match", "номер співпадає"],
  105: ["match", "номер співпадає"], 107: ["pending", "очікує перевірки номера"], 108: ["mismatch", "номер не співпадає"], 109: ["mismatch", "номер не співпадає"],
  111: ["match", "номер співпадає"], 112: ["pending", "очікує перевірки номера"], 115: ["match", "номер співпадає"], 118: ["mismatch", "номер не співпадає"],
  119: ["match", "номер співпадає"], 121: ["match", "номер співпадає"]
};
events.forEach(event => {
  if (event.type !== "car") return;
  const seed = plateSeed[event.id] || ["pending", "очікує перевірки номера"];
  event.plateMatch = seed[0];
  event.plateReason = seed[1];
});

let agents = [
  { call: "СОКІЛ-7", status: "На зміні", cls: "", objects: ["X1", "B3", "T1", "T3"], count: 0 },
  { call: "ВЕКТОР-3", status: "На зміні", cls: "", objects: ["K7", "P8", "T2", "T5"], count: 0 },
  { call: "ФАКЕЛ-2", status: "На зміні", cls: "", objects: ["M4", "D2", "T4", "T6"], count: 0 },
  { call: "БАРС-9", status: "Заблокований", cls: "blocked", objects: ["K7"], count: 0 }
];
agents.forEach(agent => { agent.count = events.filter(event => event.agent === agent.call).length; });

const state = {
  role: null,
  page: "map",
  objectCode: "T1",
  eventTab: "car",
  notificationsOpen: false,
  sideOpen: false,
  agentUnlocked: false,
  newNotifications: events.filter(event => event.fresh).length
};

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
let activeMap = null;
let placementMarker = null;
let placementMode = false;

function icon(name, size = 18) {
  return `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
}

function refreshIcons() {
  if (window.lucide) lucide.createIcons({ attrs: { "stroke-width": 1.7 } });
}

function roleName() {
  return state.role === "admin" ? "АДМІН" : state.role === "agent" ? "АГЕНТ" : "ГІСТЬ";
}

function login() {
  app.innerHTML = `
    <main class="login-page">
      <section class="login-panel">
        <div class="brand">
          <img class="brand-logo" src="./assets/ors-logo.jpg" alt="ORS — Observation and Recon System">
          <div class="brand-copy">СИСТЕМА СПОСТЕРЕЖЕННЯ ТА РЕКОГНОСТУВАННЯ</div>
        </div>
        <form class="login-box" onsubmit="handleLogin(event)">
          <div class="eyebrow">Захищений доступ</div>
          <h1>Вхід до системи</h1>
          <p>Введіть видані вам облікові дані. Роль і права доступу визначаються автоматично.</p>
          <div class="field"><label for="username">Ім’я користувача</label><input class="input mono" id="username" autocomplete="username" placeholder="Введіть ім’я" required></div>
          <div class="field"><label for="password">Пароль</label><input class="input mono" id="password" type="password" autocomplete="current-password" placeholder="••••••••" required></div>
          <button class="btn primary full" type="submit">Увійти до ORS ${icon("arrow-right")}</button>
          <div class="login-help">
            ДЕМО-ДОСТУПИ
            <div class="demo-accounts">
              <button type="button" class="demo-chip" onclick="demoLogin('111','111')">Адмін · 111 / 111</button>
              <button type="button" class="demo-chip" onclick="demoLogin('agent','111')">Агент</button>
              <button type="button" class="demo-chip" onclick="demoLogin('guest','111')">Гість</button>
            </div>
          </div>
        </form>
        <div class="legal">Захищена інформаційна система · Версія прототипу 1.0</div>
      </section>
      <section class="login-visual">
        <img src="${PHOTOS.login}" alt="Оперативний центр">
        <div class="visual-caption"><div class="eyebrow">Єдиний простір контролю</div><h2>Фіксуйте. Перевіряйте. Дійте на основі фактів.</h2></div>
      </section>
    </main>`;
  refreshIcons();
}

function demoLogin(user, pass) {
  document.querySelector("#username").value = user;
  document.querySelector("#password").value = pass;
}

function handleLogin(event) {
  event.preventDefault();
  const user = document.querySelector("#username").value.trim().toLowerCase();
  const pass = document.querySelector("#password").value;
  if (!pass) return;
  state.role = user === "111" || user.includes("admin") ? "admin" : user.includes("guest") || user.includes("гість") ? "guest" : "agent";
  state.page = state.role === "agent" ? "agent-entry" : "map";
  render();
  toast(`Вхід виконано · ${roleName()}`);
}

function sidebar() {
  const admin = state.role === "admin";
  const agent = state.role === "agent";
  const item = (page, label, ico) => `<button class="nav-item ${state.page === page ? "active" : ""}" onclick="go('${page}')">${icon(ico)}<span>${label}</span></button>`;
  return `
    <aside class="sidebar ${state.sideOpen ? "open" : ""}">
      <div class="side-brand"><img src="./assets/ors-logo.jpg" alt="ORS"></div>
      <nav class="nav">
        <div class="nav-label">РОБОЧИЙ ПРОСТІР</div>
        ${!agent ? item("map", "Оперативна карта", "map") : item("agent-entry", "Об’єкт спостереження", "crosshair")}
        ${!agent ? item("statistics", "Статистика", "chart-no-axes-combined") : ""}
        ${admin ? item("agents", "Агенти", "users") : ""}
        ${admin ? item("access", "Доступи", "key-round") : ""}
        ${!agent ? item("archive", "Архів подій", "archive") : ""}
        <div class="nav-label">СИСТЕМА</div>
        ${item("settings", "Налаштування", "settings")}
      </nav>
      <div class="side-bottom">
        <div class="profile">
          <div class="avatar">${state.role === "admin" ? "AD" : state.role === "agent" ? "С7" : "GS"}</div>
          <div><div class="profile-name">${state.role === "admin" ? "Адміністратор" : state.role === "agent" ? "СОКІЛ-7" : "Гостьовий доступ"}</div><div class="profile-role">${roleName()}</div></div>
          <button class="icon-btn" title="Вийти" onclick="logout()">${icon("log-out")}</button>
        </div>
      </div>
    </aside>`;
}

function topbar(title, subtitle) {
  const isAdmin = state.role === "admin";
  return `
    <header class="topbar">
      <button class="icon-btn mobile-menu" onclick="toggleSide()">${icon("menu")}</button>
      <div class="top-title"><h1>${title}</h1><p>${subtitle}</p></div>
      <div class="top-actions">
        <span class="role-pill">${roleName()}</span>
        ${isAdmin ? `<button class="icon-btn" aria-label="Сповіщення" onclick="toggleNotifications()">${icon("bell")}${state.newNotifications ? `<span class="badge">${state.newNotifications}</span>` : ""}</button>` : ""}
        <button class="icon-btn" aria-label="Вийти" onclick="logout()">${icon("log-out")}</button>
      </div>
    </header>
    ${state.notificationsOpen ? notifications() : ""}`;
}

function shell(content, title, subtitle) {
  app.innerHTML = `<div class="shell">${sidebar()}<section class="main">${topbar(title, subtitle)}<div class="content">${content}</div></section></div>`;
  refreshIcons();
}

function render() {
  modalRoot.innerHTML = "";
  if (!state.role) return login();
  if (state.page === "map") return renderMap();
  if (state.page === "object") return renderObject();
  if (state.page === "agents") return renderAgents();
  if (state.page === "access") return renderAccess();
  if (state.page === "agent-entry") return renderAgentEntry();
  if (state.page === "archive") return renderArchive();
  if (state.page === "statistics") return renderStatistics();
  renderSettings();
}

function go(page) {
  state.page = page;
  state.sideOpen = false;
  state.notificationsOpen = false;
  render();
}

function toggleSide() { state.sideOpen = !state.sideOpen; render(); }
function logout() { Object.assign(state, { role: null, page: "map", notificationsOpen: false, agentUnlocked: false }); render(); }

function objectName(code) {
  return objects.find(object => object.code === code)?.name || code;
}

function eventMeta(type) {
  if (type === "car") return { icon: "car-front", card: "АВТО", name: "АВТОМОБІЛЬ", action: "авто" };
  if (type === "people") return { icon: "users", card: "ЛЮДИ", name: "ЛЮДИ", action: "людей" };
  return { icon: "notebook-pen", card: "НОТАТКА", name: "НОТАТКА", action: "нотатку" };
}

function notifications() {
  const fresh = events.filter(event => event.fresh);
  return `<aside class="notification-panel">
    <div class="panel-head"><strong>Нові матеріали</strong><span class="event-count">${fresh.length}</span></div>
    <div class="notification-list">
      ${fresh.map(event => `<button class="notification" onclick="openFromNotification(${event.id})"><span class="notif-icon">${icon(eventMeta(event.type).icon)}</span><span><p><b>${event.agent}</b> додав ${eventMeta(event.type).action} «${event.title}» на ${objectName(event.object)}</p><time>${event.date} · ${event.time}${event.status === "pending" ? " · очікує перевірки" : ""}</time></span></button>`).join("")}
    </div>
  </aside>`;
}

function toggleNotifications() { state.notificationsOpen = !state.notificationsOpen; state.newNotifications = 0; render(); }
function openFromNotification(id) { state.notificationsOpen = false; state.objectCode = events.find(e => e.id === id).object; state.page = "object"; render(); setTimeout(() => openEvent(id), 50); }

function renderMap() {
  const admin = state.role === "admin";
  const content = `
    <div class="page-heading">
      <div><h2>Оперативна карта</h2><p>Поточний стан об’єктів і остання зафіксована активність</p></div>
      <div class="heading-actions"><button class="btn statistics-cta" onclick="go('statistics')">${icon("chart-no-axes-combined")} Статистика та звіти</button>${admin ? `<button class="btn" onclick="openGuestAccess()">${icon("key-round")} Вхід для гостя</button><button class="btn primary" onclick="openCreateAgent()">${icon("user-plus")} Створити агента</button>` : ""}</div>
    </div>
    <div class="stats">
      <button class="stat stat-button" onclick="openDashboardDetail('objects')"><div class="stat-label">Об’єкти</div><div class="stat-value">${objects.length.toString().padStart(2,"0")}</div><div class="stat-note good">Переглянути список →</div></button>
      <button class="stat stat-button" onclick="go('archive')"><div class="stat-label">Події сьогодні</div><div class="stat-value">${events.length.toString().padStart(2,"0")}</div><div class="stat-note">Відкрити архів →</div></button>
      <button class="stat stat-button" onclick="openDashboardDetail('agents')"><div class="stat-label">Агенти на зміні</div><div class="stat-value">${agents.filter(agent => !agent.cls).length.toString().padStart(2,"0")}</div><div class="stat-note good">Переглянути активність →</div></button>
      <button class="stat stat-button" onclick="openDashboardDetail('${admin ? "pending" : "verified"}')"><div class="stat-label">${admin ? "На перевірці" : "Верифіковано"}</div><div class="stat-value ${admin ? "warn" : ""}">${(admin ? events.filter(e => e.status === "pending").length : events.filter(e => e.status === "verified").length).toString().padStart(2,"0")}</div><div class="stat-note">${admin ? "Потребує уваги" : "Доступні записи"} →</div></button>
    </div>
    <div class="map-layout">
      <div id="map"></div>
      ${admin ? `<button class="map-create-button" onclick="startObjectPlacement()">${icon("map-pin-plus")} Створити об’єкт</button>
      <div class="placement-controls hidden"><span>${icon("move",16)} Перетягніть мітку в потрібне місце</span><button class="btn ghost" onclick="cancelObjectPlacement()">Скасувати</button><button class="btn primary" onclick="confirmObjectPlacement()">Продовжити</button></div>` : ""}
      <aside class="map-side">
        <div class="map-side-head"><div class="map-side-title"><strong>ОБ’ЄКТИ</strong><span class="event-count">${objects.length} активні</span></div></div>
        <div class="map-list">${objects.map(objectRow).join("")}</div>
        <div class="map-footer">${admin ? "Натисніть на порожню ділянку карти, щоб створити новий об’єкт." : "Гостьовий режим. Дані доступні лише для перегляду."}</div>
      </aside>
    </div>`;
  shell(content, "Центр спостереження", "Барселона · 31 жовтня 2026 · 18:40");
  setTimeout(initMap, 0);
}

function objectRow(o) {
  return `<button class="object-row" onclick="openObjectPreview('${o.code}')"><span class="object-code">${o.name.startsWith("Тест ") ? o.name.slice(5) : o.code}</span><span><span class="object-name">${o.name}</span><span class="object-meta">${events.filter(e => e.object === o.code).length} подій сьогодні</span></span><span class="status-dot"></span></button>`;
}

function initMap() {
  if (!window.L || !document.querySelector("#map")) return;
  const map = L.map("map", { zoomControl: false }).setView([41.399, 2.165], 14);
  activeMap = map;
  placementMode = false;
  placementMarker = null;
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(map);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  objects.forEach(o => {
    const label = o.group === "report" ? o.name : o.code;
    const marker = L.marker(o.coords, { bubblingMouseEvents: false, icon: L.divIcon({ className: "ors-marker", html: `<div class="marker-inner"><span>${label}</span></div>`, iconSize: [label.length > 4 ? 78 : 48, 36], iconAnchor: [20, 30] }) }).addTo(map);
    marker.on("click", () => openObjectPreview(o.code));
  });
  if (objects.length) map.fitBounds(objects.map(object => object.coords), { padding: [40, 40] });
  if (state.role === "admin") map.on("click", e => {
    if (placementMode && placementMarker) placementMarker.setLatLng(e.latlng);
    else openCreateObject(e.latlng);
  });
}

function startObjectPlacement() {
  if (!activeMap) return;
  placementMode = true;
  const iconMarkup = L.divIcon({ className: "ors-marker placement-marker", html: `<div class="marker-inner"><span>+</span></div>`, iconSize: [44, 40], iconAnchor: [14, 34] });
  placementMarker = L.marker(activeMap.getCenter(), { draggable: true, icon: iconMarkup }).addTo(activeMap);
  document.querySelector(".map-create-button")?.classList.add("hidden");
  document.querySelector(".placement-controls")?.classList.remove("hidden");
  toast("Перетягніть зелену мітку або натисніть на потрібне місце");
}

function cancelObjectPlacement() {
  if (activeMap && placementMarker) activeMap.removeLayer(placementMarker);
  placementMarker = null;
  placementMode = false;
  document.querySelector(".map-create-button")?.classList.remove("hidden");
  document.querySelector(".placement-controls")?.classList.add("hidden");
}

function confirmObjectPlacement() {
  if (!placementMarker) return;
  const position = placementMarker.getLatLng();
  cancelObjectPlacement();
  openCreateObject(position);
}

function openObjectPreview(code) {
  const o = objects.find(x => x.code === code);
  showModal(`
    <div class="modal-head"><h3>${o.name}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    ${o.photo ? `<img class="modal-photo" src="${o.photo}" alt="${o.name}">` : `<div class="modal-no-photo">${icon("image-off", 28)}<span>Немає фото</span></div>`}
    <div class="modal-body" style="padding-top:0">
      <div class="eyebrow">${o.status}</div><h2 style="margin:7px 0 8px;font-weight:500">${o.name}</h2><p style="color:var(--muted);font-size:13px;line-height:1.5">${o.description}</p>
      <div class="object-details"><div><div class="detail-label">Локація</div><div class="detail-value">${o.address}</div></div><div><div class="detail-label">Координати</div><div class="detail-value mono">${o.coords[0]}, ${o.coords[1]}</div></div><div><div class="detail-label">Подій сьогодні</div><div class="detail-value">${events.filter(e=>e.object===o.code).length}</div></div></div>
    </div>
    <div class="modal-foot">${state.role === "admin" ? `<button class="btn">${icon("pencil")} Редагувати</button>` : ""}<button class="btn primary" onclick="openObject('${o.code}')">Відкрити об’єкт ${icon("arrow-right")}</button></div>`);
}

function openObject(code) { closeModal(); state.objectCode = code; state.page = "object"; state.eventTab = "car"; render(); }

function openCreateObject(latlng) {
  showModal(`
    <div class="modal-head"><h3>СТВОРИТИ ОБ’ЄКТ</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    <div class="modal-body">
      <div class="verify-box">Координати визначено з карти: <span class="mono">${latlng.lat.toFixed(5)}, ${latlng.lng.toFixed(5)}</span></div>
      <div class="input-row"><div class="field"><label>Кодова назва</label><input id="new-object-code" class="input mono" placeholder="Наприклад, R6"></div><div class="field"><label>Назва сектора</label><input id="new-object-name" class="input" placeholder="Робоча назва"></div></div>
      <div class="field"><label>Опис</label><textarea id="new-object-description" class="textarea" placeholder="Коротко опишіть об’єкт і зони контролю"></textarea></div>
      <div class="field"><label>Фото об’єкта</label><button type="button" class="media-slot" onclick="mockMedia(this,'Фото об’єкта')" style="width:100%;aspect-ratio:auto;min-height:90px">${icon("upload")}<span>Додати фото · демо</span></button></div>
    </div>
    <div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Скасувати</button><button class="btn primary" onclick="saveNewObject(${latlng.lat},${latlng.lng})">Створити об’єкт</button></div>`);
}

function saveNewObject(lat, lng) {
  const code = (document.querySelector("#new-object-code").value.trim() || `R${objects.length + 1}`).toUpperCase();
  const name = document.querySelector("#new-object-name").value.trim() || "Новий сектор";
  const description = document.querySelector("#new-object-description").value.trim() || "Нова точка спостереження. Інформація уточнюється.";
  if (objects.some(object => object.code === code)) return toast("Такий код об’єкта вже використовується");
  objects.push({ code, name, group: "base", address: "Координати з карти", coords: [Number(lat.toFixed(4)), Number(lng.toFixed(4))], status: "Активний", photo: PHOTOS.building5, description });
  const baseId = Date.now();
  events.unshift(
    { id: baseId, object: code, type: "car", time: "15:10", date: "31.10.2026", title: "Нове авто", desc: "Дані уточнюються · 1 особа", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.euroCar, gallery: [PHOTOS.euroCar], note: "Демонстраційна подія нового об’єкта.", arrival: "15:10", departure: "—", fresh: true, plateMatch: "pending", plateReason: "очікує перевірки номера" },
    { id: baseId + 1, object: code, type: "car", time: "13:42", date: "31.10.2026", title: "Друге авто", desc: "Дані уточнюються · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2], note: "Демонстраційна подія нового об’єкта.", arrival: "13:42", departure: "14:16", fresh: true, plateMatch: "pending", plateReason: "очікує перевірки номера" },
    { id: baseId + 2, object: code, type: "people", time: "14:25", date: "31.10.2026", title: "2 особи", desc: "Біля головного входу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people1, gallery: [PHOTOS.people1], note: "Демонстраційна подія нового об’єкта.", fresh: true },
    { id: baseId + 3, object: code, type: "people", time: "12:18", date: "31.10.2026", title: "3 особи", desc: "Рухаються територією", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.peopleWalk, gallery: [PHOTOS.peopleWalk], note: "Демонстраційна подія нового об’єкта.", fresh: true },
    { id: baseId + 4, object: code, type: "note", time: "15:20", date: "31.10.2026", title: "Перша нотатка", desc: "Текст спостереження", agent: "СОКІЛ-7", status: "pending", image: "", gallery: [], note: "Нотатка агента щодо нового об’єкта.", audio: "", fresh: true }
  );
  state.newNotifications = events.filter(event => event.fresh).length;
  closeModal();
  render();
  toast(`Об’єкт ${code} створено`);
}

function renderObject() {
  const o = objects.find(x => x.code === state.objectCode) || objects[0];
  const visible = events.filter(e => e.object === o.code && (state.role !== "guest" || e.status === "verified") && e.type === state.eventTab);
  const content = `
    <button class="btn ghost" onclick="go('${state.role === "agent" ? "agent-entry" : "map"}')" style="margin-bottom:14px">${icon("arrow-left")} Назад</button>
    <section class="object-hero">
      <div class="card object-summary">
        <div><div class="eyebrow">ОБ’ЄКТ · ${o.status}</div><h2>${o.name}</h2><p>${o.description}</p></div>
        <div class="object-details"><div><div class="detail-label">Сектор</div><div class="detail-value">${o.name}</div></div><div><div class="detail-label">Координати</div><div class="detail-value mono">${o.coords.join(", ")}</div></div><div><div class="detail-label">Агентів</div><div class="detail-value">2 на зміні</div></div></div>
      </div>
      <div class="card object-photo">${o.photo ? `<img src="${o.photo}" alt="${o.name}">` : `<div class="object-no-photo">${icon("image-off", 28)}<span>Немає фото</span></div>`}</div>
    </section>
    <div class="event-toolbar">
      <div class="tabs"><button class="tab ${state.eventTab==="car"?"active":""}" onclick="setEventTab('car')">${icon("car-front",15)} Авто</button><button class="tab ${state.eventTab==="people"?"active":""}" onclick="setEventTab('people')">${icon("users",15)} Люди</button><button class="tab ${state.eventTab==="note"?"active":""}" onclick="setEventTab('note')">${icon("notebook-pen",15)} Нотатки</button></div>
      <span class="event-count">${visible.length} записів</span>
      ${(state.role === "admin" || state.role === "agent") ? `<button class="btn primary" style="margin-left:auto" onclick="chooseEventType()">${icon("plus")} Додати подію</button>` : ""}
    </div>
    <section class="event-list">${visible.length ? visible.map(eventCard).join("") : `<div class="empty">${icon("inbox")}<br>Подій у цій категорії немає</div>`}</section>`;
  shell(content, o.name, o.address);
}

function plateLabel(value) {
  if (value === "match") return "Номер співпадає";
  if (value === "mismatch") return "Номер не співпадає";
  return "Номер очікує перевірки";
}

function plateControl(event, reopen) {
  if (event.type !== "car") return "";
  if (state.role !== "admin") return `<span class="plate-pill ${event.plateMatch || "pending"}">${plateLabel(event.plateMatch)}</span>`;
  return `<div class="plate-switch" onclick="event.stopPropagation()"><button type="button" class="${event.plateMatch === "mismatch" ? "mismatch" : ""}" onclick="setPlateMatch(${event.id},'mismatch',${reopen})">Не співпадає</button><button type="button" class="${event.plateMatch === "match" ? "match" : ""}" onclick="setPlateMatch(${event.id},'match',${reopen})">Співпадає</button></div>`;
}

function setPlateMatch(id, value, reopen) {
  if (state.role !== "admin") return;
  const event = events.find(item => item.id === id);
  if (!event || event.type !== "car") return;
  event.plateMatch = value;
  event.plateReason = value === "match" ? "номер співпадає" : "номер не співпадає";
  render();
  if (reopen) openEvent(id);
  toast(event.plateReason);
}

function eventCard(e) {
  const meta = eventMeta(e.type);
  const visual = e.image
    ? `<img src="${e.image}" alt="${e.title}">`
    : e.type === "note"
      ? `<div class="note-visual"><b>${e.title}</b><p>${e.note}</p></div>`
      : `<div class="no-photo-visual">${icon("image-off", 26)}<b>Немає фото</b></div>`;
  return `<article class="card event-card ${e.type === "note" ? "note-card" : ""}" onclick="openEvent(${e.id})">
    <div class="event-image">${visual}<span class="event-type">${meta.card}</span>${e.type === "car" ? `<span class="plate-dot ${e.plateMatch || "pending"}"></span>` : ""}</div>
    <div class="event-body"><div class="event-head"><div><h3>${e.title}</h3><div class="event-desc">${e.desc}</div></div><time>${e.date}<br>${e.time}</time></div>
    <div class="event-meta"><span>${icon("user-round",12)} ${e.agent}</span><span>${icon("map-pin",12)} ${objectName(e.object)}</span>${e.audio ? `<span>${icon("mic",12)} Диктофон ${e.audio}</span>` : ""}</div>
    <div class="card-status">${plateControl(e, false)}<span class="verification ${e.status === "verified" ? "ok" : "pending"}">${e.status === "verified" ? "ПІДТВЕРДЖЕНО" : "ОЧІКУЄ ПЕРЕВІРКИ"}</span></div></div>
  </article>`;
}

function setEventTab(tab) { state.eventTab = tab; render(); }

function evidenceLabel(src) {
  if (src.includes("map-")) return "Мапа з доповідної";
  if (src.includes("t1-people")) return "Особи та контейнери";
  if (src.includes("t1-yard")) return "Внутрішній двір";
  if (src.includes("t2-building")) return "Будівля та вхід";
  if (src.includes("t2-observer")) return "Спостерігач біля входу";
  if (src.includes("t2-person")) return "Особа з великою сумкою";
  if (src.includes("t3-street")) return "Паркувальний сектор";
  if (src.includes("t4-building")) return "Нежитлова будівля";
  return "Фото з доповідної";
}

function openEvent(id) {
  const e = events.find(x => x.id === id);
  const meta = eventMeta(e.type);
  const canVerify = state.role === "admin" && e.status === "pending";
  const gallery = (e.gallery || [e.image]).filter(Boolean);
  showModal(`
    <div class="modal-head"><h3>${meta.name} · ${objectName(e.object)}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    ${e.image ? `<img class="modal-photo" src="${e.image}" alt="${e.title}">` : e.type !== "note" ? `<div class="modal-no-photo">${icon("image-off", 28)}<span>Немає фото</span></div>` : ""}
    <div class="modal-body" style="padding-top:0">
      ${canVerify ? `<div class="verify-box">${icon("clock",14)} Подія надійшла від агента ${e.agent} і очікує перевірки адміністратора.</div>` : ""}
      <div class="event-head"><div><div class="eyebrow">${meta.name}</div><h2 class="mono" style="margin:7px 0">${e.title}</h2></div><time>${e.date}<br>${e.time}</time></div>
      <p style="color:var(--muted);font-size:13px">${e.desc}</p>
      <div class="object-details"><div><div class="detail-label">Додав агент</div><div class="detail-value mono">${e.agent}</div></div><div><div class="detail-label">Дата і час запису</div><div class="detail-value mono">${e.date} · ${e.time}</div></div><div><div class="detail-label">Об’єкт</div><div class="detail-value mono">${objectName(e.object)}</div></div></div>
      ${e.type === "car" ? `<div class="object-details"><div><div class="detail-label">Прибуття</div><div class="detail-value mono">${e.arrival || e.time}</div></div><div><div class="detail-label">Вибуття</div><div class="detail-value mono">${e.departure || "—"}</div></div></div><div class="form-section">ПЕРЕВІРКА НОМЕРА</div><p style="font-size:13px">${e.plateReason || plateLabel(e.plateMatch)}</p>${plateControl(e, true)}` : ""}
      <div class="form-section">${e.type === "note" ? "ТЕКСТ НОТАТКИ" : "ПРИМІТКА"}</div><p style="font-size:13px;line-height:1.55">${e.note}</p>
      ${e.audio ? `<div class="form-section">ДИКТОФОН</div><button type="button" class="media-slot" style="width:100%;aspect-ratio:auto;min-height:74px" onclick="toast('Демо: відтворення без реального аудіофайлу')">${icon("mic")}<span>Запис ${e.audio} · розпізнаний текст вище</span></button>` : ""}
      ${gallery.length ? `<div class="form-section">ФОТОМАТЕРІАЛИ</div><div class="evidence-grid">${gallery.map(src => `<button class="evidence" onclick="previewImage('${src}')"><img src="${src}" alt="${evidenceLabel(src)}"><span>${evidenceLabel(src)}</span></button>`).join("")}</div>` : e.type !== "note" ? `<div class="form-section">ФОТОМАТЕРІАЛИ</div><div class="no-photo-inline">${icon("image-off", 18)} Немає фото</div>` : ""}
    </div>
    <div class="modal-foot">
      ${state.role === "admin" ? `<button class="btn danger" onclick="deleteEvent(${e.id})">${icon("trash-2")} Видалити</button><button class="btn">${icon("pencil")} Редагувати</button>` : ""}
      ${canVerify ? `<button class="btn primary" onclick="verifyEvent(${e.id})">${icon("shield-check")} Верифікувати</button>` : ""}
      ${state.role !== "admin" ? `<button class="btn primary" onclick="closeModal()">Закрити</button>` : ""}
    </div>`, "wide");
}

function verifyEvent(id) { events.find(e => e.id === id).status = "verified"; closeModal(); render(); toast("Подію верифіковано та відкрито для перегляду"); }
function deleteEvent(id) { events = events.filter(e => e.id !== id); closeModal(); render(); toast("Подію видалено"); }
function previewImage(src) { showModal(`<div class="modal-head"><h3>ПЕРЕГЛЯД МАТЕРІАЛУ</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><img src="${src}" style="width:100%;max-height:75dvh;object-fit:contain;background:#050605" alt="Матеріал">`, "wide"); }

function chooseEventType() {
  showModal(`<div class="modal-head"><h3>НОВА ПОДІЯ</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><p style="color:var(--muted);margin-top:0">Оберіть тип інформації, яку потрібно зафіксувати.</p><div class="choice-grid"><button class="card" onclick="openEventForm('car')">${icon("car-front",30)}<br><b>Автомобіль</b></button><button class="card" onclick="openEventForm('people')">${icon("users",30)}<br><b>Люди</b></button><button class="card" onclick="openEventForm('note')">${icon("notebook-pen",30)}<br><b>Нотатка</b></button></div></div>`);
}

function openEventForm(type) {
  const car = type === "car";
  const note = type === "note";
  showModal(`
    <div class="modal-head"><h3>ДОДАТИ · ${eventMeta(type).name}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    <form onsubmit="saveEvent(event,'${type}')">
      <div class="modal-body">
        ${note ? `<div class="field"><label>Тема *</label><input id="event-title" class="input" placeholder="Наприклад, особлива подія біля входу" required></div><div class="field"><label>Текст нотатки *</label><textarea id="event-note" class="textarea" placeholder="Опишіть, що сталося" required></textarea></div><button type="button" class="btn" id="dictation-button" onclick="toggleDictation(this)">${icon("mic")} <span>Записати диктофон</span></button><p class="dictation-help">Мікрофон не вмикається. Після демонстраційного запису текст з’явиться в нотатці.</p>` : `<div class="input-row">${car ? `<div class="field"><label>Номер або тип авто *</label><input id="event-title" class="input mono" placeholder="Пікап Toyota" required></div><div class="field"><label>Опис</label><input id="event-desc" class="input" placeholder="Хакі · 2 особи"></div>` : `<div class="field"><label>Кількість людей *</label><input id="event-title" class="input" type="number" min="1" value="1" required></div><div class="field"><label>Що відбувається</label><input id="event-desc" class="input" placeholder="Короткий опис"></div>`}</div>
        <div class="input-row"><div class="field"><label>${car ? "Колір" : "Час"}</label><input class="input" value="${car ? "" : "18:40"}" placeholder="${car ? "Хакі" : ""}"></div><div class="field"><label>${car ? "Кількість людей" : "Зона спостереження"}</label><input class="input" placeholder="${car ? "1" : "Головний вхід"}"></div></div>
        ${car ? `<div class="input-row"><div class="field"><label>Час заїзду</label><input class="input" type="time" value="18:40"></div><div class="field"><label>Час виїзду</label><input class="input" type="time"></div></div>` : ""}
        <div class="field"><label>Додаткова інформація</label><textarea id="event-note" class="textarea" placeholder="Важливі деталі та спостереження"></textarea></div>
        <div class="form-section">ФОТО · ОБЕРІТЬ РАКУРС І ДЖЕРЕЛО</div>
        <div class="capture-grid">${car ? captureGroup("Спереду") + captureGroup("Ззаду") + captureGroup("Збоку") + captureGroup("Інше") : captureGroup("Основне фото") + captureGroup("Додаткове фото")}</div>`}
      </div>
      <div class="modal-foot"><button type="button" class="btn ghost" onclick="closeModal()">Скасувати</button><button type="submit" class="btn primary">${icon("save")} Зберегти подію</button></div>
    </form>`, "wide");
}

let dictationTimer = null;
function toggleDictation(button) {
  if (button.dataset.state === "recording") return;
  button.dataset.state = "recording";
  const note = document.querySelector("#event-note");
  let seconds = 0;
  clearInterval(dictationTimer);
  dictationTimer = setInterval(() => {
    seconds += 1;
    button.querySelector("span").textContent = `Запис · 00:0${seconds}`;
    if (seconds >= 4) {
      clearInterval(dictationTimer);
      const transcript = "Особлива подія біля об’єкта. Зафіксовано нетиповий рух людей і транспорту. Потрібна додаткова перевірка.";
      note.value = note.value.trim() ? `${note.value.trim()}\n${transcript}` : transcript;
      note.dataset.audio = "00:04";
      button.dataset.state = "done";
      button.querySelector("span").textContent = "Розпізнано · 00:04";
      toast("Мікрофон не вмикався. Демонстраційний запис розпізнано в текст.");
    }
  }, 450);
}

function captureGroup(label) {
  return `<div class="capture-group"><strong>${label}</strong><div><button type="button" class="capture-action" onclick="mockMedia(this,'Камера')">${icon("camera",15)} <span>Камера</span></button><button type="button" class="capture-action" onclick="mockMedia(this,'Файли')">${icon("folder-open",15)} <span>Файли</span></button></div></div>`;
}
function mediaSlot(label, ico="camera") { return `<button type="button" class="media-slot" onclick="mockMedia(this,'${label}')">${icon(ico)}<span>${label}</span></button>`; }
function mockMedia(element, source) { element.style.borderStyle = "solid"; element.style.color = "var(--accent-strong)"; element.querySelector("span").textContent = `${source} · демо`; toast("Демонстраційна заглушка — доступ до пристрою вимкнено"); }

function saveEvent(ev, type) {
  ev.preventDefault();
  const titleInput = document.querySelector("#event-title").value.trim();
  const noteField = document.querySelector("#event-note");
  const descField = document.querySelector("#event-desc");
  const desc = descField?.value || (type === "car" ? "Автомобіль · дані уточнюються" : type === "note" ? "Диктофон або текстова нотатка" : "Спостереження за групою людей");
  events.unshift({
    id: Date.now(),
    object: state.objectCode,
    type,
    time: "18:40",
    date: "31.10.2026",
    title: type === "people" ? `${titleInput} осіб` : titleInput,
    desc,
    agent: state.role === "agent" ? "СОКІЛ-7" : "АДМІН",
    status: state.role === "admin" ? "verified" : "pending",
    image: "",
    gallery: [],
    note: noteField.value || "Без додаткового тексту.",
    audio: noteField.dataset.audio || "",
    arrival: "18:40",
    departure: "—",
    fresh: true,
    plateMatch: type === "car" ? "pending" : "",
    plateReason: type === "car" ? "очікує перевірки номера" : ""
  });
  state.newNotifications = events.filter(event => event.fresh).length;
  closeModal();
  if (type === "note") state.eventTab = "note";
  render();
  toast(state.role === "agent" ? "Подію збережено та додано до нових сповіщень" : "Подію збережено");
}

function openDashboardDetail(kind) {
  if (kind === "objects") {
    return showModal(`<div class="modal-head"><h3>УСІ ОБ’ЄКТИ · БАРСЕЛОНА</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="detail-list">${objects.map(o => `<button onclick="openObject('${o.code}')"><span class="object-code">${o.name.startsWith("Тест ") ? o.name.slice(5) : o.code}</span><span><b>${o.name}</b><small>${o.address} · ${events.filter(e=>e.object===o.code).length} подій</small></span>${icon("chevron-right")}</button>`).join("")}</div></div>`);
  }
  if (kind === "agents") {
    return showModal(`<div class="modal-head"><h3>АКТИВНІСТЬ АГЕНТІВ</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="detail-list">${agents.map(a => `<div class="detail-static"><span class="avatar">${a.call.slice(0,2)}</span><span><b>${a.call}</b><small>${a.status} · ${a.count} подій · ${a.objects.map(objectName).join(", ")}</small></span><span class="status ${a.cls}">${a.status}</span></div>`).join("")}</div></div>`);
  }
  const filtered = events.filter(e => kind === "pending" ? e.status === "pending" : e.status === "verified").slice(0, 8);
  showModal(`<div class="modal-head"><h3>${kind === "pending" ? "ПОДІЇ НА ПЕРЕВІРЦІ" : "ВЕРИФІКОВАНІ ПОДІЇ"}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="detail-list">${filtered.map(e => `<button onclick="closeModal();openObject('${e.object}');setTimeout(()=>openEvent(${e.id}),50)"><span class="object-code">${objectName(e.object).replace("Тест ", "")}</span><span><b>${e.title}</b><small>${e.date} · ${e.time} · ${e.agent}</small></span>${icon("chevron-right")}</button>`).join("")}</div></div>`);
}

let vehicleAnalytics = [];

function minutesBetween(start, end) {
  if (!start || !end || end === "—") return 0;
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);
  return Math.max(0, endHour * 60 + endMinute - (startHour * 60 + startMinute));
}

function formatMinutes(total) {
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function eventsFor(subject) {
  if (!subject || subject === "report") return events.filter(event => objects.find(object => object.code === event.object)?.group === "report");
  if (subject === "all") return events.slice();
  if (objects.some(object => object.code === subject)) return events.filter(event => event.object === subject);
  return events.filter(event => event.title === subject);
}

function refreshVehicleAnalytics(source = events) {
  const grouped = new Map();
  source.filter(event => event.type === "car").forEach(event => {
    const row = grouped.get(event.title) || { plate: event.title, model: event.desc, visits: 0, objects: new Set(), minutes: 0 };
    row.visits += 1;
    row.objects.add(objectName(event.object));
    row.minutes += minutesBetween(event.arrival, event.departure);
    grouped.set(event.title, row);
  });
  vehicleAnalytics = [...grouped.values()].map(row => ({
    plate: row.plate,
    model: row.model,
    visits: row.visits,
    objects: [...row.objects].join(", "),
    objectCount: row.objects.size,
    duration: formatMinutes(row.minutes),
    minutes: row.minutes,
    risk: row.objects.size >= 3 ? "Підвищений" : row.objects.size === 2 ? "Середній" : "Звичайний"
  })).sort((a, b) => b.visits - a.visits || b.minutes - a.minutes);
}

function renderStatistics() {
  const source = eventsFor("report");
  refreshVehicleAnalytics(source);
  const top = vehicleAnalytics[0];
  const longest = [...vehicleAnalytics].sort((a, b) => b.minutes - a.minutes)[0];
  const repeats = vehicleAnalytics.filter(item => item.objectCount > 1);
  const reportObjects = objects.filter(object => object.group === "report");
  const counts = reportObjects.map(object => source.filter(event => event.object === object.code).length);
  const maxCount = Math.max(...counts, 1);
  const hours = [0, 0, 0, 0, 0, 0];
  source.forEach(event => { hours[Math.min(5, Math.floor(Number(event.time.split(":")[0]) / 4))] += 1; });
  const maxHour = Math.max(...hours, 1);
  const content = `
    <div class="page-heading"><div><h2>Аналітика та статистика</h2><p>Матеріали доповідної за ${reportCase.label}, перенесені на карту Барселони</p></div><div class="heading-actions"><button class="btn" onclick="openReport('report')">${icon("file-text")} Приклад PDF-звіту</button><button class="btn primary" onclick="mockPdf()">${icon("file-down")} Сформувати PDF</button></div></div>
    <section class="card filter-panel">
      <div class="field"><label>Період від</label><input class="input" type="date" value="${reportCase.from}"></div>
      <div class="field"><label>Період до</label><input class="input" type="date" value="${reportCase.to}"></div>
      <div class="field"><label>Об’єкти</label><details class="check-dropdown"><summary id="stats-object-label">Тест 1–7</summary><div class="check-menu"><div class="check-menu-actions"><button type="button" class="btn ghost" onclick="setStatsObjects(true)">Усі</button><button type="button" class="btn ghost" onclick="setStatsObjects(false)">Зняти</button><button type="button" class="btn ghost" onclick="setStatsObjects('report')">Тест 1–7</button></div>${objects.map(object => `<label class="check-line"><input class="stats-object" type="checkbox" value="${object.code}" ${object.group === "report" ? "checked" : ""} onchange="updateStatsObjectLabel()"> ${object.name}</label>`).join("")}</div></details></div>
      <div class="field"><label>Тип події</label><select class="select"><option>Авто, люди та нотатки</option><option>Лише авто</option><option>Лише люди</option><option>Лише нотатки</option></select></div>
      <button class="btn primary" onclick="applyStatsFilter()">${icon("sliders-horizontal")} Застосувати</button>
    </section>
    <div class="analytics-metrics">
      <article class="card metric"><span>${icon("repeat-2")}</span><div><small>Найчастіше авто</small><strong>${top.plate}</strong><p>${top.visits} появ · ${top.objects}</p></div></article>
      <article class="card metric"><span>${icon("timer")}</span><div><small>Найдовша стоянка</small><strong>${longest.duration}</strong><p>${longest.plate} · ${longest.objects}</p></div></article>
      <article class="card metric"><span>${icon("notebook-pen")}</span><div><small>Нотатки агентів</small><strong>${source.filter(event => event.type === "note").length}</strong><p>З них з диктофоном: ${source.filter(event => event.audio).length}</p></div></article>
      <article class="card metric"><span>${icon("scan-search")}</span><div><small>Повторні появи</small><strong>${String(repeats.length).padStart(2, "0")} типи</strong><p>На двох і більше об’єктах</p></div></article>
    </div>
    <section class="alert-card">
      <div class="alert-symbol">${icon("triangle-alert",24)}</div><div><div class="eyebrow">АНАЛІТИЧНИЙ СИГНАЛ</div><h3>${repeats[0].plate} зафіксовано біля кількох об’єктів</h3><p>Тип авто помічено на <b>${repeats[0].objects.split(", ").join("</b>, <b>")}</b>. Це дані з доповідної за ${reportCase.label}.</p></div><button class="btn" onclick="openReport('${repeats[0].plate}')">Детальний звіт</button>
    </section>
    <div class="analytics-grid">
      <section class="card analytics-card"><div class="section-head"><div><span class="eyebrow">НАВАНТАЖЕННЯ</span><h3>Події за об’єктами</h3></div><span class="event-count">${reportCase.label}</span></div><div class="bar-chart">${reportObjects.map((o,i)=>`<div><span>${o.name.replace("Тест ", "")}</span><i style="height:${Math.max(8, counts[i] / maxCount * 100)}%"></i><b>${counts[i]}</b></div>`).join("")}</div></section>
      <section class="card analytics-card"><div class="section-head"><div><span class="eyebrow">РОЗПОДІЛ</span><h3>Активність за часом</h3></div></div><div class="hour-grid">${["00–04","04–08","08–12","12–16","16–20","20–24"].map((h,i)=>`<div><span>${h}</span><strong>${hours[i]}</strong><i style="width:${Math.max(6, hours[i] / maxHour * 100)}%"></i></div>`).join("")}</div></section>
    </div>
    <section class="card data-section"><div class="section-head"><div><span class="eyebrow">ТРАНСПОРТ</span><h3>Порівняння автомобілів</h3></div><select class="select sort-select" onchange="sortVehicleTable(this.value)"><option value="visits">За кількістю появ</option><option value="duration">За тривалістю</option><option value="plate">За номером</option></select></div><div class="table-wrap"><table><thead><tr><th>Номер</th><th>Автомобіль</th><th>Появи</th><th>Об’єкти</th><th>Час на об’єктах</th><th>Оцінка</th></tr></thead><tbody id="vehicle-table">${vehicleRows(vehicleAnalytics)}</tbody></table></div></section>
    ${reportBuilderHtml()}`;
  shell(content, "Статистика", "Барселона · аналітичний центр ORS");
}

function vehicleRows(rows) {
  return rows.map(v => `<tr><td class="mono">${v.plate}</td><td>${v.model}</td><td>${v.visits}</td><td class="mono">${v.objects}</td><td class="mono">${v.duration}</td><td><span class="risk ${v.risk === "Підвищений" ? "high" : ""}">${v.risk}</span></td></tr>`).join("");
}

function sortVehicleTable(value) {
  const sorted = [...vehicleAnalytics].sort((a,b) => value === "plate" ? a.plate.localeCompare(b.plate) : value === "duration" ? b.duration.localeCompare(a.duration) : b.visits-a.visits);
  document.querySelector("#vehicle-table").innerHTML = vehicleRows(sorted);
}

const reportSectionList = [
  ["summary", "Підсумок кількостей"],
  ["conclusion", "Висновок"],
  ["criteria", "Критерії"],
  ["objects", "Опис об’єктів і хронологія"],
  ["notes", "Нотатки агентів"],
  ["photos", "Фотоматеріали"],
  ["people", "Кількість людей"],
  ["repeats", "Повторні номери авто"],
  ["colorMake", "Повторні колір і марка"],
  ["duration", "Час на об’єкті"],
  ["agents", "Агенти"],
  ["plates", "Перевірка номерів"],
  ["closing", "Статус роботи"]
];

function reportBuilderHtml() {
  const objectChecks = objects.map(object => `<label class="check-line"><input class="report-object" type="checkbox" value="${object.code}" ${object.group === "report" ? "checked" : ""}> ${object.name}</label>`).join("");
  const sectionChecks = reportSectionList.map(([key, label]) => `<label class="check-line"><input class="report-section" type="checkbox" value="${key}" checked> ${label}</label>`).join("");
  return `<section class="report-builder card"><div><span class="eyebrow">ЗВІТНІСТЬ</span><h3>Сформувати звіт</h3><p>Позначте об’єкти і розділи, які мають потрапити в попередній перегляд.</p></div><div class="check-block"><div class="check-head"><b>Об’єкти</b><button type="button" class="btn ghost" onclick="setReportObjects(true)">Усі</button><button type="button" class="btn ghost" onclick="setReportObjects(false)">Зняти</button><button type="button" class="btn ghost" onclick="setReportObjects('report')">Тест 1–7</button></div><div class="check-grid">${objectChecks}</div></div><div class="check-block"><div class="check-head"><b>Що включити</b><button type="button" class="btn ghost" onclick="setReportSections(true)">Усі розділи</button><button type="button" class="btn ghost" onclick="setReportSections(false)">Зняти</button></div><div class="check-grid">${sectionChecks}</div></div><div class="report-actions"><button class="btn" onclick="openConfiguredReport()">${icon("eye")} Переглянути</button><button class="btn primary" onclick="mockPdf()">${icon("file-down")} PDF-звіт</button></div></section>`;
}

function setReportObjects(mode) {
  document.querySelectorAll(".report-object").forEach(input => {
    const object = objects.find(item => item.code === input.value);
    input.checked = mode === "report" ? object?.group === "report" : Boolean(mode);
  });
}

function setReportSections(on) {
  document.querySelectorAll(".report-section").forEach(input => { input.checked = on; });
}

function selectedReport() {
  return {
    codes: [...document.querySelectorAll(".report-object:checked")].map(input => input.value),
    sections: new Set([...document.querySelectorAll(".report-section:checked")].map(input => input.value))
  };
}

function openConfiguredReport() {
  const selection = selectedReport();
  if (!selection.codes.length) return toast("Оберіть хоча б один об’єкт");
  if (!selection.sections.size) return toast("Оберіть хоча б один розділ звіту");
  openReport(selection);
}

function setStatsObjects(mode) {
  document.querySelectorAll(".stats-object").forEach(input => {
    const object = objects.find(item => item.code === input.value);
    input.checked = mode === "report" ? object?.group === "report" : Boolean(mode);
  });
  updateStatsObjectLabel();
}

function updateStatsObjectLabel() {
  const label = document.querySelector("#stats-object-label");
  const selected = [...document.querySelectorAll(".stats-object:checked")];
  if (!label) return;
  const reportCodes = objects.filter(object => object.group === "report").map(object => object.code);
  const selectedCodes = selected.map(input => input.value);
  if (!selected.length) label.textContent = "Нічого не обрано";
  else if (selected.length === objects.length) label.textContent = "Усі об’єкти";
  else if (selectedCodes.length === reportCodes.length && reportCodes.every(code => selectedCodes.includes(code))) label.textContent = "Тест 1–7";
  else if (selected.length <= 2) label.textContent = selectedCodes.map(objectName).join(", ");
  else label.textContent = `Обрано ${selected.length}`;
}

function applyStatsFilter() {
  const codes = [...document.querySelectorAll(".stats-object:checked")].map(input => input.value);
  if (!codes.length) return toast("Оберіть хоча б один об’єкт");
  document.querySelectorAll(".report-object").forEach(input => { input.checked = codes.includes(input.value); });
  openConfiguredReport();
}

function carColor(event) {
  return (event.desc || "").split("·")[0].trim() || "Не вказано";
}

function peopleTotal(list) {
  return list.filter(event => event.type === "people").reduce((sum, event) => {
    const count = parseInt(event.title, 10);
    return sum + (Number.isFinite(count) ? count : 1);
  }, 0);
}

function openReport(subject) {
  const allSections = new Set(reportSectionList.map(item => item[0]));
  let codes;
  let sections = allSections;
  let heading;
  let source;
  if (subject && typeof subject === "object" && subject.codes) {
    codes = subject.codes;
    sections = subject.sections;
    heading = codes.map(objectName).join(", ");
    source = events.filter(event => codes.includes(event.object));
  } else if (!subject || subject === "report") {
    codes = objects.filter(object => object.group === "report").map(object => object.code);
    heading = "Тест 1–Тест 7";
    source = events.filter(event => codes.includes(event.object));
  } else if (subject === "all") {
    codes = objects.map(object => object.code);
    heading = "Усі об’єкти";
    source = events.filter(event => codes.includes(event.object));
  } else if (objects.some(object => object.code === subject)) {
    codes = [subject];
    heading = objectName(subject);
    source = events.filter(event => event.object === subject);
  } else {
    source = events.filter(event => event.title === subject);
    codes = [...new Set(source.map(event => event.object))];
    heading = subject;
  }
  const visibleObjects = objects.filter(object => codes.includes(object.code));
  refreshVehicleAnalytics(source);
  const show = key => sections.has(key);
  const cars = source.filter(event => event.type === "car");
  const people = source.filter(event => event.type === "people");
  const notes = source.filter(event => event.type === "note");
  const repeats = vehicleAnalytics.filter(item => item.visits > 1 || item.objectCount > 1);
  const colorGroups = new Map();
  cars.forEach(event => {
    const color = carColor(event);
    const key = `${event.title}|${color}`;
    const row = colorGroups.get(key) || { title: event.title, color, visits: 0, objects: new Set() };
    row.visits += 1;
    row.objects.add(objectName(event.object));
    colorGroups.set(key, row);
  });
  const colorRepeats = [...colorGroups.values()].filter(row => row.visits > 1 || row.objects.size > 1);
  const blocks = [];
  if (show("summary")) blocks.push(`<div class="report-summary"><div><small>Подій</small><b>${source.length}</b></div><div><small>Авто</small><b>${cars.length}</b></div><div><small>Люди</small><b>${people.length}</b></div><div><small>Нотатки</small><b>${notes.length}</b></div></div>`);
  if (show("conclusion")) blocks.push(`<h4>Висновок</h4><p>${reportCase.intro}</p>`);
  if (show("criteria")) blocks.push(`<h4>Критерії</h4><p>${reportCase.criteria.join(" · ")}</p>`);
  if (show("objects")) blocks.push(visibleObjects.map(object => {
    const related = source.filter(event => event.object === object.code && event.type !== "note");
    return `<h4>${object.name}</h4><p><b>${object.address}</b><br>${object.description}</p><p>${related.map(event => `${event.date} ${event.time} · ${eventMeta(event.type).card} · ${event.title}`).join("<br>") || "Подій цього типу немає."}</p>`;
  }).join(""));
  if (show("notes")) blocks.push(`<h4>Нотатки агентів</h4>${notes.map(event => `<p><b>${objectName(event.object)} · ${event.title}</b><br>${event.note}</p>`).join("") || "<p>Нотаток за обраними об’єктами немає.</p>"}`);
  if (show("photos")) blocks.push(visibleObjects.map(object => {
    const related = source.filter(event => event.object === object.code);
    const images = [...new Set([object.photo, ...related.filter(event => event.type !== "note").flatMap(event => (event.gallery || [event.image]).filter(Boolean))].filter(Boolean))].slice(0, 4);
    return `<h4>Фото · ${object.name}</h4>${images.length ? `<div class="report-photos">${images.map(src => `<img src="${src}" alt="${evidenceLabel(src)}">`).join("")}</div>` : `<div class="no-photo-inline">${icon("image-off", 18)} Немає фото</div>`}`;
  }).join(""));
  if (show("people")) blocks.push(`<h4>Кількість людей</h4><p>Груп: ${people.length}. Разом осіб за картками: ${peopleTotal(people)}.</p><table><thead><tr><th>Об’єкт</th><th>Група</th><th>Опис</th><th>Час</th></tr></thead><tbody>${people.map(event => `<tr><td>${objectName(event.object)}</td><td>${event.title}</td><td>${event.desc}</td><td>${event.date} ${event.time}</td></tr>`).join("") || `<tr><td colspan="4">Немає</td></tr>`}</tbody></table>`);
  if (show("repeats")) blocks.push(`<h4>Повторні номери авто</h4>${repeats.length ? `<table><thead><tr><th>Номер або тип</th><th>Появи</th><th>Об’єкти</th><th>Час</th></tr></thead><tbody>${repeats.map(item => `<tr><td>${item.plate}</td><td>${item.visits}</td><td>${item.objects}</td><td>${item.duration}</td></tr>`).join("")}</tbody></table>` : "<p>Повторних номерів за обраними об’єктами немає.</p>"}`);
  if (show("colorMake")) blocks.push(`<h4>Повторні колір і марка</h4>${colorRepeats.length ? `<table><thead><tr><th>Марка / тип</th><th>Колір</th><th>Появи</th><th>Об’єкти</th></tr></thead><tbody>${colorRepeats.map(row => `<tr><td>${row.title}</td><td>${row.color}</td><td>${row.visits}</td><td>${[...row.objects].join(", ")}</td></tr>`).join("")}</tbody></table>` : "<p>Повторів кольору та марки за обраними об’єктами немає.</p>"}`);
  if (show("duration")) blocks.push(`<h4>Час на об’єкті</h4><table><thead><tr><th>Авто</th><th>Об’єкт</th><th>Заїзд</th><th>Виїзд</th></tr></thead><tbody>${cars.map(event => `<tr><td>${event.title}</td><td>${objectName(event.object)}</td><td>${event.arrival || event.time}</td><td>${event.departure || "—"}</td></tr>`).join("") || `<tr><td colspan="4">Немає</td></tr>`}</tbody></table>`);
  if (show("agents")) blocks.push(`<h4>Агенти</h4><p>${[...new Set(source.map(event => event.agent))].map(name => `${name}: ${source.filter(event => event.agent === name).length} подій`).join(" · ") || "Немає"}</p>`);
  if (show("plates")) blocks.push(`<h4>Перевірка номерів</h4><p>Співпадає: ${cars.filter(event => event.plateMatch === "match").length}. Не співпадає: ${cars.filter(event => event.plateMatch === "mismatch").length}. Очікує: ${cars.filter(event => event.plateMatch !== "match" && event.plateMatch !== "mismatch").length}.</p><table><thead><tr><th>Авто</th><th>Об’єкт</th><th>Стан</th><th>Примітка</th></tr></thead><tbody>${cars.map(event => `<tr><td>${event.title}</td><td>${objectName(event.object)}</td><td>${plateLabel(event.plateMatch)}</td><td>${event.plateReason || "—"}</td></tr>`).join("") || `<tr><td colspan="4">Немає</td></tr>`}</tbody></table>`);
  if (show("closing")) blocks.push(`<h4>Статус роботи</h4><p>${reportCase.closing.join(" ")}</p>`);
  showModal(`<div class="modal-head"><h3>ДОПОВІДНА · ПОПЕРЕДНІЙ ПЕРЕГЛЯД</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body report-preview">
    <div class="report-logo"><img src="./assets/ors-logo.jpg" alt="ORS"><span>СИСТЕМА СПОСТЕРЕЖЕННЯ ТА РЕКОГНОСТУВАННЯ</span></div>
    <div class="report-title"><div><small>ДОПОВІДНА № ${reportCase.number}</small><h2>${heading}</h2></div><div><small>ПЕРІОД</small><b>${reportCase.label}</b></div></div>
    ${blocks.join("")}
    <div class="report-footer">ORS · сформовано з подій прототипу · 31.10.2026 о 18:40</div>
  </div><div class="modal-foot"><button class="btn" onclick="closeModal()">Закрити</button><button class="btn primary" onclick="mockPdf()">${icon("file-down")} Сформувати PDF</button></div>`, "wide");
}

function mockPdf() {
  toast("Демо: PDF-звіт сформовано. Завантаження вимкнено у прототипі.");
}

function renderAgents() {
  const content = `<div class="page-heading"><div><h2>Агенти</h2><p>Керування доступами й закріпленими об’єктами</p></div><button class="btn primary" onclick="openCreateAgent()">${icon("user-plus")} Створити агента</button></div>
    <div class="grid three">${agents.map(a => `<article class="card agent-card"><div class="card-top"><span class="call-sign">${a.call}</span><span class="status ${a.cls}">${a.status}</span></div><div class="agent-stats"><div><strong>${a.count}</strong><span>ПОДІЙ СЬОГОДНІ</span></div><div><strong>${a.objects.length}</strong><span>ОБ’ЄКТІВ</span></div></div><div class="tags">${a.objects.map(x=>`<span class="tag">${objectName(x)}</span>`).join("")}</div><button class="btn full" style="margin-top:16px" onclick="openAgent('${a.call}')">Керувати доступом</button></article>`).join("")}</div>`;
  shell(content, "Керування агентами", `${agents.length} облікові записи`);
}

function openCreateAgent() {
  showModal(`<div class="modal-head"><h3>СТВОРИТИ АГЕНТА</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body">
    <div class="verify-box">ORS не збирає справжні імена, прізвища або номери телефону агентів.</div>
    <div class="field"><label>Позивний *</label><input id="agent-call" class="input mono" placeholder="Наприклад, ТИТАН-4"></div>
    <div class="field"><label>Тимчасовий пароль *</label><input class="input mono" value="ORS-${Math.floor(1000+Math.random()*9000)}"></div>
    <div class="field"><label>Закріпити об’єкти</label><div class="tags">${objects.map(o=>`<label class="tag"><input type="checkbox"> ${o.name}</label>`).join("")}</div></div>
  </div><div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Скасувати</button><button class="btn primary" onclick="createAgent()">Створити агента</button></div>`);
}

function createAgent() { const val = document.querySelector("#agent-call").value.trim().toUpperCase() || "ТИТАН-4"; agents.push({call:val,status:"Офлайн",cls:"off",objects:["T1"],count:0}); closeModal(); render(); toast(`Агента ${val} створено`); }
function openAgent(call) { const agent = agents.find(item => item.call === call); showModal(`<div class="modal-head"><h3>АГЕНТ · ${call}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="field"><label>Позивний</label><input class="input mono" value="${call}"></div><div class="field"><label>Закріплені об’єкти</label><div class="tags">${objects.map(o=>`<label class="tag"><input type="checkbox" ${agent?.objects.includes(o.code)?"checked":""}> ${o.name}</label>`).join("")}</div></div><button class="btn full">${icon("key-round")} Змінити пароль</button></div><div class="modal-foot"><button class="btn danger">${icon("ban")} Заблокувати</button><button class="btn primary" onclick="saveGeneric('Зміни збережено')">Зберегти</button></div>`); }

function renderAccess() {
  const content = `<div class="page-heading"><div><h2>Доступи</h2><p>Тимчасові гостьові входи та політики безпеки</p></div><button class="btn primary" onclick="openGuestAccess()">${icon("key-round")} Створити вхід для гостя</button></div>
    <div class="card" style="padding:22px;max-width:760px"><div class="card-top"><div><div class="call-sign">GUEST-4821</div><div class="object-meta">Створено сьогодні о 11:40</div></div><span class="verification ok">АКТИВНИЙ</span></div><div class="object-details"><div><div class="detail-label">Завершення</div><div class="detail-value">Сьогодні, 23:40</div></div><div><div class="detail-label">Залишилось</div><div class="detail-value mono">08:20:14</div></div><div><div class="detail-label">Права</div><div class="detail-value">Лише читання</div></div></div></div>`;
  shell(content, "Контроль доступу", "Облікові записи й сесії");
}

function openGuestAccess() {
  const login = `GUEST-${Math.floor(1000+Math.random()*9000)}`, pass = Math.random().toString(36).slice(2,10).toUpperCase();
  showModal(`<div class="modal-head"><h3>ГОСТЬОВИЙ ДОСТУП</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="verify-box">${icon("clock",14)} Вхід автоматично припинить діяти через 12 годин. Гість побачить лише верифіковані події.</div><div class="field"><label>Ім’я користувача</label><input class="input mono" readonly value="${login}"></div><div class="field"><label>Одноразовий пароль</label><input class="input mono" readonly value="${pass}"></div><div class="object-details"><div><div class="detail-label">Створено</div><div class="detail-value">03.11 · 15:20</div></div><div><div class="detail-label">Діє до</div><div class="detail-value">04.11 · 03:20</div></div></div></div><div class="modal-foot"><button class="btn" onclick="toast('Дані доступу скопійовано')">${icon("copy")} Копіювати</button><button class="btn primary" onclick="closeModal()">Готово</button></div>`);
}

function renderAgentEntry() {
  if (state.agentUnlocked) { state.page = "object"; return renderObject(); }
  const content = `<div class="agent-entry"><div class="page-heading"><div><h2>Початок спостереження</h2><p>Введіть назву, яку передав адміністратор. Для прикладу: Тест 1</p></div></div><section class="card agent-entry-card"><form class="agent-entry-form" onsubmit="unlockObject(event)"><div class="eyebrow">КОДОВА НАЗВА ОБ’ЄКТА</div><h2 style="font-weight:500">Відкрити робочу точку</h2><p style="color:var(--muted);font-size:13px;line-height:1.5;margin-bottom:30px">На об’єкті доступні авто, люди та нотатки. Нотатку можна написати або надиктувати.</p><div class="field"><label>Код об’єкта</label><input id="object-code" class="input big-code" placeholder="Тест 1" maxlength="12" required></div><button class="btn primary full" type="submit">Продовжити ${icon("arrow-right")}</button></form><div class="agent-entry-side"><img src="${PHOTOS.t1Yard}" alt="Об’єкт"><div>${icon("shield-check")} Усі додані події будуть надіслані адміністратору для перевірки.</div></div></section></div>`;
  shell(content, "Режим агента", "СОКІЛ-7 · активна сесія");
}

function unlockObject(ev) {
  ev.preventDefault();
  const raw = document.querySelector("#object-code").value.trim().toLowerCase();
  const match = objects.find(object => object.code.toLowerCase() === raw || object.name.toLowerCase() === raw);
  state.objectCode = match ? match.code : "T1";
  state.agentUnlocked = true;
  state.page = "object";
  render();
  toast(`Об’єкт ${objectName(state.objectCode)} відкрито`);
}

function renderArchive() {
  const visible = events.filter(e => state.role !== "guest" || e.status === "verified");
  const content = `<div class="page-heading"><div><h2>Архів подій</h2><p>Усі матеріали за об’єктами в хронологічному порядку</p></div><button class="btn">${icon("sliders-horizontal")} Фільтри</button></div><div class="event-list">${visible.map(eventCard).join("")}</div>`;
  shell(content, "Архів", `${visible.length} записів`);
}

function renderSettings() {
  const content = `<div class="page-heading"><div><h2>Налаштування</h2><p>Параметри облікового запису та безпеки</p></div></div><div class="card" style="padding:22px;max-width:680px"><div class="form-section" style="margin-top:0;padding-top:0;border:0">БЕЗПЕКА</div><div class="field"><label>Поточний користувач</label><input class="input" readonly value="${state.role === "admin" ? "Адміністратор ORS" : state.role === "agent" ? "СОКІЛ-7" : "Гостьовий доступ"}"></div><button class="btn">${icon("key-round")} Змінити пароль</button><div class="form-section">СЕСІЯ</div><button class="btn danger" onclick="logout()">${icon("log-out")} Завершити сесію</button></div>`;
  shell(content, "Налаштування", "Конфігурація системи");
}

function showModal(html, cls="") { modalRoot.innerHTML = `<div class="modal-backdrop" onclick="backdropClose(event)"><section class="modal ${cls}">${html}</section></div>`; refreshIcons(); }
function backdropClose(e) { if (e.target.classList.contains("modal-backdrop")) closeModal(); }
function closeModal() { modalRoot.innerHTML = ""; }
function saveGeneric(message) { closeModal(); toast(message); }
function toast(message) { const el = document.createElement("div"); el.className = "toast"; el.textContent = message; document.querySelector("#toast-root").appendChild(el); setTimeout(()=>el.remove(), 2800); }

window.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); if (state.notificationsOpen) { state.notificationsOpen=false; render(); } } });
login();
