    var bio=
{
    "name":"Ede Mohan Krishna",
    "role":"Team Leader",
    "welcomeMessage":"Hai! I am Mohan. I believe in Hard Work.",
    "biopic":"images/me.jpg",
    "contacts":
            {
            "mobile":"9676300317",
            "email":"edemohankrishna1995@gmail.com",
            "github":"edemohan",
            "twitter":"edemohan",
            "location":"Hanuman Junction"
            },
    "skills":["Hard work","Java Script","Java","HTML","CSS","JQuery"]
};
bio.display=function(){

        var formattedName=HTMLheaderName.replace("%data%",bio.name);
    $(formattedName).insertBefore('#topContacts');

    var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
    $(formattedRole).insertBefore('#topContacts');



    var formattedHTMLmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
    $('#topContacts:last').append(formattedHTMLmobile);
    $('#footerContacts').append(formattedHTMLmobile);

    var formattedHTMLemail=HTMLemail.replace("%data%",bio.contacts.email);
    $('#topContacts:last').append(formattedHTMLemail);
    $('#footerContacts').append(formattedHTMLemail);

    var formattedHTMLtwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $('#topContacts:last').append(formattedHTMLtwitter);
    $('#footerContacts').append(formattedHTMLtwitter);

    var formattedHTMLgithub=HTMLgithub.replace("%data%",bio.contacts.github);
    $('#topContacts:last').append(formattedHTMLgithub);
    $('#footerContacts').append(formattedHTMLgithub);

    var formattedHTMLlocation=HTMLlocation.replace("%data%",bio.contacts.location);
    $('#topContacts:last').append(formattedHTMLlocation);
    $('#footerContacts').append(formattedHTMLlocation);

    var formattedHTMLbioPic=HTMLbioPic.replace("%data%",bio.biopic);
    $('#header').append(formattedHTMLbioPic);

    var formattedHTMLwelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    $('#header').append(formattedHTMLwelcomeMsg);

    if(bio.skills.length>0)
    {
        $("#header").append(HTMLskillsStart);
        var formattedSkills;
        for(var i=0;i<bio.skills.length;i++){
            formattedSkills=HTMLskills.replace("%data%",bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }

};
bio.display();

var work={
    "jobs":[
    {
        "employer":"Microsoft Coorporations",
        "title":"Software Engineer",
        "location":"Hyderabad",
         "dates" :"2019-2025",
         "description":"The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell.\
          They typically hunt alone and stalk prey. A tiger can consume up to 88 pounds of meat at one time. On average,\
          tigers give birth to two or three cubs every two years. If all the cubs in one litter die, \
          a second litter may be produced within five months."
    },
    {
        "employer":"Infosys",
        "title":"System Engineer",
        "location":"Mysore",
         "dates" :"2017-2019",
         "description":"The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell.\
          They typically hunt alone and stalk prey. A tiger can consume up to 88 pounds of meat at one time. On average,\
          tigers give birth to two or three cubs every two years. If all the cubs in one litter die, \
          a second litter may be produced within five months."
    }]
};

work.display=function displayWork()
{

        for(job in work.jobs)
        {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
            var formattedTitle=HTMLworkEmployer.replace("%data%",work.jobs[job].title);
            var formattedEmployerTitle=formattedEmployer+formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescriptions=HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedDescriptions);
        }
}
work.display();
var projects={
    "projects":
    [
        {
            "title":"Leave Management System",
            "dates":"2015-2016",
            "description":"The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell.\
              They typically hunt alone and stalk prey. A tiger can consume up to 88 pounds of meat at one time. On average,\
              tigers give birth to two or three cubs every two years. If all the cubs in one litter die, \
              a second litter may be produced within five months.",
            "images":
                    ["images/flower.jpg",
                    "images/flower.jpg"
                    ]
        },
        {
            "title":"Notification Manager using Android",
            "dates":"2016-2017",
            "description":"The largest of all the Asian big cats, tigers rely primarily on sight and sound rather than smell.\
              They typically hunt alone and stalk prey. A tiger can consume up to 88 pounds of meat at one time. On average,\
              tigers give birth to two or three cubs every two years. If all the cubs in one litter die, \
              a second litter may be produced within five months.",
            "images":
                    ["images/flower.jpg",
                    "images/flower.jpg"
                    ]
        }
    ]
};
projects.display=function(){

    for(var i=0;i<projects.projects.length;i++)
    {
        $("#projects").append(HTMLprojectStart);

        var formattedHTMLprojectTitle=HTMLprojectTitle.replace("%data%",projects.projects[i].title);
        $(".project-entry:last").append(formattedHTMLprojectTitle);

        var formattedHTMLprojectDates=HTMLprojectDates.replace("%data%",projects.projects[i].dates);
        $(".project-entry:last").append(formattedHTMLprojectDates);

        var formattedHTMLprojectDescription=HTMLprojectDescription.replace("%data%",projects.projects[i].description);
        $(".project-entry:last").append(formattedHTMLprojectDescription);

        for(var j=0;j<projects.projects[i].images.length;j++)
        {
            var formattedHTMLprojectImage=HTMLprojectImage.replace("%data%",projects.projects[i].images[j]);
        $(".project-entry:last").append(formattedHTMLprojectImage);
        }

    }

}
projects.display();
var education=
{
    "schools":
    [
        {
            "name":"Stjohns EM Model High School",
            "degree":"SSC",
            "dates":"2010-2011",
            "location":"Bantumilli",
            "url":"school website url",
            "majors":["PHY","CHY","Maths"]
        },

        {
            "name":"NRI Junior college",
            "degree":"Intermediate",
            "dates":"2011-2013",
            "location":"Vijayawada",
            "url":"NRI College website url",
            "majors":["PHY","CHY","Maths"]
        },

        {
            "name":"Anil Neerukonda Institute of Technology & Sciences",
            "degree":"SSC",
            "dates":"2013-2017",
            "location":"Visakhapatnam",
            "url":"Anits College website url",
            "majors":["CS","ME","Maths"]
        }

    ],
    "onlineCourses":
    [
        {
            "title":"java",
            "school":"Naresh Technology",
            "dates":"2015",
            "url":"Naresh Technology website url"
        },
        {
            "title":"JQuery",
            "school":"Durga Software Technologies",
            "dates":"2016",
            "url":"Durga Software Technologieswebsite url"
        },
        {
            "title":"Front End Developer",
            "school":"Udacity",
            "dates":"2017",
            "url":"Udacity url"
        }
    ]
};

education.display=function(){
    $('#education').append(HTMLschoolStart);
    for(var school=0;school<education.schools.length;school++){
        var formattedHTMLschoolName=HTMLschoolName.replace("%data%",education.schools[school].name);
        $('.education-entry:last').append(formattedHTMLschoolName);

        var formattedHTMLschoolDegree=HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $('.education-entry:last').append(formattedHTMLschoolDegree);

        var formattedHTMLschoolDates=HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $('.education-entry:last').append(formattedHTMLschoolDates);

        var formattedHTMLschoolLocation=HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $('.education-entry:last').append(formattedHTMLschoolLocation);

        $('.education-entry:last').append(" <br>"+education.schools[school].url);

        // var HTMLschoolMajor = '<em><br>Major: %data%</em>';

        education.schools[school].majors.forEach(function(item, index){
            formattedHTMLschoolMajor=HTMLschoolMajor.replace("%data%",item);
        $('.education-entry:last').append(formattedHTMLschoolMajor);
        });
    }
    $('.education-entry:last').append(HTMLonlineClasses);

    for(var classes=0;classes<education.onlineCourses.length;classes++){

        var formattedHTMLonlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[classes].title);
        $('.education-entry:last').append(formattedHTMLonlineTitle);

        var formattedHTMLonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[classes].school);
        $('.education-entry:last').append(formattedHTMLonlineSchool);

        var formattedHTMLonlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[classes].dates);
        $('.education-entry:last').append(formattedHTMLonlineDates);

        var formattedHTMLonlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[classes].url);
        $('.education-entry:last').append(formattedHTMLonlineURL);
    }


}

education.display();




// adding map
$("#mapDiv").append(internationalizeButton);
$("#mapDiv").append(googleMap);
