new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Nodi Swamy Navirodu Heege Title Song",
          artist: "Shankarnag",
          cover: "https://images.filmibeat.com/img/popcorn/movie_posters/nodi-swamy-navirodu-heege-20170614143006-16163.jpg",
          source: "mp3/Nodi_Swamy_Navirodu_Heege.mp3",
          url: "https://youtu.be/GUYUYdZbrfI?si=mAe0QuPp-dmUF-O4",
          favorite: false
        },
        {
          name:"Chaaku Chainu",
          artist:"Hamsalekha",
          cover:"https://th.bing.com/th/id/OIP.DbVB_AUIBaddj4T776TpNgAAAA?rs=1&pid=ImgDetMain",
          source:"mp3/Chaaku_Chainu.mp3",
          url:"https://youtu.be/P2Xkz5StuB4?si=lmb5JbIRTEXvCBMm",
          favorite: false
        },
        {
          name:"Chorarigondu Kaala",
          artist:"Hamsalekha",
          cover:"https://th.bing.com/th/id/OIP.Z54INdxVCizBmhWqv_-bgQHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          source:"mp3/Chorarigondu_Kaala.mp3",
          url:"https://youtu.be/fwOhRKsc6M8?si=8Fu-_Mfx426wP3o6",
          favorite: false
        },
        {
          name:"Geethanjali",
          artist:"SPB",
          cover:"https://i.ytimg.com/vi/CMWqH7MBoOs/maxresdefault.jpg",
          source:"mp3/Geethanjali.mp3",
          url:"https://youtu.be/56ul0WJ15TY?si=mKrJoTSY7wJLv8ey",
          favorite: false
        },
        {
          name:"Gamyave",
          artist:"Armaan Malik",
          cover:"https://th.bing.com/th/id/OIP.eeANPpudcaaRc5wjzmDYiQHaE8?rs=1&pid=ImgDetMain",
          source:"mp3/99_Gamyave.mp3",
          url:"https://youtu.be/vbHIDcbmxgY?si=5U3ifI7aySFbU-cO",
          favorite: false
        },
        {
          name:"Karagida Baaninalli",
          artist:"Bharath",
          cover:"https://i.ytimg.com/vi/WOuUEZVFqG8/maxresdefault.jpg",
          source:"mp3/Karagida_Baaninalli.mp3",
          url:"https://youtu.be/N05IKuyGp1I?si=4ozX2lXU0XDnVjFz",
          favorite: false
        },
        {
          name:"Yaaru Yaaru",
          artist:"Shankar Mahadevan",
          cover:"https://i.ytimg.com/vi/PrYwhRi_PEI/maxresdefault.jpg",
          source:"mp3/Yaaru_Yaaru.mp3",
          url:"https://youtu.be/J-6H_iDdGng?si=HgGawYqUpy8Fy_4a",
          favorite: false
        },
        {
          name:"Aagadu endu kailaagadu endu",
          artist:"DR Rajkumar",
          cover:"https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-2655/list/002655list.jpg",
          source:"mp3/aagadu_endu.mp3",
          url:"https://youtu.be/x3Xv-0hkZ3k?si=nQmaUnm39aDKjMg1",
          favorite: false
        },
        {
          name:"ಕಲ್ಲಾದರೆ ನಾನು - Kalladare Naanu",
          artist:"SPB",
          cover:"https://m.media-amazon.com/images/I/91QS6Ia6xPL._SL1500_.jpg",
          source:"mp3/Kalladare_Naanu.mp3",
          url:"https://youtu.be/TSSnAyCd9lg?si=2QoNDyyxZhZcvYwB",
          favorite: false
        },
        {
          name:"Simhadriya Simha",
          artist:"SPB",
          cover:"https://i.ytimg.com/vi/5PE66RTBfh8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFQgTChlMA8=&rs=AOn4CLBwhOj_94pOTyW6U1G2r33eiKYOYA",
          source:"mp3/Simhadriya_Simha.mp3",
          url:"https://youtu.be/XKzWnCn4dWs?si=UQIvusPJI3chmtqu",
          favorite: false
        },
        {
          name:"Sahasa Simha",
          artist:"SPB",
          cover:"https://a10.gaanacdn.com/images/albums/32/1994332/crop_480x480_1994332.jpg",
          source:"mp3/Sahasa_Simha.mp3",
          url:"https://youtu.be/F2gLjb8OKls?si=DtZsW3YgCnrZ1JTx",
          favorite: false
        },
        {
          name: "Ugramm",
          artist:"Ravi Basrur",
          cover:"https://image.tmdb.org/t/p/original/aCngvkUoPtl8uEEoBAa9EQbopx6.jpg",
          source:"mp3/Ugramm.mp3",
          url:"https://youtu.be/hpWksXyK7OQ?si=n9NfWmjgh1-_JzH2",
          favorite: false
        },
        {
          name: "Rise of Mahaan",
          artist:"Vivek",
          cover:"https://image.pmgstatic.com/cache/resized/w936/files/images/film/posters/166/766/166766396_d19535.jpg",
          source:"mp3/Rise_Of_Mahaan_Mahaan.mp3",
          url:"https://youtu.be/7QeM_rM-z6o?si=NWWANTxfyFQrzsbB",
          favorite: false
        },
        {
          name: "Oh Anahita",
          artist:"Chandrajith, Gagan Baderiya",
          cover:"https://i.ytimg.com/vi/CxX1mzjTOsY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLARrXRrEnQeREZkPC-GRudcco_67Q&days_since_epoch=19999",
          source:"mp3/Oh_Anahita.mp3",
          url:"https://youtu.be/CxX1mzjTOsY?si=35levgkjX4HM__my",
          favorite: false
        },
        {
          name: "Cotton Candy",
          artist:"Chandan Shetty",
          cover:"https://m.media-amazon.com/images/I/517AgcWv+4L._UXNaN_FMjpg_QL85_.jpg",
          source:"mp3/Cotton_Candy.mp3",
          url:"https://youtu.be/vmu53OX935A?si=8wcZU2Epg1NkEtdq",
          favorite: false
        },
        {
          name: "FEAR - MEGAMIX",
          artist:"CipherX Music",
          cover:"https://img.youtube.com/vi/kNfZt5JWYWU/maxresdefault.jpg",
          source:"mp3/FEAR.mp3",
          url:"https://youtu.be/kNfZt5JWYWU?si=BfIHVddVbdxpI25y",
          favorite: false
        },
        {
          name: "Parichayavade❤️",
          artist:"Ritesh G Rao",
          cover:"https://image.tmdb.org/t/p/original/aIv7V3qF6JDyOJdSZelDmIQ7sJC.jpg",
          source:"mp3/Parichayavade.mp3",
          url:"https://youtu.be/swwRqFQ9YCQ?si=SvDCyQCIdWwzUK6W",
          favorite: false
        },
        {
          name: "Lion's Roar - MAX",
          artist:"Vijay Prakash",
          cover:"https://i.ytimg.com/vi/cJxhtXnBEDk/maxresdefault.jpg",
          source:"mp3/Lion's_Roar.mp3",
          url:"https://youtu.be/1Dd2nQcvi74?si=a_WvR0PF7ntZ19YQ",
          favorite: false
        },
        {
          name: "Ranam Title Track - You Made Me Feel",
          artist:"Ajaey Shravan, Jakes Bejoy, Neha S Nair",
          cover:"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/214079/Ranam.jpg",
          source:"mp3/Ranam_Title_Track.mp3",
          url:"https://youtu.be/UImrau29cu8?si=e-u6HBDVaRIisdRe",
          favorite: false
        },
        {
          name: "Illuminati | Avesham",
          artist:"Dabzee",
          cover:"https://image.tmdb.org/t/p/original/vr3PlrVqtxSykKn6GIPoj8GEEau.jpg",
          source:"mp3/Aavesham.mp3",
          url:"https://youtu.be/tOM-nWPcR4U?si=2aF3nBn5PQF8Zdqq",
          favorite: false
        },
        {
          name: "Kavithe Kavithe",
          artist:"Sanjith Hegde",
          cover:"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/235604/yuva-SGB-250x376-POSTER-1.jpg",
          source:"mp3/Kavithe_Kavithe.mp3",
          url:"https://youtu.be/vzIFlt4fUbM?si=n0tPsux63qdWZWo_",
          favorite: false
        },
        {
          name: "Neenirade",
          artist:"Sonu Nigam",
          cover:"https://th.bing.com/th/id/OIP.row0yxNm5RuFXr1IRStD1QHaHa?rs=1&pid=ImgDetMain",
          source:"mp3/Neenirade.mp3",
          url:"https://youtu.be/g5O5ufz8w34?si=eU63qViaVpu_caqS",
          favorite: false
        },
        {
          name: "Maathu Sothu",
          artist:"Armaan Malik",
          cover:"https://f4.bcbits.com/img/a2721135731_10.jpg",
          source:"mp3/Maathu_Sothu.mp3",
          url:"https://youtu.be/EiGkZWTGKJ4?si=3apXCf-WO43dKIeV",
          favorite: false
        },
        {
          name: "Mana Mana",
          artist:"Ananya Bhat",
          cover:"https://th.bing.com/th/id/OIP.gaLpq1df3GUD96mFRBI_NAHaHa?rs=1&pid=ImgDetMain",
          source:"mp3/Mana_Mana.mp3",
          url:"https://youtu.be/8EFGMzi1KyI?si=cvHygMVeG-WluxvM",
          favorite: false
        },
        {
          name: "Sobaane",
          artist:" Vasuki Vaibhav, Madhuri Seshadri",
          cover:"https://i.ytimg.com/vi/D2Tirb0xdUM/maxresdefault.jpg",
          source:"mp3/Sobaane.mp3",
          url:"https://youtu.be/D2Tirb0xdUM?si=T-7D6CbUETzVIPHC",
          favorite: false
        },
        {
          name: "Madhava Mamava",
          artist:"Madhuri Seshadri",
          cover:"https://www.prokerala.com/images/800/jio-studios-announce-their-debut-kannada-movie-kotee.jpg",
          source:"mp3/Madhava_Mamava.mp3",
          url:"https://youtu.be/BjEfJkMHa8I?si=TmHNR0JMNEirM6yW",
          favorite: false
        },
        {
          name: "Janatha City",
          artist:"Sanjith Hegde",
          cover:"https://static.toiimg.com/photo/111623619.cms",
          source:"mp3/Janatha_City.mp3",
          url:"https://youtu.be/RgKDpqcdhtw?si=XifYOBuu80X3B2ci",
          favorite: false
        },
        {
          name: "Maximum Mass",
          artist:"chethan Gandharva & rap by MC Bijju",
          cover:"https://c.saavncdn.com/771/Maximum-Mass-From-Max-Kannada-Kannada-2024-20240901173952-500x500.jpg",
          source:"mp3/Maximum_Mass.mp3",
          url:"https://youtu.be/fgbZGDjzXUc?si=mTxfktqDCb2TSqDH",
          favorite: false
        },
        {
          name:"Malnad Adike",
          artist:"Bhanupriya - Deva",
          cover:"https://i.ytimg.com/vi/5PE66RTBfh8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFQgTChlMA8=&rs=AOn4CLBwhOj_94pOTyW6U1G2r33eiKYOYA",
          source:"mp3/Malnad_Adike.mp3",
          url:"https://youtu.be/n-gh7I2X7bw?si=j9-ykwciX6SfkO2n",
          favorite: false
        },
        {
          name: "Good Morning",
          artist: "ALL OK",
          cover: "https://i.ytimg.com/vi/OmsUhcFeylw/hqdefault.jpg",
          source: "mp3/Good Morning.mp3",
          url: "https://youtu.be/LbIkrZSIG9A?si=nmiApgqrm6T2Yjma",
          favorite: false
        },
        {
          name: "MAYAVI | ಮಾಯಾವಿ ",
          artist: "Sanjithhegde | Sonunigam",
          cover: "https://m.media-amazon.com/images/I/51toC6+gEnL.jpg",
          source: "mp3/MAYAVI.mp3",
          url: "https://youtu.be/mC3P0HOeTqc?si=q8vE8T0G-trdiYDM",
          favorite: false
        },
        {
          name: "Taare Nihaare",
          artist: "Gagan Baderiya",
          cover: "https://www.themoviedb.org/t/p/original/nZI1nXwJNrgWnWtoAxrjqsYgfVw.jpg",
          source: "mp3/Taare_Nihaare.mp3",
          url: "https://youtu.be/HyeXZWi6lS8?si=Q8sAQcRJ4fkBK5zk",
          favorite: false
        },
        {
          name: "Nijavaa Idoo",
          artist: "GV Prakash Kumar",
          cover: "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20240618172743.jpg",
          source: "mp3/Nijavaa_Idoo.mp3",
          url: "https://youtu.be/It5qFa3B_vw?si=UI8G0BOKlsr6CAlD",
          favorite: false
        },
        {
          name: "Marco - First Blood ",
          artist: "Santhosh Venky",
          cover: "https://english.mathrubhumi.com/image/contentid/policy:1.10108438:1732515330/marco.jpeg?$p=b8c0503&f=16x10&w=852&q=0.8",
          source: "mp3/Marco First Blood.mp3",
          url: "https://youtu.be/NP8hZM7d-oI?si=il4h884aUgAfs-bS",
          favorite: false
        },
        {
          name: "Marco- Promo Song",
          artist: "Music & BGM : Ravi Basrur,Singers & Lyricists- Anohnymouss , Fil$",
          cover: "https://images.filmibeat.com/img/popcorn/movie_posters/marco-20240923111718-22201.jpg",
          source: "mp3/Marco_-_Promo_Song.mp3",
          url: "https://youtu.be/YrgPD5Tlh8k?si=hV-OCWhtAjPOF1RV",
          favorite: false
        },
        {
          name: "Sun Sathiyaan 💔",
          artist: "ABCD2",
          cover: "https://iili.io/2eGzfbj.jpg",
          source: "mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=2S24-y0Ij3Y&ab_channel=BLACKPINK",
          favorited: false
        },
        {
          name: "DDU DU DDU DU 🔫 ",
          artist: "BlackPink",
          cover: "img/2.jpeg",
          source: "mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=IHNzOHi8sJs&ab_channel=BLACKPINK",
          favorited: true
        },

        {
          name: "Lovesick Girls",
          artist: "BlackPink",
          cover: "img/3.jpeg",
          source: "mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=dyRsYk0LyA8&ab_channel=BLACKPINK",
          favorited: false
        },

        {
          name: "Playing With Fire 🔥",
          artist: "BlackPink",
          cover: "4.jpeg",
          source: "mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=9pdj4iJD08s&ab_channel=BLACKPINK",
          favorited: false
        },
        {
          name: "As If It's Your Last",
          artist: "BlackPink",
          cover: "5.jpeg",
          source: "mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=Amq-qlqbjYA&ab_channel=BLACKPINK",
          favorited: true
        },
        {
          name: "Boy with Love",
          artist: "BTS",
          cover: "6.jpg",
          source: "mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=XsX3ATc3FbA&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Dynamite",
          artist: "BTS",
          cover: "7.jpeg",
          source: "mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=gdZLi9oWNZg&ab_channel=HYBELABELS",
          favorited: true
        },
        {
          name: "DNA",
          artist: "BTS",
          cover: "img/8.jpeg",
          source: "mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=MBdVXkSdhwU&ab_channel=HYBELABELS",
          favorited: false
        },
        {
          name: "Butter",
          artist: "BTS",
          cover: "img/9.jpeg",
          source: "mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=WMweEpGlu_U&ab_channel=HYBELABELS",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
