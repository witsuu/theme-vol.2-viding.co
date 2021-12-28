document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.querySelector(".main-app").style.display = "none";
    document.querySelector(".load-wrapper").style.display = "block";
  } else {
    document.querySelector(".main-app").style.display = "block";
    document.querySelector(".load-wrapper").style.display = "none";
  }
};
