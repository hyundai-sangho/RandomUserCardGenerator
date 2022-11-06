// element 모음
let details = document.querySelector(".details");
let imgContainer = document.querySelector(".img-container");
let getUserBtn = document.getElementById("get-user-btn");
let randomUserUrl = "https://random-data-api.com/api/v2/users?response_type=json";

/** 랜덤 유저 데이터 가져오는 함수
 * 1. 사진
 * 2. 이름
 * 3. 직업
 * 4. 주소
 */
let getUser = async () => {
  await fetch(randomUserUrl)
    .then((res) => res.json())
    .then((data) => {
      imgContainer.innerHTML = `
      <img src=${data.avatar}>
      `;

      details.innerHTML = `
      <h2>${data.first_name} ${data.last_name}</h2>
      <h3>${data.employment.title}</h3>
      <h4><i class="fa-solid fa-location-dot"></i> ${data.address.city}</h4>
      `;

      /**
       * Math.random()의 결과값에 소수점을 떼버리고 16진수로 바뀐 후에
       * 6자리로 자릿수를 맞추되 부족한 글자수는 0으로 채움
      */
      let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      document.documentElement.style.setProperty("--theme-color", randomColor)
    });
};

// 윈도우 로드시 getUser 함수 호출
window.addEventListener("load", getUser);

// Get Random User 버튼 클릭시 getUser 함수 호출
getUserBtn.addEventListener("click", getUser);
