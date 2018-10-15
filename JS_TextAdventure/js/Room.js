//A room which the user can occupy. User can move between rooms
//which are adjacent. Rooms can also contain items with which 
//the user can interact.
//
//@param
//  n: room's name (String)
//  i: room's unique id (String)
function Room(n, i)
{
    this.name = n;
    this.id = i;
    this.description = "";             //Description of this room
    this.adjacentRooms = new Array(null, null, null, null); //Rooms adjacent to this room
    this.actions = new Array();       //Actions the user can take within this room 
    this.results = new Array();       //Results of actions taken in this room
    this.items = new Array();         //Items located in this room
    this.enterable = true;            //Is the user able to enter this room
}

//Sets two rooms adjacenct to one another by adding each to 
//the respective room's adjacentRooms array in the appropriate
//direction.
//
//@param
//  room1: the first room (Room)
//  room2: the second room (Room)
//  direction: the relation of the second room to the first room (int)
function addAdjacentRoom(room1, room2, direction)
{
    var oppositeDirection = direction;
    if(direction > 1)
        oppositeDirection -= 2;
    else
        oppositeDirection += 2;
    
    room1.adjacentRooms[direction]=room2;
    room2.adjacentRooms[oppositeDirection]=room1;
}

//Places an item in a room.
//
//@param
//  room: the room being set (Room)
//  item: the item being placed (Item)
function placeItem(room, item)
{
    room.items[room.items.length] = item;
}

//Removes an item from a room. Returns true if the item was successfully
//removed and false otherwise.
//
//@param
//  room: the room from which the item is being removed
//  index: the index of the item being removed in the room's items array
function removeItemFromRoom(room, index)
{
    return (room.items.splice(index, 1) !== null);
}

//Sets the description for this that will be display when the user
//enters this room.
//
//@param
//  room: the room being set
//  desc: text that will be displayed (String)
function setRoomDescription(room, desc)
{
    room.description = desc;
}

//Makes changes to the current description associated to a room.
//
//@param
//  room: the room being set
//  desc: text that will be displayed (String)
function updateRoomDescription(room, desc)
{
    //TODO: I don't really know how this is supposed to work, but the idea is 
    //to change the description of the room based on the action the user has
    //taken. For example, if the user has attempted to eat a booth, then the 
}