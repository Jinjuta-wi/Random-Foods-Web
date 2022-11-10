// import Swal from 'sweetalert2/dist/sweetalert2.js'

const foods = ["ผัดซีอิ๊วหมู", "ข้าวกระเพราไข่ดาว", "ข้าวคลุกกะปิ", "ข้าวผัดหมู", "ข้าวไข่ข้น", "ข้าวไข่เจียว", "ผัดไทยกุ้งสด", "ข้าวคะน้าหมูกรอบ",
    "ข้าวผัดพริกแกง", "ข้าวหมูกระเทียม", "สุกี้แห้งทะเล", "ขนมจีนน้ำยา", "แกงเขียวหวาน", "ข้าวคอหมูย่าง"];

function randomMenu(list) {
    return list[Math.floor((Math.random() * list.length))];
}

function button_alert() {                   // pop-up food
    const food = randomMenu(foods)
    if (confirm) {
        alert("วันนี้กิน" + food)
        console.log("You pressed OK!")
    } else {
        console.log("You pressed Cancel!")
    }
}

function display_Menu() {                   // pop-up all menu
    if (confirm(foods)) {
        console.log("You pressed OK!")
    } else {
        console.log("You pressed Cancel!")
    }
}

function add_Menu() {                                       //เพื่ม menu ได้ และถ้าซ้ำกับที่มีอยู่จะไม่เพิ่ม
    const newMenu = prompt("Please enter a new menu:");
    if (foods.includes(newMenu) == true) {
        alert("Menu " + newMenu + " already existed")
        console.log("Menu " + newMenu + " already existed")
    } if (newMenu == "") {
        alert("Please enter a new menu.")
    }
    else {
        foods[foods.length] = newMenu;
        alert("Added " + newMenu + " successfully")
        console.log("Added " + newMenu + " successfully")
    }
}