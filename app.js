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
  login: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=85"
};

const objects = [
  { code: "X1", name: "Північний сектор", address: "Інститут здоров’я", coords: [50.4526, 30.5142], status: "Активний", photo: PHOTOS.building1, description: "Адміністративний комплекс. Контроль центрального входу, паркінгу та північного периметра." },
  { code: "B3", name: "Діловий квартал", address: "Бізнес-центр", coords: [50.4461, 30.5219], status: "Активний", photo: PHOTOS.building2, description: "Офісний об’єкт із двома контрольованими в’їздами та підземним паркінгом." },
  { code: "K7", name: "Західний контур", address: "Складський комплекс", coords: [50.4567, 30.4975], status: "Активний", photo: PHOTOS.building3, description: "Логістичний майданчик. Фіксуються всі автомобілі та відвідувачі." },
  { code: "M4", name: "Центральний вузол", address: "Готельний комплекс", coords: [50.4397, 30.5086], status: "Активний", photo: PHOTOS.building4, description: "Об’єкт під цілодобовим спостереженням. Три входи та гостьова стоянка." },
  { code: "P8", name: "Східний сектор", address: "Офісний кампус", coords: [50.4488, 30.5368], status: "Активний", photo: PHOTOS.building5, description: "Сучасний офісний кампус. Контроль КПП, гостьового паркінгу та службового входу." },
  { code: "D2", name: "Промисловий сектор", address: "Виробнича територія", coords: [50.4629, 30.5272], status: "Активний", photo: PHOTOS.building6, description: "Закрита виробнича територія з окремими в’їздами для персоналу та вантажного транспорту." }
];

