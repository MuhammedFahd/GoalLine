var rowArray = [
    ["loc_01_01", "loc_01_02", "loc_01_03"],
    ["loc_02_01", "loc_02_02", "loc_02_03"],
    ["loc_03_01", "loc_03_02", "loc_03_03"],
    ["loc_04_01", "loc_04_02", "loc_04_03"],
    ["loc_05_01", "loc_05_02", "loc_05_03"],
]; // Stores the display grid (Receipt) in an array.

var numberOfTshirts = 0;
var numberOfBoots = 0;
var numberOfBalls = 0;
var numberOfBags = 0
var numberOfAdidasBalls = 0
var numberOfJerseyShorts = 0;
var numberOfOrangeBoots = 0;
var numberOfGloves = 0;
var numberOfMitreBottle = 0;
var numberOfSocks = 0;
var numberOfBlueJerseys = 0;
var numberOfShorts = 0;
var numberOfDirectSoccerBottles = 0;
var numberOfBlueGreenGloves = 0;
var numberOfKits = 0;

var total_tshirt = 0;
var total_boot = 0;
var total_balls = 0;
var total_bags = 0;
var total_adidasBalls = 0;
var total_jerseyShorts = 0;
var total_orangeBoots = 0;
var total_gloves = 0;
var total_mitreBottles = 0;
var total_socks = 0;
var total_blueJerseys = 0;
var total_shorts = 0;
var total_directSoccerBottles = 0;
var total_blueGreenGloves = 0;
var total_kits = 0;

var currentItemArray = ["", "", "", "", ""]; // Array for max item count check.
var total = 0;

function checkMaxItemCount(itemName) {
    if (currentItemArray.includes(itemName)) {
        return true; // If the incoming item is already added, true is returned.
    } else if (!currentItemArray.includes(itemName)) {
        var nextAvailableIndex = currentItemArray.indexOf("");
        currentItemArray[nextAvailableIndex] = itemName; // If it is the first time an item type appears, it stores in the next available array slot.

        if (nextAvailableIndex < 0) { // JavaScript automatically reverses the index to -1, -2, etc once the declared limit is exceeded ie: index 4.
            alert("A maximum of 05 item types are allowed per order");
            return false; // False is returned to indicate not to allow this item to proceed as normal.
        }
        return true;
    }

}

