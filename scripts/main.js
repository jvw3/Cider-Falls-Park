//import functions needed from respective modules
import { guestsHtml } from "./guests.js";
import { createDestinationHtml } from "./destinations.js";



// Create framework for html creation that will be exported to index.html

const mainContainer = document.querySelector("#maincontainer")

const ciderHtml = `<div id="headerandbanner">
<header id="head">
<h1 id="headtext">Cider Falls Park</h1>
</header>
<div id="overlay">
        <Banner id="bannercard>
            <h1 id="bannertext">Adventure Awaits</h1>
        </Banner>
        </div>
        </div>
        <nav id="navbar">
            <h2 id="navheader">SERVICES</h2>
            <div id="navinfo">
            <ul>
                <li id="servicenav--1">Rafting</li>
                <li id="servicenav--2">Canoeing</li>
                <li id="servicenav--3">Fishing</li>
                <li id="servicenav--4">Hiking</li>
                <li id="servicenav--5">Picnicking</li>
                <li id="servicenav--6">Rockclimbing</li>
                <li id="servicenav--7">Lodging</li>
                <li id="servicenav--8">Parking</li>
                <li id="servicenav--9">Information</li>
                <li id="servicenav--10">Ziplines</li>
            </ul>
            </div>
        </nav>
    <div id="content">
    <section id="leftcolumn">
        ${createDestinationHtml()}
    </section>
    <section id="rightcolumn">
    <article id="parkguests">
        <h3>Park Guests</h3>
        ${guestsHtml()}
        </article>
    </section>
    </div>
    <footer>
        <p><strong>Phone Number:</strong> (1) 281-330-8004</p>
        <p><strong>Email Address:</strong>  CedarFalls@cpk.org</p>
        <p id="footerphone"><strong>Physical address:</strong>  7834 Maxwell Rd. <br>
            Nashville, TN 37201
        </p>
    </footer>`


mainContainer.innerHTML = ciderHtml