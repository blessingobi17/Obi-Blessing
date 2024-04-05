const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  iconToggle();
});

const iconClose = document.querySelector(".iconClose");
iconClose.addEventListener("click", () => {
  iconToggle();
});

function iconToggle() {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
  } else {
    navList.style.display = "block";
  }
}

const navBtn1 = document.querySelector(".navBtn1");
navBtn1.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
  }
});

const navBtn2 = document.querySelector(".navBtn2");
navBtn2.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
  }
});

const navBtn3 = document.querySelector(".navBtn3");
navBtn3.addEventListener("click", () => {
  const navList = document.querySelector(".nav-list");

  if (navList.style.display == "block") {
    navList.style.display = "none";
  }
});

window.addEventListener("scroll", () => {
  const projectAnimation = document.querySelector(".projectSlideUp");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 400) {
      document.querySelector(".projectSlideUp").classList.add("slideUp");
      projectAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 600) {
      document.querySelector(".projectSlideUp").classList.add("slideUp");
      projectAnimation.style.opacity = 1;
    }
  }
});

window.addEventListener("scroll", () => {
  const contactAnimation = document.querySelector(".contactSection");
  if (window.innerWidth > 767) {
    if (document.documentElement.scrollTop > 1600) {
      document.querySelector(".contactSection").classList.add("contactSlideUp");
      contactAnimation.style.opacity = 1;
    }
  } else if (window.innerWidth <= 767) {
    if (document.documentElement.scrollTop > 2250) {
      document.querySelector(".contactSection").classList.add("contactSlideUp");
      contactAnimation.style.opacity = 1;
    }
  }
});

function validate() {
  const invalidMail = "Invalid email address";
  const name = document.form.name.value;
  const email = document.form.email.value;
  const at = email.indexOf("@");
  const dot = email.lastIndexOf(".");
  const message = document.form.message.value;

  if (name == "") {
    document.querySelector(".nameError").innerHTML = "Name field is required";
    return false;
  } else {
    document.querySelector(".nameError").style.display = "none";
  }

  if (email == "") {
    document.querySelector(".emailError").innerHTML = "Email field is required";
    return false;
  }

  if (at < 1 || dot - at < 2) {
    document.querySelector(".emailError").innerHTML = invalidMail;
    return false;
  } else {
    document.querySelector(".emailError").style.display = "none";
  }

  if (message == "") {
    document.querySelector(".messageError").innerHTML =
      "Message field is required";
    return false;
  } else {
    document.querySelector(".messageError").style.display = "none";
  }
}
