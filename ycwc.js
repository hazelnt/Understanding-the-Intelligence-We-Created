function toggleInner() {
  document.getElementById('inner-text').classList.toggle('hidden');
}

function toggleInner2() {
  document.getElementById('inner2').classList.toggle('hidden2');
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
    // Ganti URL dengan URL game Anda
    window.open("https://hazelnt.github.io/TheAwekening/", "AI Game", "width=1000,height=700,resizable=yes,scrollbars=yes");
  });
