// tried other methods to wait until tweets loaded, didn't work
setTimeout(function() {
  let tweets = document.querySelectorAll('article[role="article"]');

  tweets.forEach(function(tweet) {

    let content = tweet.querySelector(".css-901oao.r-jwli3a.r-1qd0xha.r-a023e6.r-16dba41.r-ad9z0x.r-bcqeeo.r-bnwqim.r-qvutc0");

    if (content != null) {
      // use longest word in "get the facts about [LONGEST WORD]"
      let words = content.textContent.split(" ");
      let longest = words.sort(function (a, b) { return b.length - a.length; })[0];

      // create fact check element
      let factCheck = document.createElement("div");
      factCheck.classList.add("fact-check");

      // add exclamation mark icon
      let svg = document.createElement("div");
      svg.innerHTML = `<svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1g7fiml r-zso239 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-199wky7"><g><circle cx="12.025" cy="16.437" r="1.281"></circle><path d="M14.39 7.194c-.094-.127-.242-.2-.4-.2h-3.928c-.158 0-.307.073-.4.2-.096.126-.125.29-.08.442l1.814 6.098c.063.212.258.357.48.357h.298c.222 0 .416-.145.48-.356l1.813-6.098c.047-.152.017-.316-.077-.442z"></path><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>`;      
      factCheck.appendChild(svg);

      // add text
      let link = document.createElement("a");
      link.textContent = `Get the facts about ${longest}`;
      factCheck.appendChild(link);

      // add fact check element right above Reply/RTs/Likes row
      let group = tweet.querySelector('div[role="group"]');
      group.before(factCheck);
    }
  })

}, 3000);