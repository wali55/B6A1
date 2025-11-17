const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value * 10;
  } else if (typeof value === "boolean") {
    !value;
  }
  return value;
};


const getLength = (value: string | unknown[]): number => {
  let count = 0;
  if (typeof value === "string") {
    for (let i = 0; i < value.length; i++) {
      count++;
    }
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      count++;
    }
  }
  return count;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


const filterByRating = (
  arr: Array<{ title: string; rating: number }>
): Array<{ title: string; rating: number }> => {
  const filteredArray = arr.filter((item) => item.rating >= 4);
  return filteredArray;
};


const filterActiveUsers = (
  arr: Array<{ id: number; name: string; email: string; isActive: boolean }>
): Array<{ id: number; name: string; email: string; isActive: boolean }> => {
  const filteredArray = arr.filter((user) => user.isActive);
  return filteredArray;
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`
  );
};


const getUniqueValues = (
  arr1: number[] | string[],
  arr2: number[] | string[]
): unknown[] => {
  const newArr: unknown[] = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
};


const calculateTotalPrice = (
  arr: Array<{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }>
): number => {
  const totalPrice = arr.reduce((acc, curr) => {
    acc =
      acc +
      curr.price * curr.quantity -
      ((curr.discount || 0) * curr.price * curr.quantity) / 100;
    return acc;
  }, 0);
  return totalPrice;
};
