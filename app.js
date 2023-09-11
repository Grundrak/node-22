const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let ContactList = [];

function AddContact () {
rl.question('Put the name of your contact please : ', (Name) => {
    if(Name.toLowerCase() === 'exit') {
        rl.close();
        console.log(ContactList)
    }else{
    rl.question('Put the number of your contact please : ', (PhoneNumbr) => {
        ContactList.push(Name,PhoneNumbr);
        AddContact();
    });
    }
});
}
AddContact();

function 