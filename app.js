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
        Display();
    }else{
    rl.question('Put the number of your contact please : ', (PhoneNumbr) => {
        ContactList.push({Name,PhoneNumbr});
        AddContact();
    });
    }
});
}
AddContact();

function Display () {
    ContactList.forEach((contact)=> {
        console.log(`Name : ${contact.Name} The Number phone : ${contact.PhoneNumbr}`);
    });
}