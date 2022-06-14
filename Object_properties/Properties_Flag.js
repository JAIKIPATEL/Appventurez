/*The returned value is a so-called “property descriptor” object: it contains the value and all the flags.
*/

//let user = {
 // name: "John"
//};

//let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

//console.log( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}


Object.defineProperty(obj, propertyName, descriptor)
obj, propertyName
The object and its property to apply the descriptor.
descriptor
Property descriptor object to apply.
If the property exists, defineProperty updates its flags. Otherwise, it creates the property with the given value and flags; in that case, if a flag is not supplied, it is assumed false.

For instance, here a property name is created with all falsy flags: */

let user1 = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user1, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

