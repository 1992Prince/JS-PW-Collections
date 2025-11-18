const userRoles: Record<string, string> = {
    alice: "Engineer",
    bob: "Designer",
};

console.log(`userRoles.alice - ${userRoles.alice}`); // Output: Engineer
console.log(`userRoles["bob"] - ${userRoles["bob"]}`);     // Output: Designer

console.log();

type User = "alice" | "bob";

const userRoles2: Record<User, string> = {
    alice: "Engineer",
    bob: "Designer",
    // charlie: "Manager", ❌ Error, not allowed
};

console.log(userRoles2.alice); // Engineer
console.log(userRoles2["bob"]);   // Designer
//console.log(userRoles2["pikachu"]);   // this will give compile time error and below error u will see
/**
 * Element implicitly has an 'any' type because expression of type '"pikachu"' can't be used to index type 'Record<User, string>'.
  Property 'pikachu' does not exist on type 'Record<User, string>'.ts(7053)
 */