function increaseItem(itemName) {
    console.log(itemName);
    var updatedValue = null; // Argument Variables
    var updatedTotal = null; // Argument Variables

    var maxLimitReached = checkMaxItemCount(itemName);
    if (maxLimitReached) {

        switch (itemName) {
            case ('Football Tshirt'):
                numberOfTshirts += 1;
                document.getElementById("text01").innerHTML = numberOfTshirts;
                total_tshirt = numberOfTshirts * 7500;
                updatedValue = numberOfTshirts;
                updatedTotal = total_tshirt;
                break;
            case ('Football Boot'):
                numberOfBoots += 1;
                document.getElementById("text02").innerHTML = numberOfBoots;
                total_boot = numberOfBoots * 4000
                updatedValue = numberOfBoots;
                updatedTotal = total_boot;
                break;
            case ('Football'):
                numberOfBalls += 1;
                document.getElementById("text03").innerHTML = numberOfBalls;
                total_balls = numberOfBalls * 5000
                updatedValue = numberOfBalls;
                updatedTotal = total_balls;

                break;
            case ('Football Bag'):
                numberOfBags += 1;
                document.getElementById("text04").innerHTML = numberOfBags;
                total_bags = numberOfBags * 5000
                updatedValue = numberOfBags;
                updatedTotal = total_bags;
                break;
            case ('Adidas Football'):
                numberOfAdidasBalls += 1;
                document.getElementById("text05").innerHTML = numberOfAdidasBalls;
                total_adidasBalls = numberOfAdidasBalls * 4000
                updatedValue = numberOfAdidasBalls;
                updatedTotal = total_adidasBalls;
                break;
            case ('Football Jersey and Shorts'):
                numberOfJerseyShorts += 1;
                document.getElementById("text06").innerHTML = numberOfJerseyShorts;
                total_jerseyShorts = numberOfJerseyShorts * 6500
                updatedValue = numberOfJerseyShorts;
                updatedTotal = total_jerseyShorts;
                break;
            case ('Orange Football Boots'):
                numberOfOrangeBoots += 1;
                document.getElementById("text07").innerHTML = numberOfOrangeBoots;
                total_orangeBoots = numberOfOrangeBoots * 1500
                updatedValue = numberOfOrangeBoots;
                updatedTotal = total_orangeBoots;
                break;
            case ('Football Gloves'):
                numberOfGloves += 1;
                document.getElementById("text08").innerHTML = numberOfGloves;
                total_gloves = numberOfGloves * 7500
                updatedValue = numberOfGloves;
                updatedTotal = total_gloves;
                break;
            case ('Mitre Water Bottle'):
                numberOfMitreBottle += 1;
                document.getElementById("text09").innerHTML = numberOfMitreBottle;
                total_mitreBottles = numberOfMitreBottle * 2000
                updatedValue = numberOfMitreBottle;
                updatedTotal = total_mitreBottles;
                break;
            case ('Football Socks'):
                numberOfSocks += 1;
                document.getElementById("text10").innerHTML = numberOfSocks;
                total_socks = numberOfSocks * 5000
                updatedValue = numberOfSocks;
                updatedTotal = total_socks;
                break;
            case ('Blue Football Jersey'):
                numberOfBlueJerseys += 1;
                document.getElementById("text11").innerHTML = numberOfBlueJerseys;
                total_blueJerseys = numberOfBlueJerseys * 7000
                updatedValue = numberOfBlueJerseys;
                updatedTotal = total_blueJerseys;
                break;
            case ('Football Shorts'):
                numberOfShorts += 1;
                document.getElementById("text12").innerHTML = numberOfShorts;
                total_shorts = numberOfShorts * 3000
                updatedValue = numberOfShorts;
                updatedTotal = total_shorts;
                break;
            case ('Direct Soccer Water Bottle'):
                numberOfDirectSoccerBottles += 1;
                document.getElementById("text13").innerHTML = numberOfDirectSoccerBottles;
                total_directSoccerBottles = numberOfDirectSoccerBottles * 4000
                updatedValue = numberOfDirectSoccerBottles;
                updatedTotal = total_directSoccerBottles;
                break;
            case ('Green and Blue Football Gloves'):
                numberOfBlueGreenGloves += 1;
                document.getElementById("text14").innerHTML = numberOfBlueGreenGloves;
                total_blueGreenGloves = numberOfBlueGreenGloves * 6000
                updatedValue = numberOfBlueGreenGloves;
                updatedTotal = total_blueGreenGloves;
                break;
            case ('Football Kit'):
                numberOfKits += 1;
                document.getElementById("text15").innerHTML = numberOfKits;
                total_kits = numberOfKits * 5500
                updatedValue = numberOfKits;
                updatedTotal = total_kits;
                break;
        }
    }
    updateValues(itemName, updatedValue, updatedTotal); // Values are passed to be updated on-screen.
}

