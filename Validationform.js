

const fullnameNode = $("#fullname");
const emailNode = $("#email");
const mobileNode = $("#mobile");


const errorNode1 = $("#error1");
const errorNode2 = $("#error2");
const errorNode3 = $("#error3");


fullnameNode.on('keyup', () => validateFullName());
emailNode.on('keyup', () => validateEmail());
mobileNode.on('keyup', () => validateMobile());

// Variables
let fullname = "";
let email = "";
let mobile = "";


const requireMessage = "* This field is required.";


const namePattern = /^[A-Za-z\s]+$/; // Allows alphabets and spaces
const mobilePattern = /^[0-9]{10}$'/; // Allows exactly 10 digits
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email format

// Border Styles
const invalidBorder = "1px solid red";
const validBorder = "1px solid green";

// Validation Functions
function validateFullName() {
    errorNode1.text(""); // Clear error message
    fullname = fullnameNode.val();
    fullnameNode.css("border", invalidBorder); // Default to invalid border

    if (fullname === "") {
        errorNode1.text(requireMessage);
        return false;
    } else if (namePattern.test(fullname)==false) {
        errorNode1.text("Full name must contain only alphabets and spaces.");
        return false;
    } else {
        fullnameNode.css("border", validBorder); // Set valid border
        return true;
    }
}

function validateEmail() {
    errorNode2.text(""); // Clear error message
    email = emailNode.val();
    emailNode.css("border", invalidBorder); // Default to invalid border

    if (email === "") {
        errorNode2.text(requireMessage);
        return false;
    } else if (emailPattern.test(email)==false) {
        errorNode2.text("Please enter a valid email address.");
        return false;
    } else {
        emailNode.css("border", validBorder); // Set valid border
        return true;
    }
}
function validateMobile(){
    errorNode3.text("")
    mobileNode.css("border",invalidBorder);
    mobile=mobileNode.val();
    if(mobile==""){
        errorNode3.text(requireMessage)
        return false;
    }
    else if(mobilePattern.test(mobile)==false){
        errorNode3.text("Please enter valid mobile number")
        return false;
    }
    else{
        mobileNode.css("border",validBorder)
        return true;
    }
}

// Validate All Fields
function validateAll() {
    const state1 = validateFullName();
    const state2 = validateEmail();
    const state3 = validateMobile();
    return (state1 && state2 && state3) ; // Return true only if all validations pass
}
