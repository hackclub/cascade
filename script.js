var box = document.getElementById("inner_box");
var action1 = document.getElementById("action1");
var action2 = document.getElementById("action2");
var action3 = document.getElementById("action3");
var innercontent = "";

function setText(text) {
  switch (text) {
    case "welcome":
      innercontent = `
      <h1>Welcome to Cascade!</h1>
      <div class="row">
        <div class="col-8 d-flex align-items-center">
        <p>Cascade is a hackathon organized by Hack Club. It is aimed at bringing female and gender-non-conforming youth into the world of coding and technology. We are aiming to create a space where students can learn, grow, and build together. No coding experience necessary!</p>
        </div>
        <div class="col-4">
        <img src="pic1.jpeg" width="100%;">
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
        <li><h3>FAQ #1</h3></li>
        <p>FAQ #1 info</p>
        <li><h3>FAQ #2</h3></li>
        <p>FAQ #2 info</p>
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
