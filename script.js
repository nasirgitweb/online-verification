document.getElementById("verification-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the entered code
    const verificationCode = document.getElementById("verification-code").value;
    const messageElement = document.getElementById("message");

    // Define the correct verification code (For demonstration, it's hardcoded)
    const correctCode = "N1RJ9N";

    if (verificationCode === correctCode) {
        messageElement.textContent = "আপনার প্রোডাক্টটি অরিজিনাল!";
        messageElement.classList.remove("error");
        messageElement.classList.add("success");
    } else {
        messageElement.textContent = "দুঃখিত, আপনার প্রদর্শিত কোডটি খুঁজে পাওয়া যাচ্ছে না, অনুগ্রহ করে কোডটি পুনরায় চ্যাক করুন এবং প্রবেশ করান।";
        messageElement.classList.remove("success");
        messageElement.classList.add("error");
    }

    // Clear the input field
    document.getElementById("verification-code").value = "";
});
