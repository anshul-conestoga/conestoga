const xhr1 = new XMLHttpRequest();
xhr1.responseType = "json";
const domain = "https://jsonplaceholder.typicode.com";
let url = `${domain}/photos/1`;
xhr1.onreadystatechange = () => {
  if (xhr1.readyState == 4 && xhr1.status == 200) {
    const photo = xhr1.response;
    const xhr2 = new XMLHttpRequest();
    xhr2.responseType = "json";
    url = `${domain}/albums/${photo.albumId}`;
    xhr2.onreadystatechange = () => {
      if (xhr2.readyState == 4 && xhr2.status == 200) {
        const album = xhr2.response;
        const xhr3 = new XMLHttpRequest();
        xhr3.responseType = "json";
        url = `${domain}/users/${album.userId}`;
        xhr3.onreadystatechange = () => {
          if (xhr3.readyState == 4 && xhr3.status == 200) {
            const user = xhr3.response;
            let html = `<img src="${photo.url}"
alt="${photo.title}">`;
            html += `<h4>In album ${album.title}</h4>`;
            html += `Posted by ${user.username}`;
            $("#photo").html(html);
          }
        };
        xhr3.open("GET", url);
        xhr3.send();
      }
    };
    xhr2.open("GET", url);
    xhr2.send();
  }
};
xhr1.open("GET", url);
xhr1.send();