let events = [
  { id: 1, object: "X1", type: "car", time: "14:36", date: "03.11.2026", title: "KA 2311 CE", desc: "Audi A6 · чорний · 2 особи", agent: "СОКІЛ-7", status: "pending", image: PHOTOS.car1, gallery: [PHOTOS.car1, PHOTOS.car4, PHOTOS.car5, PHOTOS.car6], note: "Заїхав через центральний в’їзд.", arrival: "14:31", departure: "—" },
  { id: 2, object: "X1", type: "people", time: "13:58", date: "03.11.2026", title: "3 особи", desc: "Біля головного входу, розмовляють", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Поведінка спокійна." },
  { id: 3, object: "X1", type: "car", time: "12:44", date: "03.11.2026", title: "AA 8420 KT", desc: "Toyota Camry · білий · 1 особа", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2, PHOTOS.car5, PHOTOS.car3, PHOTOS.car7], note: "Виїхав о 13:12.", arrival: "12:44", departure: "13:12" },
  { id: 4, object: "B3", type: "people", time: "11:30", date: "03.11.2026", title: "10 осіб", desc: "Група біля бокового входу", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people2, note: "Зайшли всередину о 11:42." },
  { id: 5, object: "K7", type: "car", time: "10:18", date: "03.11.2026", title: "AI 7714 OP", desc: "Volkswagen Transporter · сірий · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car3, gallery: [PHOTOS.car3, PHOTOS.car6, PHOTOS.car4, PHOTOS.car8], note: "Розвантаження у західній зоні.", arrival: "10:18", departure: "11:06" },
  { id: 6, object: "M4", type: "people", time: "09:42", date: "03.11.2026", title: "1 особа", desc: "Чоловік у темному пальті, очікує", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people3, note: "Залишив територію о 10:03." },
  { id: 7, object: "B3", type: "car", time: "14:12", date: "03.11.2026", title: "KA 9084 IP", desc: "Mercedes-Benz E-Class · сірий · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car4, gallery: [PHOTOS.car4, PHOTOS.car1, PHOTOS.car7, PHOTOS.car5], note: "Зупинився на гостьовій стоянці.", arrival: "14:12", departure: "14:48" },
  { id: 8, object: "B3", type: "car", time: "13:47", date: "03.11.2026", title: "CE 4402 BX", desc: "BMW X5 · синій · 3 особи", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car5, gallery: [PHOTOS.car5, PHOTOS.car8, PHOTOS.car2, PHOTOS.car4], note: "Водій показав перепустку.", arrival: "13:47", departure: "—" },
  { id: 9, object: "P8", type: "car", time: "15:04", date: "03.11.2026", title: "AC 1936 HM", desc: "Renault Megane · білий · 2 особи", agent: "СОКІЛ-7", status: "pending", image: PHOTOS.car6, gallery: [PHOTOS.car6, PHOTOS.car2, PHOTOS.car5, PHOTOS.car7], note: "Очікує перед службовим входом.", arrival: "15:04", departure: "—" },
  { id: 10, object: "P8", type: "people", time: "14:51", date: "03.11.2026", title: "4 особи", desc: "Вийшли з офісного корпусу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people1, note: "Пройшли у напрямку паркінгу." },
  { id: 11, object: "D2", type: "car", time: "13:22", date: "03.11.2026", title: "BK 7051 IA", desc: "Ford Transit · білий · 2 особи", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car7, gallery: [PHOTOS.car7, PHOTOS.car3, PHOTOS.car6, PHOTOS.car1], note: "Вантажний транспорт, в’їзд за накладною.", arrival: "13:22", departure: "14:05" },
  { id: 12, object: "D2", type: "car", time: "11:16", date: "03.11.2026", title: "AX 3810 EP", desc: "Skoda Octavia · чорний · 1 особа", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car8, gallery: [PHOTOS.car8, PHOTOS.car4, PHOTOS.car5, PHOTOS.car2], note: "Автомобіль співробітника.", arrival: "11:16", departure: "—" }
];

events.push(
  { id: 13, object: "X1", type: "people", time: "12:08", date: "03.11.2026", title: "2 особи", desc: "Розмовляють біля паркінгу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people2, note: "Залишили територію через 7 хвилин." },
  { id: 14, object: "B3", type: "people", time: "10:54", date: "03.11.2026", title: "2 особи", desc: "Очікують біля рецепції", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people3, note: "Відвідувачі офісного центру." },
  { id: 15, object: "K7", type: "car", time: "14:02", date: "03.11.2026", title: "KA 6205 AM", desc: "Nissan Qashqai · сірий · 1 особа", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car4, gallery: [PHOTOS.car4, PHOTOS.car1, PHOTOS.car6, PHOTOS.car8], note: "Заїзд через західне КПП.", arrival: "14:02", departure: "—" },
  { id: 16, object: "K7", type: "people", time: "13:38", date: "03.11.2026", title: "3 особи", desc: "Працівники біля зони розвантаження", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Проводять огляд вантажу." },
  { id: 17, object: "K7", type: "people", time: "11:24", date: "03.11.2026", title: "1 особа", desc: "Чоловік біля службового входу", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people3, note: "Пред’явив перепустку." },
  { id: 18, object: "M4", type: "car", time: "14:45", date: "03.11.2026", title: "AA 1048 PI", desc: "Lexus RX · чорний · 2 особи", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car5, gallery: [PHOTOS.car5, PHOTOS.car8, PHOTOS.car2, PHOTOS.car4], note: "Гостьова стоянка.", arrival: "14:45", departure: "—" },
  { id: 19, object: "M4", type: "car", time: "12:19", date: "03.11.2026", title: "BI 7750 CA", desc: "Hyundai Tucson · білий · 1 особа", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2, PHOTOS.car6, PHOTOS.car3, PHOTOS.car7], note: "Зупинка біля центрального входу.", arrival: "12:19", departure: "12:34" },
  { id: 20, object: "M4", type: "people", time: "11:07", date: "03.11.2026", title: "4 особи", desc: "Група біля гостьового входу", agent: "ФАКЕЛ-2", status: "verified", image: PHOTOS.people2, note: "Зайшли до будівлі." },
  { id: 21, object: "P8", type: "car", time: "12:52", date: "03.11.2026", title: "AE 9027 TO", desc: "Kia Sportage · синій · 2 особи", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.car8, gallery: [PHOTOS.car8, PHOTOS.car4, PHOTOS.car5, PHOTOS.car2], note: "Перепустку перевірено.", arrival: "12:52", departure: "13:40" },
  { id: 22, object: "P8", type: "people", time: "11:46", date: "03.11.2026", title: "2 особи", desc: "Очікують біля службового входу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people3, note: "Зустрілися зі співробітником." },
  { id: 23, object: "D2", type: "people", time: "14:28", date: "03.11.2026", title: "5 осіб", desc: "Зміна біля прохідної", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people1, note: "Планова зміна персоналу." },
  { id: 24, object: "D2", type: "people", time: "10:32", date: "03.11.2026", title: "2 особи", desc: "Огляд вантажного майданчика", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people2, note: "Порушень не зафіксовано." }
);

let agents = [
  { call: "СОКІЛ-7", status: "На зміні", cls: "", objects: ["X1", "B3"], count: 12 },
  { call: "ВЕКТОР-3", status: "На зміні", cls: "", objects: ["X1", "K7"], count: 8 },
  { call: "ФАКЕЛ-2", status: "Офлайн", cls: "off", objects: ["B3", "M4"], count: 5 },
  { call: "БАРС-9", status: "Заблокований", cls: "blocked", objects: ["K7"], count: 0 }
];

const state = {
  role: null,
  page: "map",
  objectCode: "X1",
  eventTab: "car",
  notificationsOpen: false,
  sideOpen: false,
  agentUnlocked: false,
  newNotifications: 1
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
          <div class="brand-mark">${icon("scan-line", 22)}</div>
          <div>
            <div class="brand-name">ORS</div>
            <div class="brand-copy">OBSERVATION AND RECORDING SYSTEM<br>СИСТЕМА СПОСТЕРЕЖЕННЯ ТА ФІКСАЦІЇ</div>
          </div>
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
      <div class="side-brand"><div class="brand-mark">${icon("scan-line", 18)}</div><strong>ORS</strong></div>
      <nav class="nav">
        <div class="nav-label">РОБОЧИЙ ПРОСТІР</div>
        ${!agent ? item("map", "Оперативна карта", "map") : item("agent-entry", "Об’єкт спостереження", "crosshair")}
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

function notifications() {
  const pending = events.filter(e => e.status === "pending");
  return `<aside class="notification-panel">
    <div class="panel-head"><strong>Сповіщення</strong><span class="event-count">${pending.length} нове</span></div>
    ${pending.map(e => `<button class="notification" onclick="openFromNotification(${e.id})"><span class="notif-icon">${icon(e.type === "car" ? "car-front" : "users")}</span><span><p><b>${e.agent}</b> додав ${e.type === "car" ? `авто ${e.title}` : `подію «${e.title}»`} на ${e.object}</p><time>${e.time} · очікує перевірки</time></span></button>`).join("")}
    <button class="notification"><span class="notif-icon">${icon("shield-check")}</span><span><p>Резервне копіювання виконано успішно</p><time>Сьогодні · 04:00</time></span></button>
  </aside>`;
}

function toggleNotifications() { state.notificationsOpen = !state.notificationsOpen; state.newNotifications = 0; render(); }
function openFromNotification(id) { state.notificationsOpen = false; state.objectCode = events.find(e => e.id === id).object; state.page = "object"; render(); setTimeout(() => openEvent(id), 50); }

function renderMap() {
  const admin = state.role === "admin";
  const content = `
    <div class="page-heading">
      <div><h2>Оперативна карта</h2><p>Поточний стан об’єктів і остання зафіксована активність</p></div>
      ${admin ? `<div class="heading-actions"><button class="btn" onclick="openGuestAccess()">${icon("key-round")} Вхід для гостя</button><button class="btn primary" onclick="openCreateAgent()">${icon("user-plus")} Створити агента</button></div>` : ""}
    </div>
    <div class="stats">
      <div class="stat"><div class="stat-label">Об’єкти</div><div class="stat-value">${objects.length.toString().padStart(2,"0")}</div><div class="stat-note good">Усі на зв’язку</div></div>
      <div class="stat"><div class="stat-label">Події сьогодні</div><div class="stat-value">${events.length.toString().padStart(2,"0")}</div><div class="stat-note">+4 за останню годину</div></div>
      <div class="stat"><div class="stat-label">Агенти на зміні</div><div class="stat-value">02</div><div class="stat-note good">Із 4 активних</div></div>
      <div class="stat"><div class="stat-label">На перевірці</div><div class="stat-value warn">${events.filter(e => e.status === "pending").length.toString().padStart(2,"0")}</div><div class="stat-note">Потребує уваги</div></div>
    </div>
    <div class="map-layout">
      <div id="map"></div>
      ${admin ? `<button class="map-create-button" onclick="startObjectPlacement()">${icon("map-pin-plus")} Створити об’єкт</button>
      <div class="placement-controls hidden"><span>${icon("move",16)} Перетягніть мітку в потрібне місце</span><button class="btn ghost" onclick="cancelObjectPlacement()">Скасувати</button><button class="btn primary" onclick="confirmObjectPlacement()">Продовжити</button></div>` : ""}
      <aside class="map-side">
        <div class="map-side-head"><div class="map-side-title"><strong>ОБ’ЄКТИ</strong><span class="event-count">${objects.length} активні</span></div></div>
        <div class="map-list">${objects.map(o => objectRow(o)).join("")}</div>
        <div class="map-footer">${admin ? "Натисніть на порожню ділянку карти, щоб створити новий об’єкт." : "Гостьовий режим. Дані доступні лише для перегляду."}</div>
      </aside>
    </div>`;
  shell(content, "Центр спостереження", "Київ · 03 листопада 2026 · 15:20");
  setTimeout(initMap, 0);
}

function objectRow(o) {
  return `<button class="object-row" onclick="openObjectPreview('${o.code}')"><span class="object-code">${o.code}</span><span><span class="object-name">${o.name}</span><span class="object-meta">${events.filter(e => e.object === o.code).length} подій сьогодні</span></span><span class="status-dot"></span></button>`;
}

function initMap() {
  if (!window.L || !document.querySelector("#map")) return;
  const map = L.map("map", { zoomControl: false }).setView([50.4492, 30.5118], 14);
  activeMap = map;
  placementMode = false;
  placementMarker = null;
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap" }).addTo(map);
  L.control.zoom({ position: "bottomright" }).addTo(map);
  objects.forEach(o => {
    const marker = L.marker(o.coords, { bubblingMouseEvents: false, icon: L.divIcon({ className: "ors-marker", html: `<div class="marker-inner"><span>${o.code}</span></div>`, iconSize: [40, 36], iconAnchor: [12, 30] }) }).addTo(map);
    marker.on("click", () => openObjectPreview(o.code));
  });
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
    <div class="modal-head"><h3>ОБ’ЄКТ ${o.code}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    <img class="modal-photo" src="${o.photo}" alt="${o.name}">
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
      <div class="field"><label>Фото об’єкта</label><div class="media-slot" style="aspect-ratio:auto;min-height:90px">${icon("upload")}<span>Додати реальне фото</span></div></div>
    </div>
    <div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Скасувати</button><button class="btn primary" onclick="saveNewObject(${latlng.lat},${latlng.lng})">Створити об’єкт</button></div>`);
}

function saveNewObject(lat, lng) {
  const code = (document.querySelector("#new-object-code").value.trim() || `R${objects.length + 1}`).toUpperCase();
  const name = document.querySelector("#new-object-name").value.trim() || "Новий сектор";
  const description = document.querySelector("#new-object-description").value.trim() || "Нова точка спостереження. Інформація уточнюється.";
  if (objects.some(object => object.code === code)) return toast("Такий код об’єкта вже використовується");
  objects.push({ code, name, address: "Координати з карти", coords: [Number(lat.toFixed(4)), Number(lng.toFixed(4))], status: "Активний", photo: PHOTOS.building5, description });
  const baseId = Date.now();
  events.push(
    { id: baseId, object: code, type: "car", time: "15:10", date: "03.11.2026", title: "KA 1050 OP", desc: "Audi Q5 · чорний · 2 особи", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.car1, gallery: [PHOTOS.car1, PHOTOS.car4, PHOTOS.car5, PHOTOS.car6], note: "Демонстраційна подія.", arrival: "15:10", departure: "—" },
    { id: baseId + 1, object: code, type: "car", time: "13:42", date: "03.11.2026", title: "AI 8872 ME", desc: "Toyota RAV4 · білий · 1 особа", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.car2, gallery: [PHOTOS.car2, PHOTOS.car6, PHOTOS.car3, PHOTOS.car7], note: "Демонстраційна подія.", arrival: "13:42", departure: "14:16" },
    { id: baseId + 2, object: code, type: "people", time: "14:25", date: "03.11.2026", title: "2 особи", desc: "Біля головного входу", agent: "СОКІЛ-7", status: "verified", image: PHOTOS.people1, note: "Демонстраційна подія." },
    { id: baseId + 3, object: code, type: "people", time: "12:18", date: "03.11.2026", title: "3 особи", desc: "Рухаються до паркінгу", agent: "ВЕКТОР-3", status: "verified", image: PHOTOS.people2, note: "Демонстраційна подія." }
  );
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
        <div><div class="eyebrow">ОБ’ЄКТ · ${o.status}</div><h2>${o.code}</h2><p>${o.description}</p></div>
        <div class="object-details"><div><div class="detail-label">Сектор</div><div class="detail-value">${o.name}</div></div><div><div class="detail-label">Координати</div><div class="detail-value mono">${o.coords.join(", ")}</div></div><div><div class="detail-label">Агентів</div><div class="detail-value">2 на зміні</div></div></div>
      </div>
      <div class="card object-photo"><img src="${o.photo}" alt="${o.name}"></div>
    </section>
    <div class="event-toolbar">
      <div class="tabs"><button class="tab ${state.eventTab==="car"?"active":""}" onclick="setEventTab('car')">${icon("car-front",15)} Авто</button><button class="tab ${state.eventTab==="people"?"active":""}" onclick="setEventTab('people')">${icon("users",15)} Люди</button></div>
      <span class="event-count">${visible.length} записів</span>
      ${(state.role === "admin" || state.role === "agent") ? `<button class="btn primary" style="margin-left:auto" onclick="chooseEventType()">${icon("plus")} Додати подію</button>` : ""}
    </div>
    <section class="event-list">${visible.length ? visible.map(eventCard).join("") : `<div class="empty">${icon("inbox")}<br>Подій у цій категорії немає</div>`}</section>`;
  shell(content, `Об’єкт ${o.code}`, `${o.name} · ${o.address}`);
}

function eventCard(e) {
  return `<article class="card event-card" onclick="openEvent(${e.id})">
    <div class="event-image"><img src="${e.image}" alt="${e.title}"><span class="event-type">${e.type === "car" ? "АВТО" : "ЛЮДИ"}</span></div>
    <div class="event-body"><div class="event-head"><div><h3>${e.title}</h3><div class="event-desc">${e.desc}</div></div><time>${e.date}<br>${e.time}</time></div>
    <div class="event-meta"><span>${icon("user-round",12)} ${e.agent}</span><span>${icon("map-pin",12)} ${e.object}</span><span>${icon("clock-3",12)} ${e.time}</span></div>
    <div style="margin-top:10px"><span class="verification ${e.status === "verified" ? "ok" : "pending"}">${e.status === "verified" ? "ПІДТВЕРДЖЕНО" : "ОЧІКУЄ ПЕРЕВІРКИ"}</span></div></div>
  </article>`;
}

function setEventTab(tab) { state.eventTab = tab; render(); }

function openEvent(id) {
  const e = events.find(x => x.id === id);
  const canVerify = state.role === "admin" && e.status === "pending";
  const gallery = e.gallery || [e.image];
  const labels = ["Спереду", "Ззаду", "Збоку", "Інше"];
  showModal(`
    <div class="modal-head"><h3>${e.type === "car" ? "КАРТКА АВТО" : "КАРТКА ПОДІЇ"} · ${e.object}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    <img class="modal-photo" src="${e.image}" alt="${e.title}">
    <div class="modal-body" style="padding-top:0">
      ${canVerify ? `<div class="verify-box">${icon("clock",14)} Подія надійшла від агента ${e.agent} і очікує перевірки адміністратора.</div>` : ""}
      <div class="event-head"><div><div class="eyebrow">${e.type === "car" ? "АВТОМОБІЛЬ" : "ЛЮДИ"}</div><h2 class="mono" style="margin:7px 0">${e.title}</h2></div><time>${e.date}<br>${e.time}</time></div>
      <p style="color:var(--muted);font-size:13px">${e.desc}</p>
      <div class="object-details"><div><div class="detail-label">Додав агент</div><div class="detail-value mono">${e.agent}</div></div><div><div class="detail-label">Дата і час запису</div><div class="detail-value mono">${e.date} · ${e.time}</div></div><div><div class="detail-label">Об’єкт</div><div class="detail-value mono">${e.object}</div></div></div>
      ${e.type === "car" ? `<div class="object-details"><div><div class="detail-label">Прибуття</div><div class="detail-value mono">${e.arrival || e.time}</div></div><div><div class="detail-label">Вибуття</div><div class="detail-value mono">${e.departure || "—"}</div></div></div>` : ""}
      <div class="form-section">ПРИМІТКА</div><p style="font-size:12px;color:var(--muted)">${e.note}</p>
      <div class="form-section">ФОТОМАТЕРІАЛИ</div>
      <div class="evidence-grid">${gallery.map((src, index) => `<button class="evidence" onclick="previewImage('${src}')"><img src="${src}" alt="${labels[index] || "Фото"}"><span>${e.type === "car" ? labels[index] : `Фото ${index + 1}`}</span></button>`).join("")}</div>
      <div class="form-section">ВІДЕО ТА АУДІО</div><div class="media-slots compact"><button class="media-slot">${icon("play-circle")}<span>Відео · 00:18</span></button><button class="media-slot">${icon("audio-lines")}<span>Аудіо · 00:32</span></button></div>
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
  showModal(`<div class="modal-head"><h3>НОВА ПОДІЯ</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><p style="color:var(--muted);margin-top:0">Оберіть тип інформації, яку потрібно зафіксувати.</p><div class="input-row"><button class="card" style="min-height:150px;color:var(--text);cursor:pointer" onclick="openEventForm('car')">${icon("car-front",30)}<br><b>Автомобіль</b></button><button class="card" style="min-height:150px;color:var(--text);cursor:pointer" onclick="openEventForm('people')">${icon("users",30)}<br><b>Люди</b></button></div></div>`);
}

function openEventForm(type) {
  const car = type === "car";
  showModal(`
    <div class="modal-head"><h3>ДОДАТИ · ${car ? "АВТОМОБІЛЬ" : "ЛЮДИ"}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div>
    <form onsubmit="saveEvent(event,'${type}')">
      <div class="modal-body">
        <div class="input-row">${car ? `<div class="field"><label>Номер авто *</label><input id="event-title" class="input mono" placeholder="AA 0000 AA" required></div><div class="field"><label>Марка та модель</label><input id="event-desc" class="input" placeholder="Audi A6"></div>` : `<div class="field"><label>Кількість людей *</label><input id="event-title" class="input" type="number" min="1" value="1" required></div><div class="field"><label>Що відбувається</label><input id="event-desc" class="input" placeholder="Короткий опис"></div>`}</div>
        <div class="input-row"><div class="field"><label>${car ? "Колір" : "Час"}</label><input class="input" value="${car ? "" : "15:20"}" placeholder="${car ? "Чорний" : ""}"></div><div class="field"><label>${car ? "Кількість людей" : "Зона спостереження"}</label><input class="input" placeholder="${car ? "1" : "Головний вхід"}"></div></div>
        ${car ? `<div class="input-row"><div class="field"><label>Час заїзду</label><input class="input" type="time" value="15:20"></div><div class="field"><label>Час виїзду</label><input class="input" type="time"></div></div>` : ""}
        <div class="field"><label>Додаткова інформація</label><textarea id="event-note" class="textarea" placeholder="Важливі деталі та спостереження"></textarea></div>
        <div class="form-section">ФОТО · ОБЕРІТЬ РАКУРС І ДЖЕРЕЛО</div>
        <div class="capture-grid">${car ? captureGroup("Спереду") + captureGroup("Ззаду") + captureGroup("Збоку") + captureGroup("Інше") : captureGroup("Основне фото") + captureGroup("Додаткове фото")}</div>
        <div class="form-section">ДОДАТКОВІ МАТЕРІАЛИ</div>
        <div class="media-slots compact">${mediaSlot("Додати відео","video","video/*")} ${mediaSlot("Додати аудіо","audio-lines","audio/*")} ${mediaSlot("Інший файл","paperclip","image/*,video/*,audio/*")}</div>
      </div>
      <div class="modal-foot"><button type="button" class="btn ghost" onclick="closeModal()">Скасувати</button><button type="submit" class="btn primary">${icon("save")} Зберегти подію</button></div>
    </form>`, "wide");
}

function captureGroup(label) {
  return `<div class="capture-group"><strong>${label}</strong><div><label class="capture-action">${icon("camera",15)} <span>Камера</span><input type="file" accept="image/*" capture="environment" hidden onchange="filePicked(this)"></label><label class="capture-action">${icon("folder-open",15)} <span>Файли</span><input type="file" accept="image/*" hidden onchange="filePicked(this)"></label></div></div>`;
}
function mediaSlot(label, ico="camera", accept="image/*") { return `<label class="media-slot">${icon(ico)}<span>${label}</span><input type="file" accept="${accept}" hidden onchange="filePicked(this)"></label>`; }
function filePicked(input) { input.parentElement.style.borderStyle = "solid"; input.parentElement.style.color = "var(--accent)"; input.parentElement.querySelector("span").textContent = "Матеріал додано"; }

function saveEvent(ev, type) {
  ev.preventDefault();
  const titleInput = document.querySelector("#event-title").value;
  const desc = document.querySelector("#event-desc").value || (type === "car" ? "Автомобіль · дані уточнюються" : "Спостереження за групою людей");
  events.unshift({ id: Date.now(), object: state.objectCode, type, time: "15:20", date: "03.11.2026", title: type === "people" ? `${titleInput} осіб` : titleInput.toUpperCase(), desc, agent: state.role === "agent" ? "СОКІЛ-7" : "АДМІН", status: state.role === "admin" ? "verified" : "pending", image: type === "car" ? PHOTOS.car1 : PHOTOS.people1, gallery: type === "car" ? [PHOTOS.car1, PHOTOS.car4, PHOTOS.car5, PHOTOS.car6] : [PHOTOS.people1], note: document.querySelector("#event-note").value || "Без додаткової примітки.", arrival: "15:20", departure: "—" });
  if (state.role === "agent") state.newNotifications++;
  closeModal(); render(); toast(state.role === "agent" ? "Подію збережено та надіслано адміністратору" : "Подію збережено");
}

function renderAgents() {
  const content = `<div class="page-heading"><div><h2>Агенти</h2><p>Керування доступами й закріпленими об’єктами</p></div><button class="btn primary" onclick="openCreateAgent()">${icon("user-plus")} Створити агента</button></div>
    <div class="grid three">${agents.map(a => `<article class="card agent-card"><div class="card-top"><span class="call-sign">${a.call}</span><span class="status ${a.cls}">${a.status}</span></div><div class="agent-stats"><div><strong>${a.count}</strong><span>ПОДІЙ СЬОГОДНІ</span></div><div><strong>${a.objects.length}</strong><span>ОБ’ЄКТІВ</span></div></div><div class="tags">${a.objects.map(x=>`<span class="tag">${x}</span>`).join("")}</div><button class="btn full" style="margin-top:16px" onclick="openAgent('${a.call}')">Керувати доступом</button></article>`).join("")}</div>`;
  shell(content, "Керування агентами", `${agents.length} облікові записи`);
}

function openCreateAgent() {
  showModal(`<div class="modal-head"><h3>СТВОРИТИ АГЕНТА</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body">
    <div class="verify-box">ORS не збирає справжні імена, прізвища або номери телефону агентів.</div>
    <div class="field"><label>Позивний *</label><input id="agent-call" class="input mono" placeholder="Наприклад, ТИТАН-4"></div>
    <div class="field"><label>Тимчасовий пароль *</label><input class="input mono" value="ORS-${Math.floor(1000+Math.random()*9000)}"></div>
    <div class="field"><label>Закріпити об’єкти</label><div class="tags">${objects.map(o=>`<label class="tag"><input type="checkbox"> ${o.code}</label>`).join("")}</div></div>
  </div><div class="modal-foot"><button class="btn ghost" onclick="closeModal()">Скасувати</button><button class="btn primary" onclick="createAgent()">Створити агента</button></div>`);
}

function createAgent() { const val = document.querySelector("#agent-call").value.trim().toUpperCase() || "ТИТАН-4"; agents.push({call:val,status:"Офлайн",cls:"off",objects:["X1"],count:0}); closeModal(); render(); toast(`Агента ${val} створено`); }
function openAgent(call) { showModal(`<div class="modal-head"><h3>АГЕНТ · ${call}</h3><button class="icon-btn" onclick="closeModal()">${icon("x")}</button></div><div class="modal-body"><div class="field"><label>Позивний</label><input class="input mono" value="${call}"></div><div class="field"><label>Закріплені об’єкти</label><div class="tags">${objects.map(o=>`<label class="tag"><input type="checkbox" ${["X1","B3"].includes(o.code)?"checked":""}> ${o.code}</label>`).join("")}</div></div><button class="btn full">${icon("key-round")} Змінити пароль</button></div><div class="modal-foot"><button class="btn danger">${icon("ban")} Заблокувати</button><button class="btn primary" onclick="saveGeneric('Зміни збережено')">Зберегти</button></div>`); }

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
  const content = `<div class="agent-entry"><div class="page-heading"><div><h2>Початок спостереження</h2><p>Введіть код, який передав адміністратор</p></div></div><section class="card agent-entry-card"><form class="agent-entry-form" onsubmit="unlockObject(event)"><div class="eyebrow">КОДОВА НАЗВА ОБ’ЄКТА</div><h2 style="font-weight:500">Відкрити робочу точку</h2><p style="color:var(--muted);font-size:13px;line-height:1.5;margin-bottom:30px">Доступ надається лише до введеного об’єкта. Для демонстрації прототип пропустить будь-який код.</p><div class="field"><label>Код об’єкта</label><input id="object-code" class="input big-code" placeholder="X1" maxlength="6" required></div><button class="btn primary full" type="submit">Продовжити ${icon("arrow-right")}</button></form><div class="agent-entry-side"><img src="${PHOTOS.building3}" alt="Об’єкт"><div>${icon("shield-check")} Усі додані події будуть надіслані адміністратору для перевірки.</div></div></section></div>`;
  shell(content, "Режим агента", "СОКІЛ-7 · активна сесія");
}

function unlockObject(ev) {
  ev.preventDefault();
  const code = document.querySelector("#object-code").value.trim().toUpperCase();
  state.objectCode = objects.some(o=>o.code===code) ? code : "X1";
  state.agentUnlocked = true;
  state.page = "object";
  render();
  toast(`Об’єкт ${code} відкрито`);
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
