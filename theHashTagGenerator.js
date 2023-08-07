// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    // if over 140 or its an empty string return false
    // split the string when there is one or more space
    // capitalize first char of every item in the array , map ? 
    // join them back together with no space and hashtag in the front

    if(str.trim().length === 0) {
        return false
    }
  
    let newStr = str.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    let hashtag = "#" + newStr
    
    if(hashtag.length > 140) {
      return false
    }
  
    return hashtag
  }

  console.log(generateHashtag (" Meow meow meow 100 days of meow"))
  console.log(generateHashtag(''))