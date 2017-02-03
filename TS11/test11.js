// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }
// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }
// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     tick() {
//         console.log("tick tock");
//     }
// }
// class Person {
//     tick() {
//         console.log("test11");
//     }
// }
// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// let person = createClock(Person, 5, 34);
// interface Shape {
//     color: string;
// }
// interface Square extends Shape {
//     sideLength: number;
// }
// let square2 = {color:"red", sideLength:20};
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// // myAdd has the full function type
// let myAdd1 = function(x: number, y: number): number { return x + y; };
// // The parameters `x` and `y` have the type number
// let myAdd2: (baseValue:number, increment:number) => number =
//     function(x, y) { return x + y; };
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
