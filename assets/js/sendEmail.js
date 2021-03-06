// emailJS Tutorial https://courses.codeinstitute.net/courses/course-v1:CodeInstitute+IFD101+2017_T3/courseware/03d3f6524ad249d9b33e3336d156dfd0/e4710f80cdf34bffbd607bc102482d5c/?activate_block_id=block-v1%3ACodeInstitute%2BIFD101%2B2017_T3%2Btype%40sequential%2Bblock%40e4710f80cdf34bffbd607bc102482d5c

function sendMail(contactForm) {
    emailjs.init("user_FL4OCm2YhI19WuFv6rNpA");
    emailjs.send("gmail", "joshua", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_idea": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
                //Customised line 14 javascript code to clear the form after it has successfully sent
                document.getElementById("form").reset();
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}