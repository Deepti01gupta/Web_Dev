

let menu=['palak paneer', 'chole chawal', 'chicken dhatura', 'paneer butter masala', 'manchurian', 'chicken biryani', 'pizza', 'egg burji', 'soda'];

function isVeg(food){
    if(food.toLowerCase().includes('chicken') || food.toLowerCase().includes('egg')){
        return false;
    }
    return true;
}
let newmenu=menu.filter(isVeg);
console.log(menu);
console.log(newmenu);