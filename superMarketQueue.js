// There is a queue for the self-checkout tills at the supermarket. 
// Your task is write a function to calculate the total time required for 
// all the customers to check out!

// input
// customers: an array of positive integers representing the queue. 
// Each integer represents a customer, and its value is the amount of 
// time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customers, n) {
    //create an array of tills 
    // iterate over customers then find the till with less time and add the next customers time
    // return max value from the tills array

    let tills = Array(n).fill(0)


    for (let customerTime in customers) {
        //add the customerTime to the till with least time
        let minTillIndex = tills.indexOf(Math.min(...tills)); // need to calculate this inside of the loop
        tills[minTillIndex] += customers[customerTime]
    }

    console.log(Math.max(...tills))

  }


//ex 
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12