// 1. Write a ts program to find maximum between two numbers.
// var a = 20
// var b = 10
// if (a > b){
//     console.log("maximum number is" , a)
// }
// else{
//     console.log("maximum number is" , b)
// }
// 2. Write a ts program to find maximum between three numbers.
// var a = 10
// var b = 20
// var c = 30
// if (a > b && a > c){
//     console.log("maximum number is" , a)
// }
// else if (b > a && b > c){
//     console.log("maximum number is" , b)
// }
// else if (c > a && c > b){
//     console.log("maximum number is" , c)
// }
// 3. Write a ts program to check whether a number is negative, positive or zero.
// var number = 10
// if (number > 0){
//     console.log("Number is Positive")
// }
// else if (number == 0){
//     console.log("Number is equal")
// }
// else{
//     console.log("Number is negative")
// }
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
// var number = 10
// if (number%5 == 0){
//     console.log("number is divisible by 5")
// }
// else if (number%11 == 0){
//     console.log("number is divisible by 11")
// }
// else{
//     console.log("number is not divisible")
// }
// 5. Write a ts program to check whether a number is even or odd.
// var number = 17
// if (number % 2 == 0 ){
//     console.log("number is even")
// }
// else{
//     console.log("number is odd")
// }
// 6. Write a ts program to check whether a year is leap year or not.
// var year = 2022
// if (year % 4 == 0){
//     console.log("this is leap year")
// }
// else{
//     console.log("the year is not leap")
// }
// 7. Write a ts program to check whether a character is alphabet or not.
// var character = 'h'
// if (character >= 'a' && character <= 'z'){
//     console.log("This character is alphabet")
// }
// else{
//     console.log("this character is not alphabet")
// }
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant
// var character = 'a'
// if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u'){
//     console.log("this is vowel")
// }
// else{
//     console.log("this is consonant")
// }
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
// var userinput:any = prompt("enter character")
// console.log("userinput" , userinput)
// if (userinput >= 'a' && userinput <= 'z'){
//     console.log("character is alphabet")
// }
// else if (userinput <= '9' && userinput >= '0'){
//     console.log("character is digit")
// }
// else{
//     console.log("this is special characters")
// }
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
// var character = 'a'
// if (character >= 'a' && character <= 'z'){
//     console.log("this character is lowercase")
// }
// else{
//     console.log("this character is uppercase")
// }
// 11. Write a ts program to input week number and print week day.
// var userinput:any = prompt("Enter Number")
// console.log("userinput" , userinput)
// if (userinput == 1){
//     console.log("Monday")
// }
// else if(userinput == 2){
//     console.log("Tuesday")
// }
// else if(userinput == 3){
//     console.log("Wednesday")
// }
// else if(userinput == 4){
//     console.log("Thursday")
// }
// else if(userinput == 5){
//     console.log("Friday")
// }
// else if(userinput == 6){
//     console.log("Saturday")
// }
// else if(userinput == 7){
//     console.log("Sunday")
// }
// else{
//     console.log("None")
// }
// 12. Write a ts program to input month number and print number of days in that month.
// var month:any = prompt("Enter Number")
// console.log("userinput" , month)
// if (month == 1){
//     console.log("31")
// }
// else if (month == 2){
//     console.log("29")
// }
// else if (month == 3){
//     console.log("31")
// }
// else if (month == 4){
//     console.log("30")
// }
// else if (month == 5){
//     console.log("31")
// }
// else if (month == 6){
//     console.log("30")
// }
// else if (month == 7){
//     console.log("31")
// }
// else if (month == 8){
//     console.log("31")
// }
// else if (month == 9){
//     console.log("30")
// }
// else if (month == 10){
//     console.log("31")
// }
// else if (month == 11){
//     console.log("30")
// }
// else if (month == 12){
//     console.log("31")
// }
// 13. Write a ts program to count total number of notes in given amount.
// not understandable
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
// var angle1:any = prompt("enter angle1")
// console.log("enter angle1" , angle1)
// var angle2:any = prompt("enter angle2")
// console.log("enter angle2" , angle2)
// var angle3:any = prompt("enter angle3")
// console.log("enter angle3" , angle3)
// var angle1 = 30
// var angle2 = 60
// var angle3 = 90
// if (angle1 + angle2 + angle3 == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0){
//     console.log("your triangle is valid")
// }
// else{
//     console.log("your triangle is invalid")
// }
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
// var side1:any = prompt("enter side1")
// console.log("enter side1" , side1)
// var side2:any = prompt("enter side2")
// console.log("enter side2" , side2)
// var side3:any = prompt("enter side3")
// console.log("enter side3" , side3)
// var side1 = 10
// var side2 = 20
// var side3 = 15
// if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
// console.log("your triangle is valid")
// }
// else{
//     console.log("your triangle is invalid")
// }
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var side1 = 20
// var side2 = 10
// var side3 = 20
// if (side1 == side2 || side2 == side3){
//     console.log("your triangle is equilateral")
// }
// else if (side1 == side2 || side2 == side3 || side3 == side1){
//     console.log("your triangle is isoceles")
// }
// else{
//     console.log("your triangle is scalene")
// }
// 17. Write a ts program to find all roots of a quadratic equation.
// not understandable
// 18. Write a ts program to calculate profit or loss
// var costPrice = 500
// var sellingprice = 500
// if (sellingprice > costPrice){
//     console.log("you earn profit")
// }
// else if (costPrice > sellingprice){
//     console.log("you got loss")
// }
// else{
//     console.log("no profit no loss")
// }
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// var physics = 25
// var chemistry = 25
// var biology = 10
// var mathematics = 10
// var computer = 5
// var sum = (physics + chemistry + biology + mathematics + computer) / 5
// if (sum >= 90){
//     console.log("A")
// }
// else if (sum >= 80){
//     console.log("B")
// }
// else if (sum >= 70){
//     console.log("C")
// }
// else if (sum >= 60){
//     console.log("D")
// }
// else if (sum >= 40){
//     console.log("E")
// }
// else{
//     console.log("F")
// }
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// var hra = 0.3 * 50000
// var da = 0.95 * 50000
// var basic = 50000
// var grosssalary = basic + hra + da
// if (basic <= 10000){
//     console.log("gross salary is" , grosssalary)
// }
// else if (basic <= 20000){
//     console.log("gross salary " , grosssalary)
// }
// else{
//     console.log("gross salary is" , grosssalary)
// }
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
// var unit = 260
// var amt = 1.50
// var surcharge = 0.2
// var total = unit * amt + 0.2
// if (unit <= 50){
//     console.log("your total bill is" , total)
// }
// else if (unit <= 150){
//     console.log("your total bill is" , total)
// }
// else if (unit <= 250){
//     console.log("your total bill is" , total)
// }
// else if(unit > 250){
//     console.log("your total bill is" , total)
// }
