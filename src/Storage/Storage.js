module.exports = {
  set(id, data, stringify) {
    if (stringify) {
      data = JSON.stringify(data);
    }

    localStorage.setItem(id, data);
  },

  get(id, destringify) {
    if (localStorage.getItem(id) !== "undefined") {
      let data = localStorage.getItem(id);

      if (destringify) {
        data = JSON.parse(data);
      }

      return data;
    }

    return false;
  },

  deleteStorage(id) {
    localStorage.removeItem(id);
  },

  setCookie(cookie_name, cookie_value, exdays = 360) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie =
      cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
  },

  getCookie(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  deleteCookie: ( cookie_name ) => {    
    return this.setCookie(cookie_name, '',1);
  }
};
