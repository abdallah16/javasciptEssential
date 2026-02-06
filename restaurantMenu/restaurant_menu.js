const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];

/** في هذا الكوذ استعمل map لانشاء عناصر html , map(callbackFn , ) :return an rrray 
 * join(separator): تدمج العناصر وتعيدها على شكل نص مفصول بينه بما استخدم داخل الاقواس
*/
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join("");
console.log(breakfastMenuItemsHTML)
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
console.log(mainCourseItem)
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;