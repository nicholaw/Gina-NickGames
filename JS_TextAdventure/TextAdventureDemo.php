<html>
    <head>
        <title>Text Adventure</title>
        <link rel="stylesheet" href="css/TextAdventure_Styles.css" />
        <script src="js/Room.js"></script>
        <script src="js/Item.js"></script>
        <script src="js/Inventory.js"></script>
        <script src="js/controller.js"></script>
        <script src="js/startup.js"></script>
    </head>
    <body>
        <p id="output"></p>
        <input id="userCommand" type="text" placeholder="Enter a command." />
        <input id="submitCommand" type="button" value="Enter" onclick="parseCommand()" />
        <script>enterRoom(currentRoom);</script>
    </body>
</html>