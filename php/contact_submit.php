<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Check if required fields are not empty
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all required fields.";
        exit;
    }

    // Set the recipient email address
    $recipient = "hhdzfmrb@gmail.com"; // Replace with your email address

    // Set the email subject
    $subject = "New Contact Form Submission from $name";

    // Build the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $email_headers = "From: $name <$email>";

    // Test email sending before processing the form
    if (!mail("hhdzfmrb@gmail.com", "Test Email", "This is a test email to check if the mail function works.")) {
        echo "Failed to send test email. Please check your server configuration.";
        exit;
    }

    // Send the email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        // Redirect to a thank you page or display a success message
        echo "<script>alert('Thank you! Your message has been sent.'); window.location = 'thank_you.html';</script>";
    } else {
        // Display an error message if email sending fails
        echo "<script>alert('Oops! Something went wrong and we couldn\'t send your message.'); window.history.back();</script>";
    }
} else {
    echo "Invalid request method.";
}
?>
