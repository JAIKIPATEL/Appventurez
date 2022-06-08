/*JavaScript provides methods JSON.stringify to serialize into JSON and JSON.parse to read from JSON.
Both methods support transformer functions for smart reading/writing.
If an object has toJSON, then it is called by JSON.stringify
*/
let user = {
    name: "John Smith",
    age: 35
  };
  //great thing is that nested objects are supported and converted automatically.
  let user2 = JSON.parse(JSON.stringify(user));
  console.log(user2)
  let meetup1 = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
  
  alert( JSON.stringify(meetup1) );
  /* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */

 // The important limitation: there must be no circular references.

 // For instance:
  
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };
  
  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup; // room references meetup
  
  JSON.stringify(meetup); // Error: Converting circular structure to JSON

  