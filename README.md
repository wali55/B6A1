1. What are some differences between interfaces and types in TypeScript?

Interface দিয়ে শুধু Array, Object, Function এর টাইপ ডিফাইন করা যায়, Primitive টাইপ যেমন string, number, boolean ইত্যাদি ডিফাইন করা যায় না। Types দিয়ে সব ডাটা টাইপের টাইপ ডিফাইন করা যায়। দুটি Type এর intersection এর মাধ্যমে নিউ টাইপ create করা যায় কিন্তু Interfaces এর মধ্যে intersection করা যায় না তা এক্সটেন্ড করতে হয়।

2. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof ব্যবহার করে আমরা অবজেক্ট টাইপ ডেফিনেশন থেকে তার key গুলো নিয়ে তাদের ইউনিয়ন create করা যায়।

type PersonVehicle = {
    car: string;
    ship: string;
    bike: string;
}

type MyVehicle = keyof PersonVehicle;   // "car" | "ship" | "bike"

3. Explain the difference between any, unknown, and never types in TypeScript.

any টাইপ বলতে তার জায়গায় যেকোনো টাইপ বসতে পারবে, এক্ষেত্রে কোনো টাইপ সেফটি থাকে না।
unknown টাইপ বলতে বোঝায় কোন টাইপ বসবে তা এই মুহূর্তে আমার জানা নেই। 
never টাইপ বলতে বজায় যে এই function কোনো data রিটার্ন করবে না। never রিটার্ন টাইপ সাধারণত error ব্লক এ দেখা যায়।  


4 What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enum হলো ফিক্সড constants যেটা আমাদের কোড কে আরো বেশি Readable এবং মেইনটেইন করতে হেল্প করে।

String enum:
enum Role {
    Admin = "ADMIN",
    Editor = "EDITOR",
    Viewer = "VIEWER"
}

Numeric enum:
enum Direction {
    Up = 1,
    Down
}

5. Provide an example of using union and intersection types in TypeScript.

Example of union type:
type value = string | number; 

// এখানে ২টি ডাটা টাইপ এর union দেখানো হচ্ছে। এখানে value string অথবা number হতে পারে। 

Example of intersection type:
type User = {
    name: string;
    age: number;
}
type Manager = {
    designation: string;
}

type ManagerUser = User & Manager; 

// এখানে ২টি টাইপ এর মধ্যে intersection হয় এবং নতুন টাইপ তৈরী হয়েছে। নতুন টাইপ এ আগের টাইপ গুলোর সব property গুলো থাকবে। 