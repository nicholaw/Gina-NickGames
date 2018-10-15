var message = "";           //The message being displayed to the user
var rooms = new Array();    //The rooms that make up the map
var commandWords = [null, null, null, null]; //Individual words of the command entered by the user
var currentRoom = new Room("0", "0");   //The room in which the user is currently standing
var userInventory = new Inventory();    //Array of items which comprise the user's inventory
var playerStatus = "nominal";   //Status of the player; game will end if status = "dead"

//User enters a new room. Describe the room and which rooms are adjecent.
//Describe any items in the room.
//
//@param
//  room: the room being entered (Room)                         //TODO: move this method to Room.js (it shouldn't be in the controller)
function enterRoom(room)
{
    message = "";
    message += "You are currently in the " + room.name + ". ";
    message += getAdjacentRooms(room);
    message += getItems(room);
    message += getInventory();
    document.getElementById("output").innerHTML = message;
}

//Returns a String with the descriptions of any rooms adjacent to the provided room.
//
//@param
//  room: the room being surveyed (Room)                        //TODO: move this method to Room.js (it shouldn't be in the controller)
function getAdjacentRooms(room)
{
    var roomDescriptions = "";
    for(var i = 0; i < room.adjacentRooms.length; i++)
    {
        if(room.adjacentRooms[i] !== null)
        {
            roomDescriptions += "There is a " + room.adjacentRooms[i].name + " to the " + parseDirection(i) + ". ";
        }
    }
    return roomDescriptions;
}

//Returns a String with the descriptions of any items in the provided room.
//
//@param
//  room: the room being surveyed (Room)                        //TODO: move this method to Room.js (it shouldn't be in the controller)
function getItems(room)
{
    var itemDescriptions = "";
    for(var i = 0; i < room.items.length; i++)
    {
        itemDescriptions += "There is a " + room.items[i].name + " in this room. ";
    }
    return itemDescriptions;
}

//Returns a String containing the names of all the items in the user's inventory
//
//@param
//  none
function getInventory()
{
    var itemNames = "";
    for(var i = 0; i < userInventory.items.length; i++)
    {
        itemNames += "You are carrying a " + userInventory.items[i].name;
    }
    return itemNames;
}

