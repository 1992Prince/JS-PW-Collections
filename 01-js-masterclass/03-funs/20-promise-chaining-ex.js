/**
Story: Checking Your Package Status
Imagine after getting your package delivered, you want to check its contents, 
then decide whether to return it or keep it.

Explanation: Chaining allows performing multiple asynchronous operations sequentially
 */

const checkPackage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Package checked");
        }, 2000);
    });
};

const decideAction = (status) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(status + " -> Action decided");
        }, 2000);
    });
};

checkPackage()
    .then(decideAction)
    .then((result) => {
        console.log(result); // Output: Package checked -> Action decided
    })
    .catch((error) => {
        console.log(error); // Handle any errors
    });