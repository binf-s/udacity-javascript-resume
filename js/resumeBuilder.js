/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*
 This is empty on purpose! Your code to build the resume will go here.

 */
 // objects accordingto schema
// bio containig demographics

 var bio = {
   name : "Shubham choudhary",
   role : "Web developer",
   contacts :  {
         mobile: "+91-9939105754",
         email: "shubhambit123@outlook.com" ,
         github: "Binf-s",
         location: "Ranchi",
       },
   welcomeMessage: "HI!! Looking for some info.<br>Explore it yourself.\tIt\'s right here.",
   skills: ["HTML5", "CSS3", "Basic JavaScript", "Inermediate level SQL", "Python" ],
   biopic: 'images/IMG_5377.jpg',
   display: function() {

   }
 };

//education object containing education details

 var education = {
   schools: [ {
        name: "D.A.V Public School Hehal",
        location: "Hehal, Ranchi ",
        degree: "Matriculation",
        majors: ["English", "Science", "Social Sciences", "Mathematics", "Sanskrit"],
        dates: "2010",
        url: "http://davhehal.org/"
      },
               {
              name: "D.A.V Public School Hehal",
              location: "Hehal, Ranchi ",
              degree: "Intermediate",
              majors: ["English", "Physics", "Chemestry", "Mathematics", "Biology"],
              dates: "2010-2012",
              url: "http://davhehal.org/"
            },
               {
                name: "BIT Mesra",
                location: "Mesra, Ranchi ",
                degree: "B.E",
                majors: ["Biotechnology", "Bioinformatics"],
                dates: "2013-17",
                url: "https://bitmesra.ac.in"
              }
            ],
   onlineCourses: [{
        title: "frontend-nanodegree",
        school: "Udacity onlineCourses",
        dates: "June 2017 till present",
        url: "https://in.udacity.com",
  },
   {
     title: "Learn Python for Beginners",
     school: "Udemy",
     dates: "Aug-2016",
     url: "https://www.udemy.com"
   }],
   display: function() {

   }
 };
 //work object containig work deatils

 var work = {
   jobs: [{
     employer: "Department of Biotechnology BIT Mesra",
     title: "Treasurer Biots",
     location: "BIT Mesra",
     dates: "july-2015-17",
     description: "Society of Biotechnologists, BIT Mesra",
   },
   {
   employer: "AMC info",
   title: "Software developer",
   location: "Banglore",
   dates: "May-2016-17",
   description: "Develop Software",
 }],
 display: function() {

 }
 };

//project details in project object

 var projects = {
   projects: [{
     title: "Resume",
     dates: "24-07-2017",
     description: "HTML5 and CSS3 was used for converting a mockup into webpage.",
     images: ["images/udacity-project.jpg"]
   }, {
     title: "Anti-vegf designing",
     dates: "05-01-2017 - 15-05-2017",
     description: "Use of different bioinformatics tools for designing new anti-vegf molecule.",
     images: ["images/bit_logo.jpg"]
   } ],
   display: function() {

   }
 };

//display function for bio object

 bio.display = function() {
   var formattedName = HTMLheaderName.replace("%data%", bio.name);
   var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
   $('#header').prepend(formattedName, formattedRole);

   var newcontacts = HTMLcontactGeneric.replace("%data%", "");
   var newmobile = HTMLmobile.replace("%data%", bio.contacts.mobile );
   var newemail = HTMLemail.replace("%data%", bio.contacts.email );
   var newlocation = HTMLlocation.replace("%data%", bio.contacts.location );
   var newgit = HTMLgithub.replace("%data%", bio.contacts.github );
   var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
   var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
   $('#topContacts, #footerContacts').append(newmobile, newgit, newlocation, newemail );
   $('#header').append(formattedBiopic, formattedwelcomeMsg);
 };

 //$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));

//calling display function
 bio.display();

//calling skills

 if (bio.skills.length > 0 ) {
   $('#header').append(HTMLskillsStart);

   var formattedskill = HTMLskills.replace("%data%", bio.skills[0]);
   $('#skills').append(formattedskill);
   formattedskill = HTMLskills.replace("%data%", bio.skills[1]);
   $('#skills').append(formattedskill);
   formattedskill = HTMLskills.replace("%data%", bio.skills[2]);
   $('#skills').append(formattedskill);
   formattedskill = HTMLskills.replace("%data%", bio.skills[3]);
   $('#skills').append(formattedskill);
   formattedskill = HTMLskills.replace("%data%", bio.skills[4]);
   $('#skills').append(formattedskill);

 };

//display for work

 work.display = function() {
   for(job in work.jobs) {
     $('#workExperience').append(HTMLworkStart);

     var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
     var newrole = formattedEmployer + formattedTitle ;

     $('.work-entry:last').append(newrole);
     var workDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
     $('.work-entry:last').append(workDate);
     var workLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
     $('.work-entry:last').append(workLocation);
     $('.work-entry:last').append(HTMLworkDescription.replace('%data%', work.jobs[job].description));

   }
 };

 //calling display function

 work.display();

//displaying education

 education.display = function() {
   $('#education').append(HTMLschoolStart);
   $('.education-entry:last').append(HTMLschoolName.replace("%data%", education["schools"][2]["name"]));
   $('.education-entry:last').append(HTMLschoolDegree.replace("%data%", education["schools"][2]["degree"]));
   $('.education-entry:last').append(HTMLschoolDates.replace("%data%", education["schools"][2]["dates"]));
   $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education["schools"][2]["location"]));
   $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education["schools"][2]["majors"]));
   $('.education-entry:last').append(HTMLschoolName.replace("%data%", education["schools"][1]["name"]));
   $('.education-entry:last').append(HTMLschoolDegree.replace("%data%", education["schools"][1]["degree"]));
   $('.education-entry:last').append(HTMLschoolDates.replace("%data%", education["schools"][1]["dates"]));
   $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education["schools"][1]["location"]));
   $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education["schools"][1]["majors"]));
   $('.education-entry:last').append(HTMLonlineClasses);
   $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education["onlineCourses"][0]["title"]));
   $('.education-entry:last').append(HTMLonlineSchool.replace("%data%", education["onlineCourses"][0]["school"]));
   $('.education-entry:last').append(HTMLonlineDates.replace("%data%", education["onlineCourses"][0]["dates"]));
   $('.education-entry:last').append(HTMLonlineURL.replace("%data%", education["onlineCourses"][0]["url"]));
 };

//calling display function

 education.display();

/* calling internationalize button

 $('#main').append(internationalizeButton);

 function inName(name) {
   var newName = name.split(" ");
   var firstletter = newName[0].substring(0, 1);
   return (firstletter.toUpperCase() + newName[0].slice(1).toLowerCase() + " " + newName[1].toUpperCase());
 };

 inName(bio.name);
*/

//displaying projects

 projects.display = function() {
   $('#projects').append(HTMLprojectStart);
   $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[0].title));
   $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[0].dates));
   $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[0].description));
   $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[0].images[0]));
   $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', projects.projects[1].title));
   $('.project-entry:last').append(HTMLprojectDates.replace('%data%', projects.projects[1].dates));
   $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', projects.projects[1].description));
   $('.project-entry:last').append(HTMLprojectImage.replace('%data%', projects.projects[1].images[0]));
 };

//calling display function

 projects.display();

//google map 
$("#mapDiv").append(googleMap);
 $('#mapDiv').append(googleMap);
