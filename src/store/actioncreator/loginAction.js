import axios from "../../utils/yfmaxios";

const getName = (e) => ({
  type: "username",
  value: e.target.value,
});

const getMM = (e) => ({
  type: "password",
  value: e.target.value,
});

const login = (name, mm) => {
  return function (dispatch) {
    let username = name;
    let password = mm;
    if (!username || !password) {
      alert("账号或密码不能为空");
      return;
    }
    let url = "/loginCheck?username=" + username + "&&password=" + password;
    axios
      .get(url)
      .then((res) => {
        if (res.ret == "0") {
          localStorage.setItem("userinfo", JSON.stringify(res.wdata));
          // window.location.href="index.html"; //跳转首页
          window.history.go(-1)
          // this.props.history.push("/"); //此方法这里用不了
        } else {
          alert("账号或密码有误")
        }
      })
      .catch(err =>  {});
  };
};

export { getName, getMM, login };
