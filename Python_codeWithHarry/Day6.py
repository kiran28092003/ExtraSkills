#Exersice
#Q) create a calculator
print("hello Friend...welcome to my calculator")
while True:
    num1 = float(input("Enter first number: "))  
    op = input("Enter operator (+, -, *, /, **, //): ")  
    num2 = float(input("Enter second number: "))  

    if op == '+':  
        print("Addition:", num1 + num2)  
    elif op == '-':  
        print("Subtraction:", num1 - num2)  
    elif op == '*':  
        print("Multiplication:", num1 * num2)  
    elif op == '/':  
        print("Division:", num1 / num2 if num2 != 0 else "Error! Division by zero.")  
    elif op == '**':  
        print("Exponential is:", num1 ** num2)  
    elif op == '//':  
        print("Floor Division is:", num1 // num2 if num2 != 0 else "Error! Division by zero.")  
    else:  
        print("Invalid operator!")  

    again = input("Do you want to perform another calculation? (yes/no): ").lower()
    if again != 'yes':
        print("Goodbye!")
        break