function decreaseItem(itemName) {
    var updatedValue = null; // Argument Variables
    var updatedTotal = null; // Argument Variables
    switch (itemName) {
        case ('Football Tshirt'):
            if (numberOfTshirts != 0) { // Prevents negative quantites.
                numberOfTshirts -= 1;
                document.getElementById("text01").innerHTML = numberOfTshirts;
                total_tshirt = numberOfTshirts * 7500;
                updatedValue = numberOfTshirts;
                updatedTotal = total_tshirt;
            }
            break;
        case ('Football Boot'):
            if (numberOfBoots != 0) {
                numberOfBoots -= 1;
                document.getElementById("text02").innerHTML = numberOfBoots;
                total_boot = numberOfBoots * 4000
                updatedValue = numberOfBoots;
                updatedTotal = total_boot;
            }
            break;
        case ('Football'):
            if (numberOfBalls != 0) {
                numberOfBalls -= 1;
                document.getElementById("text03").innerHTML = numberOfBalls;
                total_balls = numberOfBalls * 5000
                updatedValue = numberOfBalls;
                updatedTotal = total_balls;
            }
            break;
        case ('Football Bag'):
            if (numberOfBags != 0) {
                numberOfBags -= 1;
                document.getElementById("text04").innerHTML = numberOfBags;
                total_bags = numberOfBags * 5000
                updatedValue = numberOfBags;
                updatedTotal = total_bags;
            }
            break;
        case ('Adidas Football'):
            if (numberOfAdidasBalls != 0) {
                numberOfAdidasBalls -= 1;
                document.getElementById("text05").innerHTML = numberOfAdidasBalls;
                total_adidasBalls = numberOfAdidasBalls * 4000
                updatedValue = numberOfAdidasBalls;
                updatedTotal = total_adidasBalls;
            }
            break;
        case ('Football Jersey and Shorts'):
            if (numberOfJerseyShorts != 0) {
                numberOfJerseyShorts -= 1;
                document.getElementById("text06").innerHTML = numberOfJerseyShorts;
                total_jerseyShorts = numberOfJerseyShorts * 6500
                updatedValue = numberOfJerseyShorts;
                updatedTotal = total_jerseyShorts;
            }
            break;
        case ('Orange Football Boots'):
            if (numberOfOrangeBoots != 0) {
                numberOfOrangeBoots -= 1;
                document.getElementById("text07").innerHTML = numberOfOrangeBoots;
                total_orangeBoots = numberOfOrangeBoots * 1500
                updatedValue = numberOfOrangeBoots;
                updatedTotal = total_orangeBoots;
            }
            break;
        case ('Football Gloves'):
            if (numberOfGloves != 0) {
                numberOfGloves -= 1;
                document.getElementById("text08").innerHTML = numberOfGloves;
                total_gloves = numberOfGloves * 7500
                updatedValue = numberOfGloves;
                updatedTotal = total_gloves;
            }
            break;
        case ('Mitre Water Bottle'):
            if (numberOfMitreBottle != 0) {
                numberOfMitreBottle -= 1;
                document.getElementById("text09").innerHTML = numberOfMitreBottle;
                total_mitreBottles = numberOfMitreBottle * 2000
                updatedValue = numberOfMitreBottle;
                updatedTotal = total_mitreBottles;
            }
            break;
        case ('Football Socks'):
            if (numberOfSocks != 0) {
                numberOfSocks -= 1;
                document.getElementById("text10").innerHTML = numberOfSocks;
                total_socks = numberOfSocks * 5000
                updatedValue = numberOfSocks;
                updatedTotal = total_socks;
            }
            break;
        case ('Blue Football Jersey'):
            if (numberOfBlueJerseys != 0) {
                numberOfBlueJerseys -= 1;
                document.getElementById("text11").innerHTML = numberOfBlueJerseys;
                total_blueJerseys = numberOfBlueJerseys * 7000
                updatedValue = numberOfBlueJerseys;
                updatedTotal = total_blueJerseys;
            }
            break;
        case ('Football Shorts'):
            if (numberOfShorts != 0) {
                numberOfShorts -= 1;
                document.getElementById("text12").innerHTML = numberOfShorts;
                total_shorts = numberOfShorts * 3000
                updatedValue = numberOfShorts;
                updatedTotal = total_shorts;
            }
            break;
        case ('Direct Soccer Water Bottle'):
            if (numberOfDirectSoccerBottles != 0) {
                numberOfDirectSoccerBottles -= 1;
                document.getElementById("text13").innerHTML = numberOfDirectSoccerBottles;
                total_directSoccerBottles = numberOfDirectSoccerBottles * 4000
                updatedValue = numberOfDirectSoccerBottles;
                updatedTotal = total_directSoccerBottles;
            }
            break;
        case ('Green and Blue Football Gloves'):
            if (numberOfBlueGreenGloves != 0) {
                numberOfBlueGreenGloves -= 1;
                document.getElementById("text14").innerHTML = numberOfBlueGreenGloves;
                total_blueGreenGloves = numberOfBlueGreenGloves * 6000
                updatedValue = numberOfBlueGreenGloves;
                updatedTotal = total_blueGreenGloves;
            }
            break;
        case ('Football Kit'):
            if (numberOfKits != 0) {
                numberOfKits -= 1;
                document.getElementById("text15").innerHTML = numberOfKits;
                total_kits = numberOfKits * 5500
                updatedValue = numberOfKits;
                updatedTotal = total_kits;
            }
            break;
    }
    if (updatedValue != null) { // Prevents issues by clicking the minus button first.
        updateValues(itemName, updatedValue, updatedTotal);
    }
}

function updateValues(item, no_item, total_price) {
    var t1 = document.getElementById("loc_01_01").textContent; // Takes the Item Names displayed on screen and stores in variables.
    var t2 = document.getElementById("loc_02_01").textContent;
    var t3 = document.getElementById("loc_03_01").textContent;
    var t4 = document.getElementById("loc_04_01").textContent;
    var t5 = document.getElementById("loc_05_01").textContent;
    var tArray = [t1, t2, t3, t4, t5]; // Stores the Item Names in an array.

    if (tArray.includes(item)) { 
        var x = tArray.indexOf(item); // Traverses the Array and looks for a match to display the appropriate row on the display grid.

        document.getElementById(rowArray[x][0]).innerHTML = item;
        document.getElementById(rowArray[x][1]).innerHTML = no_item;
        document.getElementById(rowArray[x][2]).innerHTML = total_price;

    } else {
        var y = tArray.indexOf(''); // If the item hasn't been added before, it is given a new row.

        document.getElementById(rowArray[y][0]).innerHTML = item;
        document.getElementById(rowArray[y][1]).innerHTML = no_item;
        document.getElementById(rowArray[y][2]).innerHTML = total_price;
    }

    var s1 = parseInt(document.getElementById("loc_01_03").textContent) || 0; // Attempts to parse the value of the item in the row into Int, if failed it is replaced with 0.
    var s2 = parseInt(document.getElementById("loc_02_03").textContent) || 0;
    var s3 = parseInt(document.getElementById("loc_03_03").textContent) || 0;
    var s4 = parseInt(document.getElementById("loc_04_03").textContent) || 0;
    var s5 = parseInt(document.getElementById("loc_05_03").textContent) || 0;

    total = (s1 + s2 + s3 + s4 + s5);
    document.getElementById("total").innerHTML = total;
}

