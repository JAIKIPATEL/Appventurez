/*Given an array of integers, keep a total score based on the following:
1. Add 1 point for every even number in the array
2. Add 3 points for every odd number in the array, except for the number "5"
3. Add 5 points every time the number "5" appears in the array
4. Add 1 point for every 0 in  the array

Input: [1, 2, 3, 4, 5]  Output: 13
Input: [17, 19, 21] Output: 9
Input: [5, 5, 5] Output: 15
*/


 const arr1 = [5, 5, 5];
 let sum = 0;
 for(let i=0; i<arr1.length; i++){
     if(arr1[i] % 2 == 0) 
         sum += 1;
     else if((arr1[i] % 2 != 0) && (arr1[i] != 5))
         sum += 3;
     else if(arr1[i] == 5)
         sum += 5;
     else if(arr1[i] == 0)
         sum += 1;
 }

 console.log(sum);
