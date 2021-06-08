/* eslint-disable */
// import {FC} from 'react';

// ANCHOR Defining Types
interface specificPropType {
  name: string;
  id: number;
}

const prop: specificPropType = {
  name: 'Michael',
  id: 1,
};

// Can be used with classes
class ClassUser {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: specificPropType = new ClassUser('Michael', 1);

// can delete using interface
const deleteUser = (user: specificPropType) => {
  console.log(user.name);
};

// ANCHOR Creating Types

type oddNumbersUnder10 = 1 | 3 | 5 | 7 | 9;

interface nums {
  num: oddNumbersUnder10;
}
const num: nums = {
  // num: 2,
  num: 3,
};

// ANCHOR Unions
const getLength = (obj: string | string[]) => {
  return obj.length;
};

/*
Type    Predicate
string  typeof x === "string"
number  typeof x === "number"
bigint typeof x === "bigint"
boolean  typeof x === "boolean"
symbol typeof x === "symbol"
undefined  typeof x === "undefined"
function  typeof x === "function"
object typeof x === "object"
array Array.isArray(x)
*/

// ANCHOR Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Declare your own type that uses generics
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// Declare without instantiating const
// declare const backpack: Backpack<string>;
// const getType = backpack.get();
// backpack.add('item')

// ANCHOR Structural Type System
// TypeScript does "duck typing" or "structural typing"
// aka. same shape === same type
interface pos {
  x: number;
  y: number;
}

const checkType = (obj: pos) => {
  console.log(obj.x, obj.y);
};

class PositionType {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// works
checkType({ x: 1, y: 2 });
checkType(new PositionType(3, 4));
// doesn't work
// checkType({z: 5})

// ANCHOR Types
const a: string = 'hi';
const b: number = 3;
const c: boolean = false;
const d: string[] = [];
const e: Array<number> = [];
const obj: any = {};

// ANCHOR Return type Annotations
const getFavNum = (): number => {
  return 3;
};

// ANCHOR The in operator narrowing
type Fish = { swim: () => void; type: 'fish' };
type Bird = { fly: () => void; type: 'bird' };
// swim? = optional = Does not need to implement
type Human = { swim?: () => void; fly?: () => void };

// Could also use instanceof Date
const move = (animal: Fish | Bird | Human) => {
  if ('swim' in animal) {
    console.log(animal);
  } else {
    console.log(animal);
  }
};

// ANCHOR Type predicates
const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

// ANCHOR Exhastive Checking
type Animal = Fish | Bird;

const getAnimal = (animal: Animal) => {
  switch (animal.type) {
    case 'bird':
      return 'I am bird';
    case 'fish':
      return 'I am fish';
    default:
      // TypeScript will use a never type to represent a state which shouldn't exist
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
};

// ANCHOR readonly Properties
interface readOnlyUser {
  readonly name: string;
  readonly age: number;
}

// ANCHOR Index Signatures
interface StringDict {
  [index: string]: string | number;
  id?: number; // only valid cause of union
}

const myStringDict: StringDict = {};
myStringDict['test'] = 'testValue';
console.log(myStringDict);

// ANCHOR Extending types
interface Animal2 {
  type: string;
}

interface Lion extends Animal2 {
  name: string;
}

// ANCHOR Intersection
// Produce a type with all properties of both
const swimOrFly = (animal: Bird & Fish) => {
  console.log(animal);
};

interface interfaceWithType<Type> {
  contents: Type;
}

// ANCHOR The Array type
interface MyArray<Type> {
  /**
   * Gets or sets the length of the array
   */
  length: number;
  /**
   * Removes the last elemnt from an array and returns it
   */
  pop(): Type | undefined;
  /**
   * Appends new elemnts to an array, and returns the new length of the array
   */
  push(...items: Type[]): number;
}
const readOnlyArray: ReadonlyArray<number> = [1, 2, 3, 0];

// ANCHOR Tuple types
// Array type that knows exactly how many elements it contains
type StringNumberBoolTuple = [string, number, ...boolean[]];

// ANCHOR Abstract
abstract class Abs {
  abstract getFunc(): string;
}

class UseAbs extends Abs {
  getFunc() {
    return 'returns string';
  }
}

// Learned from https://www.typescriptlang.org/docs/handbook/intro.html

// ANCHOR React + TypeScript
interface Props {
  msg: string;
}

// ! Alternative to FC
// const App = ({msg}: Props): JSX.Element => {
//     return (<div>
//         {msg}
//         </div>)
// }
