// Store accounts in localStorage
function signup() {
const role = document.getElementById("regRole").value;
const user = document.getElementById("regUser").value;
const pass = document.getElementById("regPass").value;


const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
accounts.push({ role, user, pass });
localStorage.setItem("accounts", JSON.stringify(accounts));


alert("Account created");
}


function login() {
const role = document.getElementById("loginRole").value;
const user = document.getElementById("loginUser").value;
const pass = document.getElementById("loginPass").value;


const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");


const match = accounts.find(a => a.role === role && a.user === user && a.pass === pass);


if (!match) return alert("Invalid credentials");


localStorage.setItem("currentUser", JSON.stringify(match));


if (role === "User") window.location.href = "../dashboard/dashboard_user.html";
if (role === "Admin") window.location.href = "../dashboard/dashboard_admin.html";
if (role === "Gov") window.location.href = "../dashboard/dashboard_gov.html";
}


// Add missing person data
function addPerson() {
const name = document.getElementById("pname").value;
const age = document.getElementById("page").value;
const loc = document.getElementById("plocation").value;
const desc = document.getElementById("pdesc").value;


const reports = JSON.parse(localStorage.getItem("reports") || "[]");
reports.push({ name, age, loc, desc, solved: false });
localStorage.setItem("reports", JSON.stringify(reports));


alert("Report submitted");
}


// Display reports (User)
if (document.URL.includes("dashboard_user")) {
const reports = JSON.parse(localStorage.getItem("reports") || "[]");
const box = document.getElementById("userReports");
reports.forEach(r => {
box.innerHTML += `<div class='card'>${r.name}<br>${r.loc}</div>`;
});
}


// Display reports (Admin)
if (document.URL.includes("dashboard_admin")) {
const reports = JSON.parse(localStorage.getItem("reports") || "[]");
const box = document.getElementById("adminReports");
reports.forEach(r => {
box.innerHTML += `<div class='card'>${r.name}<br>${r.loc}</div>`;
});
}


// Gov stats
if (document.URL.includes("dashboard_gov")) {
const reports = JSON.parse(localStorage.getItem("reports") || "[]");
document.getElementById("ongoing").textContent = reports.filter(r => !r.solved).length;
document.getElementById("solved").textContent = reports.filter(r => r.solved).length;
}