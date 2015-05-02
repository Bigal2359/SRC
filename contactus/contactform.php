<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/simple-php-contact-form.html
*/
require_once("./include/fgcontactform.php");
require_once("./include/simple-captcha.php");

$formproc = new FGContactForm();
$sim_captcha = new FGSimpleCaptcha('scaptcha');

$formproc->EnableCaptcha($sim_captcha);

//1. Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('alexridore@gmail.com'); //<<---Put your email address here


//2. For better security. Get a random tring from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("thank-you.php");
   }
}

?>
<!DOCTYPE html>
<html>
<head>
      <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
      <title>Contact us</title>
      <link rel="STYLESHEET" type="text/css" href="contact.css" />
      <link rel="stylesheet" href="../css/stylesheet.css" type="text/css" charset="utf-8">
      <script type='text/javascript' src='scripts/gen_validatorv31.js'></script>
</head>
<body>
<!-- Form Code Start -->
<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
<fieldset >
<input type='hidden' name='submitted' id='submitted' value='1'/>
<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

<div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>
<label for='firstname' >Name</label>
<div class="name-container">
    <div class='container'>
        <input type='text' name='firstname' id='firstname' placeholder="First Name" value='<?php echo $formproc->SafeDisplay('firstname') ?>' maxlength="50" /><br/>
        <span id='contactus_firstname_errorloc' class='error'></span>
    </div>
    <div class='container'>
        <input type='text' name='lastname' id='lastname' placeholder="Last Name" value='<?php echo $formproc->SafeDisplay('lastname') ?>' maxlength="50" /><br/>
        <span id='contactus_lastname_errorloc' class='error'></span>
    </div>
</div>
<div class='container'>
    <label for='email' >Email</label><br/>
    <input type='text' name='email' id='email' placeholder="Email" value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50" /><br/>
    <span id='contactus_email_errorloc' class='error'></span>
</div>
<div class='container'>
    <label for='message' >Comments</label><br/>
    <span id='contactus_message_errorloc' class='error'></span>
    <textarea rows="2" cols="50" name='message' id='message' onfocus="this.value=''; this.onfocus=null"><?php echo $formproc->SafeDisplay('message') ?></textarea>
</div>
<fieldset id='antispam'>
<legend >Anti-spam question</legend>
<span class='short_explanation'>(Please answer the simple question below. This to prevent spam bots from submitting this form)</span>
<div class='container'>
    <label for='scaptcha' ><?php echo $sim_captcha->GetSimpleCaptcha(); ?></label>
    <input type='text' name='scaptcha' id='scaptcha' maxlength="10" /><br/>
    <span id='contactus_scaptcha_errorloc' class='error'></span>
</div>
</fieldset>

<div class='container'>
    <input type='submit' name='Submit' value='Send RSVP' />
</div>

</fieldset>
</form>
<!-- client-side Form Validations:
Uses the excellent form validation script from JavaScript-coder.com-->

<script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("firstname","req","Please provide your first name");

    frmvalidator.addValidation("lastname","req","Please provide your last name");

    frmvalidator.addValidation("email","req","Please provide your email address");

    frmvalidator.addValidation("email","email","Please provide a valid email address");

    frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");


    frmvalidator.addValidation("scaptcha","req","Please answer the anti-spam question");

// ]]>
</script>


</body>
</html>