function submitOrderForm() {
    var item1 = [document.getElementById("loc_01_01").textContent, document.getElementById("loc_01_02").textContent]; // Extract information.
    var item2 = [document.getElementById("loc_02_01").textContent, document.getElementById("loc_02_02").textContent];
    var item3 = [document.getElementById("loc_03_01").textContent, document.getElementById("loc_03_02").textContent];
    var item4 = [document.getElementById("loc_04_01").textContent, document.getElementById("loc_04_02").textContent];
    var item5 = [document.getElementById("loc_05_01").textContent, document.getElementById("loc_05_02").textContent];


    var firstName = document.forms["OrderForm"]["firstName"].value; // Extract information.
    var lastName = document.forms["OrderForm"]["lastName"].value;
    var address = document.forms["OrderForm"]["address"].value;
    var telNo = document.forms["OrderForm"]["telNo"].value;
    var noGo = false;

    if (firstName == "" || lastName == "" || address == "" || telNo == "") { // Basic Form Validation using JavaScript.
        alert("Please fill in all the fields");
        noGo = true; // Flags a NoGo if a field fails to pass the validation.
    }

    if (noGo == false) {
        alert("Dear " + firstName + " " + lastName + ", you order has been successfully placed!\n" + item1[1] + "  " + item1[0] + "\n" + item2[1] + "  " + item2[0] + "\n" + item3[1] + "  " + item3[0] + "\n" + item4[1] + "  " + item4[0] + "\n" + item5[1] + "  " + item5[0] + "\n\n" + "Thank You for shopping with us!");
    }
}

function resetOrderForm() { // Clears all publicly accessible variables, textboxes and arrays.
    var numberOfTshirts = 0;
    var numberOfBoots = 0;
    var numberOfBalls = 0;
    var numberOfBags = 0
    var numberOfAdidasBalls = 0
    var numberOfJerseyShorts = 0;
    var numberOfOrangeBoots = 0;
    var numberOfGloves = 0;
    var numberOfMitreBottle = 0;
    var numberOfSocks = 0;
    var numberOfBlueJerseys = 0;
    var numberOfShorts = 0;
    var numberOfDirectSoccerBottles = 0;
    var numberOfBlueGreenGloves = 0;
    var numberOfKits = 0;

    var total_tshirt = 0;
    var total_boot = 0;
    var total_balls = 0;
    var total_bags = 0;
    var total_adidasBalls = 0;
    var total_jerseyShorts = 0;
    var total_orangeBoots = 0;
    var total_gloves = 0;
    var total_mitreBottles = 0;
    var total_socks = 0;
    var total_blueJerseys = 0;
    var total_shorts = 0;
    var total_directSoccerBottles = 0;
    var total_blueGreenGloves = 0;
    var total_kits = 0;

    var currentItemArray = ["", "", "", "", ""];
    var total = 0;

    document.getElementById("loc_01_01").innerHTML = "";
    document.getElementById("loc_01_02").innerHTML = "";
    document.getElementById("loc_01_03").innerHTML = "";
    document.getElementById("loc_02_01").innerHTML = "";
    document.getElementById("loc_02_02").innerHTML = "";
    document.getElementById("loc_02_03").innerHTML = "";
    document.getElementById("loc_03_01").innerHTML = "";
    document.getElementById("loc_03_02").innerHTML = "";
    document.getElementById("loc_03_03").innerHTML = "";
    document.getElementById("loc_04_01").innerHTML = "";
    document.getElementById("loc_04_02").innerHTML = "";
    document.getElementById("loc_04_03").innerHTML = "";
    document.getElementById("loc_05_01").innerHTML = "";
    document.getElementById("loc_05_02").innerHTML = "";
    document.getElementById("loc_05_03").innerHTML = "";
    document.getElementById("total").innerHTML = "";

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("telNo").value = "";
    document.getElementById("emailAddress").value = "";

    document.getElementById("cardNumber").value = "";
    document.getElementById("nameOnCard").value = "";
    document.getElementById("expiryDate").value = "";
    document.getElementById("cvv").value = "";
}