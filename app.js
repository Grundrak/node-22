const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contactList = [];

function AddContact () {
rl.question('Put the name of your contact please : ', (name) => {
    if(name.toLowerCase() === 'exit') {
        rl.close();
        Display();
    }else if (name.toLowerCase() === 'search') {
        search()
    }else{
    rl.question('Put the number of your contact please : ', (phonenumbr) => {
        contactList.push({name,phonenumbr});
        AddContact();
    });
    }
});
}
AddContact();

function Display () {
    contactList.forEach((contact)=> {
        console.log(`name : ${contact.name} The Number phone : ${contact.phonenumbr}`);
    });
}

function search () {
rl.question('What the name you want to search : ', (searchname) => {
        let l9ito = false ; 
        for ( i=0 ;i< contactList.length ;i++) {
            if(contactList[i].name === searchname){
                console.log(`The name you put ${searchname} founded with the number phone ${contactList[i].phonenumbr}`);
                rl.close();
                l9ito = true ;
                break;
            }
        }
        if (!l9ito) {
            console.log('Sorry but the name not founded');
            rl.close();
        }
})



}




  

