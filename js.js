window.onload = () => {
  // Set theme (myWay by default)
  document.cookie = "theme=myWay";

  // Variables
  const singleImg = document.getElementById('singleImg');
  const spoti = document.getElementById('spoti');
  const yt = document.getElementById('yt');
  const apple = document.getElementById('apple');
  const yt_video = document.getElementById('yt_video');

  // Freedom Links
  const fSingleImg = 'images/freedom.png';
  const fSpotiLink = 'https://open.spotify.com/album/5m3M7lp4Uce8IUt3C2rqay?si=qOREKFKgQeaQW3uEn0pu2A';
  const fYtLink = 'https://music.youtube.com/watch?v=r4CrGzfmWck&feature=share';
  const fAppleLink = 'https://music.apple.com/es/album/freedom/1626924381?i=1626924383';
  const fYt_videoLink = 'https://youtu.be/Xx1YGOpxi1w';

  // My Way Links
  const mwSingleImg = 'images/myway.jpg';
  const mwSpotiLink = 'https://open.spotify.com/track/10H0r62ModsyRXlOXc4lyW?si=15ffc4e36dc14181';
  const mwYtLink = 'https://music.youtube.com/playlist?list=OLAK5uy_k9T_XbudI4LKxuqwkb-eN2D-axDcIgnrI&feature=share';
  const mwAppleLink = 'https://music.apple.com/es/album/my-way-single/1634181283';
  const mwYt_videoLink = 'https://youtu.be/1KW6La6Mob0';

  // Get cookies
  const getCookie = (cname) => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  // Change button
  const change = () => {
    if (getCookie('theme') == 'myWay') {
      changeImg(fSingleImg);
      spoti.onclick = () => {
        window.open(fSpotiLink);
      }
      yt.onclick = () => {
        window.open(fYtLink);
      }
      apple.onclick = () => {
        window.open(fAppleLink);
      }
      yt_video.onclick = () => {
        window.open(fYt_videoLink);
      }
      document.cookie = 'theme=freedom';
    } else {
      changeImg(mwSingleImg);
      spoti.onclick = () => {
        window.open(mwSpotiLink);
      }
      yt.onclick = () => {
        window.open(mwYtLink);
      }
      apple.onclick = () => {
        window.open(mwAppleLink);
      }
      yt_video.onclick = () => {
        window.open(mwYt_videoLink);
      }
      document.cookie = 'theme=myWay';
    }
  }

  const changeImg = (img) => {
    singleImg.style.opacity = 0;
    setTimeout(() => {
      singleImg.src = img;
      setTimeout(() => {
        singleImg.style.opacity = 1;
      }, 100);
    }, 500);
    
  }

  const buttons = document.getElementsByClassName('arrowCircle');
  buttons[0].onclick = change;
  buttons[1].onclick = change;
}

window.addEventListener('DOMContentLoaded', (event) => {
    const hidedElements = document.getElementsByClassName('hide');
    for (let i = 0; i < hidedElements.length; i++) {
      hidedElements[i].classList.add('appear');
    }
});