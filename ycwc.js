const fullText = "Understanding the Intelligence We Created";
const base = "Understanding the Intelligence We ";
const variants = ["Created", "Brought to Life"];
let index = 0;
let firstTime = true;

const typingEl = document.getElementById("typing");

// TYPE FULL SENTENCE (first time only)
function typeFullSentence(callback) {
  let i = 0;

  function type() {
    if (i <= fullText.length) {
      typingEl.textContent = fullText.substring(0, i);
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(callback, 3000); // wait 3 seconds
    }
  }
  type();
}

// DELETE ONLY LAST WORD
function deleteWord(word, callback) {
  let i = word.length;

  function erase() {
    if (i >= 0) {
      typingEl.textContent = base + word.substring(0, i);
      i--;
      setTimeout(erase, 60);
    } else {
      callback();
    }
  }
  erase();
}

// TYPE ONLY THE LAST WORD
function typeWord(word, callback) {
  let i = 0;

  function type() {
    if (i <= word.length) {
      typingEl.textContent = base + word.substring(0, i);
      i++;
      setTimeout(type, 60);
    } else {
      setTimeout(callback, 3000); // wait again
    }
  }
  type();
}

// LOOP AFTER FIRST TIME
function loop() {
  const current = variants[index];
  const next = variants[(index + 1) % variants.length];

  deleteWord(current, () => {
    typeWord(next, () => {
      index = (index + 1) % variants.length;
      loop();
    });
  });
}

window.onload = () => {
  typeFullSentence(() => {
    firstTime = false;
    loop();
  });
};

function toggleInner() {
  document.getElementById('inner-text').classList.toggle('hidden');
}

function toggleInner2() {
  document.getElementById('inner2').classList.toggle('hidden2');
}

function toggleDesc(id) {
  const desc = document.getElementById("desc" + id);
  desc.style.display = desc.style.display === "block" ? "none" : "block";
}
const acc = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

  const openGameBtn = document.getElementById("openGamePopup");
  openGameBtn.addEventListener("click", () => {
    window.open("https://hazelnt.github.io/TheAwekening/", "AI Game", "width=1000,height=700,resizable=yes,scrollbars=yes");
  });
