const menuItem = document.getElementsByClassName("menu-items");
const menuItem_Array = Array.from(menuItem);
const notification_popup = document.getElementById("popups");
const notification_count = document.getElementById("notification-count");
const messages_notifications = document.getElementById(
  "messages-notifications"
);

const NAV = document.getElementById("nav");

const theme_colour = document.querySelector(".theme_colour");

const R = document.querySelector("#RED");
const B = document.querySelector("#BLACK");
const G = document.querySelector("#GREY");
const Y = document.querySelector("#YELLOW");

R.addEventListener("click", () => {
  NAV.style.backgroundColor = "RED";
});
B.addEventListener("click", () => {
  NAV.style.backgroundColor = "BLACK";
});
G.addEventListener("click", () => {
  NAV.style.backgroundColor = "GREY";
});
Y.addEventListener("click", () => {
  NAV.style.backgroundColor = "YELLOW";
});

const Message_Search = document.getElementById("Message-search");
const Messages_List = document.querySelectorAll(".inner-message");

function MsgFilter() {
  const Serach_value = Message_Search.value.toLowerCase();

  Messages_List.forEach((msg) => {
    let name = msg.querySelector("h4").textContent.toLowerCase();
    if (name.indexOf(Serach_value) != -1) {
      msg.style.display = "flex";
    } else {
      msg.style.display = "none";
    }
  });
}

Message_Search.addEventListener("keyup", MsgFilter);

const message_box = document.getElementById("message_box");
const removeActive = () => {
  menuItem_Array.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem_Array.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");

    if (item.id.trim() == "notifications") {
      notification_popup.style.display = "block";
      notification_count.style.display = "none";
    } else if (item.id.trim() == "messages-notifications") {
      console.log("HII");
      message_box.style.boxShadow = "0 0 1rem purple";
      setTimeout(() => {
        message_box.style.boxShadow = "none";
      }, 5000);
    } else if (item.id.trim() == "THEME") {
      theme_colour.style.display = "flex";
    } else {
      theme_colour.style.display = "none";
      notification_popup.style.display = "none";
    }
  });
});
