//Declare all rooms
var startRoom = new Room("Starting Room", "rm-00");
var storeRoom = new Room("Storeroom", "rm-01");
var diner = new Room("Diner", "rm-02");
var spikePit = new Room("Spike Pit", "rm-03");
var gallery = new Room("Gallery", "rm-04");
var toolShed = new Room("Tool Shed", "rm-05");

//Set room adjacencies
//0 = north     2 = south
//1 = east      3 = west
addAdjacentRoom(startRoom, diner, 0);       //diner is north of the starting room
addAdjacentRoom(startRoom, gallery, 1);     //gallery is east of the starting room
addAdjacentRoom(startRoom, spikePit, 2);    //spike pit is south of the starting room
addAdjacentRoom(startRoom, storeRoom, 3);   //storeroom is west of the starting room
addAdjacentRoom(spikePit, toolShed, 1);     //tool shed is east of the spike pit

//Place all items into rooms
//STARTROOM
var flask = new Item("Flask", "itm-00", false);
    addItemAction(flask, "get flask", "Try as you might you cannot get ye flask as it is bolted to the floor, which is presumedly bolted to the rest of the structure.");
    addItemAction(flask, "get ye flask", "Try as you might you cannot get ye flask as it is bolted to the floor, which is presumedly bolted to the rest of the structure.");
    addItemAction(flask, "kick flask", "Well, now you're frustrated AND your foot hurts. Got any other bright ideas?");
    addItemAction(flask, "kick ye flask", "Well, now you're frustrated AND your foot hurts. Got any other bright ideas?");
placeItem(startRoom, flask);
//DINER
var jukebox = new Item("Jukebox", "itm-01", false);
var booth = new Item("Booth", "itm-02", false);
    addItemAction(booth, "eat booth", "You ravonously tear a chuck of cusion " + 
            "out of the nearest booth with your teeth. Not as bad as you " +
            "expected, but a little chewy.");
var italianSodaMachine = new Item("Italian Soda Machine", "itm-03", false);
placeItem(diner, jukebox);
placeItem(diner, booth);
placeItem(diner, italianSodaMachine);
//GALLERY
var nickle = new Item("nickle", "itm-04", true);
    addItemAction(nickle, "get nickle", "Gee williker, it's your lucky day!");
    addItemTarget(nickle, jukebox, "Sweet toons fill the air");
placeItem(gallery, nickle);
//STOREROOM
var rope = new Item("Rope", "itm-05", true);
var boxesClubSoda = new Item("Boxes of Club Soda", "itm-06", false);
var clubSoda = new Item("Club Soda", "itm-07", true);
placeItem(storeRoom, rope);
placeItem(storeRoom, boxesClubSoda);
placeItem(storeRoom, clubSoda);
//SPIKE PIT
var ceilingHook = new Item("Hook", "itm-08", false);
placeItem(spikePit, ceilingHook);
//TOOL SHED
var hammer = new Item("Hammer", "itm-09", true);
var drill = new Item("Drill", "itm-10", true);
var crowbar = new Item("Crowbar", "itm-11", true);
placeItem(toolShed, hammer);
placeItem(toolShed, drill);
placeItem(toolShed, crowbar);


//Set the current room (this is the room the user will
//start in at the beginning of the game).
currentRoom = startRoom;