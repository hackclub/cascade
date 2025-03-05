var box = document.getElementById("inner_box");
var action1 = document.getElementById("action1");
var action2 = document.getElementById("action2");
var action3 = document.getElementById("action3");
var innercontent = "";

function setText(text) {
  switch (text) {
    case "welcome":
      innercontent = `
        <h1><span class="bold">Cascade Hackathon | Sat. April 12th | 9 AM - 4 PM</span></h1>
        <div style="display: flex; justify-content: center; align-items: center;">
            <a href="https://airtable.com/appNP3OyOWyiERjCT/shrM78uhbCQXufpTo" class="register-btn" target="_blank">
                REGISTER HERE TO SAVE YOUR SPOT
            </a>
        </div>

        <p>
            Get ready for <span class="bold">Cascade</span>, a <span class="bold">FREE</span> hackathon organized by girls at Hack Club! 
            This event is all about bringing middle/high school girls and gender-non-conforming youth into the world of coding and technology. 
            Filled with workshops, fun games, and plenty of opportunities to make new friends, it’s a day full of learning, growth, and creativity. </p>
        </div>
        <div style="text-align: center;">
    <img src="pic1.jpeg" style="width: 400px; height: auto; display: inline-block;">
</div>

      </div>
      `;
      break;
    case "faqs":
      innercontent = `
      <h1>FAQs!</h1>
      <div class="row">
        <div class="d-flex align-items-center">
        <ul>
        <li><h3>Who can attend?</h3></li>
        <p>This event is for all teenagers aged 13-17 who are interested in coding!</p>
        <li><h3>What if I have never coded before?</h3></li>
        <p>No experience, no problem! This event is beginner-friendly and we'll have workshops and mentors to help you :)</p>
        <li><h3>How much does it cost to attend?</h3></li>
        <p>Nothing; the event is completely free.</p>
        <li><h3>What should I bring?</h3></li>
        <p>Just your laptop and yourself! If you don’t have access to a laptop, please indicate that on the registration form as early as possible. </p>
        <li><h3>Where is the event located?</h3></li>
        <p>TBD - we'll be working on finalizing the perfect venue but we’ll be sure to let attendees know as soon as possible. </p>
        <li><h3>I have more questions</h3></li>
        <p>Feel free to reach out. You can send Zenab an email at zenab@hackclub.com</p>
        </ul>
        </div>
      </div>
      `;
      break;
    case "tracks":
      innercontent = `
      <h1>Hackathon Tracks!</h1>
      <div class="row">
        <div class="col-8 d-flex align-items-center justify-content-center flex-column">
        <h3>Web Development</h3>
        <p>Track #1 Description</p>
        </div>
        <div class="col-4">
        <img src="web.jpg" width="100%;">
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-8 d-flex align-items-center justify-content-center flex-column">
        <h3>Audio Technology</h3>
        <p>Track #2 Description</p>
        </div>
        <div class="col-4">
        <img src="audio.jpeg" width="100%;">
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-8 d-flex align-items-center justify-content-center flex-column">
        <h3>CAD and Electronics</h3>
        <p>Track #3 Description</p>
        </div>
        <div class="col-4">
        <img src="cad.jpg" width="100%;">
        </div>
      </div>
      `;
      break;
  }
  box.innerHTML = innercontent;
}

setText("welcome")
