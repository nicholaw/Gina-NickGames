//An item that resides in a room; some items can be removed
//from their rooms; some items can be placed in the user's 
//inventory
//
//@param
//  n: the item's name (String)
//  i: the item's id (String)
//  g: whether or not this item can be added to the user's inventory (boolean)
function Item(n, i, g)
{
    this.name = n;
    this.id = i;
    this.obtainable = g;
    this.description = "";          //Description of this item
    this.imageSource = "";          //URL of the image which represents this item in the user's inventory
    this.actions = new Array();     //Actions the user can take with this item
    this.results = new Array();     //Results of any actions taken with this item
    this.targets = new Array();     //Items this item can be used on 
    this.targetResults = new Array();//Results of using this item on other items
}

//Sets the image URL for an item
//
//@param
//  item: the item being set (Item)
//  src: the image URL (String)
function addItemImage(item, src)
{
    item.imageSource = src;
}

//Adds and action and result to an item
//
//@param
//  item: the item being set (Item)
//  command: the command the user must enter to use the item (String)
//  result: the result of using the item (String)
function addItemAction(item, command, result)
{
    item.actions[item.actions.length] = command;
    item.results[item.results.length] = result;
}

//Add a target and result for the "use [item] on [target]" command
//
//@param
//  item: the item being use (Item)
//  target: the item being targeted (Item)
//  result: the result of the usage (Strig)
function addItemTarget(item, target, result)
{
    item.targets[item.targets.length] = target;
    item.targetResults[item.targetResults.length] = result;
}

//Sets the attribute determining if an item can be added to the user's 
//inventory.
//
//@param
//  b: true for item obtainable or false for item not obtainable (Boolean)
function setObtainable(item, b)
{
    item.obtainable = b;
}