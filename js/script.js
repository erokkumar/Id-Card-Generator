const divElement = document.getElementById("your-div-id");
const select = (s) => document.querySelector(s);
function name() {
  let currname = select(".st-name").innerText;
  while (currname.includes("  ")) {
    currname = currname.replace("  ", " ");
  }
  let currArr = currname.split(" ");
  let currName = currArr.join(".");
  return `${currName}${new Date().getTime()}.png`;
}
function saveScreenshot(element) {
  html2canvas(element).then(function (canvas) {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = name();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
select("#button").onclick = () => {
  saveScreenshot(select("#id-card"));
};

select("#imageUpload").addEventListener("change", function () {
  const file = select("#imageUpload").files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    select(
      ".profile-image"
    ).style.backgroundImage = `url('${e.target.result}')`;
  };

  reader.readAsDataURL(file);
});
select(".profile-image").onclick = () => select("#imageUpload").click();