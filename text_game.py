# Python text RPG
# Gina Foote

import cmd
import textwrap
import sys
import os
import time
import random



#### Player Setup ####
class player:
    def __init__(self):
        self.name = ""
        self.hp = 100
        self.oxygen = 100


myPlayer = player()


#### Title Screen ####
def title_screen_selections():
    option = input("> ")
    while option.lower() not in ["play", "help", "quit"]:
        print("Please enter a valid command.")
        option = input("> ")
    if option.lower() == "play":
        start_game()  # function not written yet
    elif option.lower() == "help":
        help_menu()
    elif option.lower() == 'quit':
        sys.exit()

def title_screen():
    if sys.platform.startswith('linux'):
        os.system("clear")
    elif sys.platform.startswith('win32'):
        os.system("cls")
    elif sys.platform.startswith('darwin'):
        os.system("clear")
    print("###################################################################################################")
    print("#        '                   _   __ _    _ ___ _   _ ___ _  _ ___  ___ __                .        #")
    print("#  *          .             /_\  | \ \  /  |__ | \ |  |  |  | |__| |__ |__       '       !        #")
    print("#         *       '        /   \ | /  \/   |__ |  \|  |  |__| |  \ |__ ___|              |        #")
    print("#    *                *                                                            .   --+  - - . #")
    print("#                      -----------------------| |\|---------------------------           |        #")
    print("#                  *                                                                     !        #")
    print("#           .              * * * *  * * * *    ***      * * * *  * * * *          *               #")
    print("#           :              *        *      *  *   *    *         *                        .       #")
    print("#     . - --+- -  .         * * *   * * * *  * * * *  *          * * * *                        . #")
    print("#           !                    *  *        *     *   *         *                 *              #")
    print("#           .              * * * *  *        *     *    * * * *  * * * *                      '.  #")
    print("#  *                                                                          *        '         *#")
    print("###################################################################################################")
    print("                                         .---* Play *---.                                          ")
    print("                                         .---* Help *---.                                          ")
    print("                                         .---* Quit *---.                                          ")
    print("                                                                                                   ")
    print("                                       #### Gina Foote ####                                        ")
    print("                                                                                                   ")
    title_screen_selections()

def help_menu():
    print("#####################################################")
    print("#                    Help Screen                    #")
    print("#####################################################")
    print("                                                     ")
    print("  - Type 'up', 'down', 'left', and 'right' to move - ")
    print("             - Some helpful commands -               ")
    print("                      'look'                         ")
    print("                       'use'                         ")
    print("                      'take'                         ")
    print("                     'turn on'                       ")
    print("                'equip' or 'put on'                  ")
    print("                                                     ")
    print("                                                     ")
    print("          ### Good luck and have fun! ###            ")
    print("                                                     ")
    title_screen_selections()

title_screen()
