{\rtf1\ansi\ansicpg1252\cocoartf1265\cocoasubrtf210
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural

\f0\fs24 \cf0 def exit(arg):\
    loop = True\
    while loop:\
        if arg == 'y':\
            return True\
        elif arg == 'n':\
            return False\
        else:\
            print("Invalid input. Please enter only 'y' or 'n'.")\
\
def parseOperation(operation, operand1, operand2):\
    if operation == "add":\
        return int(operand1) + int(operand2)\
    elif operation == "sub":\
        return int(operand1) - int(operand2)\
    elif operation == "mult":\
        return int(operand1) * int(operand2)\
    elif operation == "div":\
        if operand2 != "0":\
            return int(operand1) / int(operand2)\
        else:\
            return "Cannot divide by zero."\
    else:\
        return "Invalid operation. Please enter only 'add', 'sub', 'mult', or 'div'."\
    \
    \
\
run = True;\
while run:\
    print("Please enter operation:")\
    print("(add sub mult div)")\
    op = input()\
    print("Enter numbers to " + op)\
    num1 = input()\
    num2 = input()\
    output = parseOperation(op, num1, num2)\
    print(output)\
    print("Another? y/n")\
    run = exit(input())\
print("Exiting...")}