//parses a command entered by the user
function parseCommand()
{
    var command = document.getElementById('userCommand').value;
    document.getElementById('userCommand').value = "";
    command = command.toLowerCase();
    
    var newMessage = "";
    var commandWords = commandBreakdown(command);
    var commandCue = commandWords[0];
    var validCommand = false;
    var enteredNewRoom = false;
    
    //-----------------------GO-MOVE-----------------------------------------------------------------------------------------
    if(commandWords[0] === "go" || commandWords[0] === "move") //user is trying to move between rooms; only check for directions
    {
        switch(command)
        {
            case "go north":
                if(currentRoom.adjacentRooms[0] !== null)
                {
                    currentRoom = currentRoom.adjacentRooms[0];
                    enterRoom(currentRoom);
                    enteredNewRoom = true;
                }
                else
                    newMessage = "Cannot go North. ";
                validCommand = true;
                break;
            case "go east":
                if(currentRoom.adjacentRooms[1] !== null)
                {
                    currentRoom = currentRoom.adjacentRooms[1];
                    enterRoom(currentRoom);
                    enteredNewRoom = true;
                }
                else
                    newMessage = "Cannot go East. ";
                validCommand = true;
                break;
            case "go south":
                if(currentRoom.adjacentRooms[2] !== null)
                {
                    currentRoom = currentRoom.adjacentRooms[2];
                    enterRoom(currentRoom);
                    enteredNewRoom = true;
                }
                else
                    newMessage = "Cannot go South. ";
                validCommand = true;
                break;
            case "go west":
                if(currentRoom.adjacentRooms[3] !== null)
                {
                    currentRoom = currentRoom.adjacentRooms[3];
                    enterRoom(currentRoom);
                    enteredNewRoom = true;
                }
                else
                    newMessage = "Cannot go West. ";
                validCommand = true;
                break;
        }
    }
    //-------------------GET-TAKE-----------------------------------------------------------------------------------------------------------------
    else if(commandWords[0] === "get" || commandWords[0] === "take") //User is trying to place item in their inventory; only check items in the current room
    {
        var target = getCommandTarget(command);//get the name of the item the user is trying to get
	target = target.toLowerCase();
        for(var i = 0; i < currentRoom.items.length; i++) //loop through items in the room
        {
            if(target === currentRoom.items[i].name.toLowerCase()) //the command matches one of the items
            {
                for(var j = 0; j < currentRoom.items[i].actions.length; j++) //loop through actions available on that item
                {
                    if(command === currentRoom.items[i].actions[j]) //the command matches on of the item's actions
                    {
                        newMessage = currentRoom.items[i].results[j]; //print the result of that action
                        validCommand = true;
                        if(currentRoom.items[i].obtainable) //attempt to add that item to the user's inventory
                            if(add(currentRoom.items[i], userInventory))
				removeItemFromRoom(currentRoom, i); //if the item is successfully added to the user's inventory, remove it from the room
                        break;
                    }
                }
            }
        }
    }
    //--------------------USE ON---------------------------------------------------------------------------------------------------------------------
    else if(commandWords[0] === "use" && commandWords[2] ==="on") //User is trying to use an item in their inventory; check items in the user's inventory
    {
        
    }
    //--------------------USE---------------------------------------------------------------------------------------------------------------------
    else if(commandCue === "use") //User is trying to use an item in the room or in their inventory; check items in current room and in inventory
    {
        
    }
    //-------------------MISC----------------------------------------------------------------------------------------------------------------------
    else //User entered a unique or invalid command or did not use a command cue (i.e. only entered "north"); check everything
    {
       for(var i = 0; i < currentRoom.items.length; i++)
       {
           for(var j = 0; j < currentRoom.items[i].actions.length; j++)
           {
               if(command === currentRoom.items[i].actions[j])
               {
                   newMessage = currentRoom.items[i].results[j];
                   validCommand = true;
                   break;
               }
               //TODO: switch to while loop
           }
       }
    }
     
    //Display any new messages
    if(!validCommand)
        newMessage = "Invalid command. ";
    else if(!enteredNewRoom)
        document.getElementById('output').innerHTML = (newMessage + message);

    enterRoom(currentRoom);
    document.getElementById('output').innerHTML = (newMessage + message); //display the message
    
    //check the player's status
    checkPlayerStatus();
}//parseCommand

//Return array of each of the words of the user's command (deliminated by a space)
//
//@param
//  str: the command enterd by the user (String)
function commandBreakdown(str)
{
    var breakdown = [];
    var word = "";
    var index = 0;
    for(var i = 0; i < str.length; i++)
    {
        if(str.charAt(i) === " ")
        {
            breakdown[index] = word;
            index++;
            word = "";
        }
        else
            word += str.charAt(i);
    }
    while(breakdown.length < 4)
    {

    }
    return breakdown;
}

//Returns the first word (deliminated by a space) of the user's command
//
//@param
//  str: the user's command (String)
function getCommandCue(str)
{
    var cue = "";
    
    for(var i = 0; i < str.length; i++)
    {
        if(str.charAt(i) === " ")
            return cue;
        else
            cue += str.charAt(i);
    }
    return cue;
}

//Returns the last word of the user's command (deliminate by a space).
//
//@param
//	str: the command the user entered (String)
function getCommandTarget(str)
{
	var target = "";
	for(var i = (str.length - 1); i >= 0; i--)
    {
        if(str.charAt(i) === " ")
            return target;
        else
            target = str.charAt(i) + target;
    }
	return target;
}

//Returns the relative direction of an adjacent room based on the integer provided.
//
//@param
//  direction: the relative direction (int)
function parseDirection(direction)
{
    switch(direction)
    {
        case 0:
            return 'North';
        case 1:
            return 'East';
        case 2:
            return 'South';
        case 3:
            return 'West';
        default:
            return 'Somewhere';
    }
}

//Checks the status of the player and applies effects where necessary
function checkPlayerStatus()
{
    if(playerStatus === "dead")
        gameEnd();
}

//Ends the game
function gameEnd()
{}