
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  let a = Math.floor(Math.random() * 10000) + 45000;
  console.log(a);
  if (message.msg == "Sending Data") {
    let ansKey = message.keys;
    console.log(ansKey);
    //time out for 2 secoond
    setTimeout(function () {
      document
        .querySelector(
          `#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.adaptive-question-box.bg-white.p-1.ng-star-inserted > div:nth-child(2) > mcq-question > div > div.question-answers.mb-0 > div:nth-child(${
            ansKey + 1
          }) > div > label > span`
        )
        .click();
      const pageWrapper = document.querySelector("#page-wrapper");

      const saveAndNextButton = pageWrapper.querySelector(
        "div.d-block.d-lg-none.fixed-bottom.ng-star-inserted a.btn-primary"
      );

      if (saveAndNextButton) {
        saveAndNextButton.click();
      }
    }, a);

    setTimeout(() => {
      const nextbtn = document.querySelector(
        "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted>div.no-gutters> div:nth-child(2)> a.btn.btn-primary"
      );
      if (!nextbtn) {
        document
          .querySelector(
            "#page-wrapper > p-student > app-learning-test > div.adaptive-question > div > div > div.d-block.d-lg-none.fixed-bottom.ng-star-inserted>div.no-gutters> div:nth-child(1)> a.btn.btn-primary"
          )
          .click();
      } else {
        nextbtn.click();
      }
    }, a + 1200);
  }

  if (message.msg == "start") {
    chrome.runtime.sendMessage({ msg: "startPanel" });
  }
});

