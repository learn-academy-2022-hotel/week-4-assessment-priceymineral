# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PSEUDO
# initialize method to take one argument (integer)
# use modulo to determine if input is even or odd
# returnd a string stating the input number and whether it is even or odd

def evenOrOdd(num) 
    whatIsIt = ''
    # if num % 2 == 0
    #     whatIsIt = 'even'
    # else 
    #     whatIsIt = 'odd'
    # end

    # Replaced if-else with ternary operator
    num % 2 == 0 ? whatIsIt = 'even' : whatIsIt = 'odd'

    "#{num} is #{whatIsIt}"
end

p evenOrOdd(num1)
p evenOrOdd(num2)
p evenOrOdd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PSEUDO
# initialize a function that takes one string as an argument
# initialize a vowels array containing all vowels as strings
# iterate over the input string
# if the current character in the input string is in vowels, delete it
# return the modified input array 

def disemvowel(str) 
    # vowels = ['a', 'e', 'i', 'o', 'u']
    # switched values to a string
    vowels = 'aeiou'

    str.split('').each do |c|
        if vowels.include? c
            str.delete! c
        end
    end
    
    p str
end

disemvowel(beatles_album1)
disemvowel(beatles_album2)
disemvowel(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
