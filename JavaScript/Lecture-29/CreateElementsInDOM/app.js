



// ------------------Adding element to DOM--------------------

// !. createElement(): Creates an element node.

// let pappi=document.createElement('div');
// let foolan=document.createElement('div');
 


// 2. appendChild(): Adds a node to the end of the list of children of a specified parent node.

// let pappi=document.createElement('div');
// let foolan=document.createElement('div');
// let arti=document.getElementById('arti');

// pappi.innerText="pappi chulo";
// foolan.innerText="foolan devi missing sachin baby";
// arti.appendChild(pappi);
// arti.appendChild(foolan);

// arti.appendChild(pappi,foolan); // This will not work as appendChild only takes one argument. You can only append one child at a time.

// 3. append(): Adds a node to the end of the list of children of a specified parent node. It can take multiple arguments.

// let pappi=document.createElement('div');
// let foolan=document.createElement('div');
// let arti=document.getElementById('arti');

// pappi.innerText="pappi chulo";
// foolan.innerText="foolan devi missing sachin baby";
// arti.append(pappi,foolan); // This will work as append can take multiple arguments. You can append multiple children at a time.



// 4. prepend(): Adds a node to the beginning of the list of children of a specified parent node. It can take multiple arguments.

// let pappi = document.createElement("div");
// let foolan = document.createElement("div");
// let arti = document.getElementById("arti");

// pappi.innerText = "Pappi Chulo";
// foolan.innerText = "Foolan Devi Missing Sachin Baby";

// arti.prepend(pappi, foolan);



// ------------------------------difference between appendChild, append and prepend----------------------------
//  appendchild          vs    append               vs   prepend
//  end                  |     end                  |    start
//  single child         |     multiple children    |    multiple children
//  html element only    |     html element + text  |    html element + text



// let pappi = document.createElement("div");
// let foolan = document.createElement("div");
// let arti = document.getElementById("arti");

// pappi.innerText = "Pappi Chulo";
// foolan.innerText = "Foolan Devi Missing Sachin Baby";

// arti.appendChild('mai ziddi hu sachin k 3ra vala kid: dharamwati');  // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
// arti.append(pappi, foolan, 'mai ziddi hu sachin k 3ra vala kid: dharamwati'); // This will work as append can take multiple arguments. You can append multiple children at a time.
// arti.prepend(pappi, foolan, 'mai ziddi hu sachin k 3ra vala kid: dharamwati'); // This will work as prepend can take multiple arguments. You can prepend multiple children at a time.



// 5. after(): Inserts a set of Node or string objects in the children list of this Element's parent, just after this Element. It can take multiple arguments.

// let pappi = document.createElement("div");
// let foolan = document.createElement("div");
// let arti = document.getElementById("arti");

// pappi.innerText = "Pappi Chulo";
// foolan.innerText = "Foolan Devi Missing Sachin Baby";

// arti.after(pappi, foolan, 'mai ziddi hu sachin k 3ra vala kid: dharamwati'); // This will work as after can take multiple arguments. You can insert multiple children at a time.



// 6. before(): Inserts a set of Node or string objects in the children list of this Element's parent, just before this Element. It can take multiple arguments.

// let pappi = document.createElement("div");
// let foolan = document.createElement("div");
// let arti = document.getElementById("arti");

// pappi.innerText = "Pappi Chulo";
// foolan.innerText = "Foolan Devi Missing Sachin Baby";

// arti.before(pappi, foolan, 'mai ziddi hu sachin k 3ra vala kid: dharamwati'); // This will work as before can take multiple arguments. You can insert multiple children at a time.  








