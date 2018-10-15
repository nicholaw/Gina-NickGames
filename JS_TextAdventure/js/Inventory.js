//The user's inventory. Contains all the items which the user has acquired
//over the course of their adventure. Some items can be added or removed
//from the user's inventory.
//
//@param
function Inventory()
{
    this.items = new Array();
}

//Attempts to add an item to the user's inventory. If the item does not already
//exist in the user's inventory, adds item to the last index of the inventory
//array and returns true. Otherwise returns false.
//
//@param
//  item: the item being added to the user's inventory (Item)
//  inventory: the user's inventory (Inventroy)
function add(item, inventory)
{
    //check that item does not already exit in array
    for(var i = 0; i < inventory.items.length; i++)
    {
        if(inventory.items[i].id === item.id)
            return false;
    }
    
    //add item to inventory
    
    return (inventory.items.push(item) > 0);
}

//Attempts to remove an item from the user's inventory. If the item exists in 
//the user's inventory, removes the item from the array and returns true. 
//otherwise returns false
//
//@param
//  item: the item being removed from the user's inventory (Item)
//  inventory: the user's inventory (Inventroy)
function remove(item, inventory)
{
    for(var i = 0; i < inventory.items.length; i++)
    {
       if(inventory.items[i].id === item.id)
           return (inventory.items.splice(i, 1) !== null);
    }
    return false;
}

//Returns true if the provided array contains the provided object and false
//otherwise.
//
//@param
//  array: the array (Array)
//  obj: the object (Object)
function contains(array, obj)
{
   for(var i = 0; i < array.items.length; i++)
    {
        if(array[i] === obj)
            return true;
    }
    return false;
}