const Discord = require("discord.js");
const myid = ["57311892908238438"];
const prefix = ["1"];
const cmd = require("node-cmd");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const Help = new Discord.Client();

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.login("NzAxMDk1NTI3MTQzNzAyNjE5.Xpsglw.gdXpl5BKAHrCC8WfENXQTWJMxs4");
client2.login("NzAxNDY3MjM3NzIyMzU3NzY1.Xpx6ag.7RE2SNsIDScC5h1fM6Sm6C-6Zuo");
client3.login("NzAxNDcwMTkxNzQ5NDMxMjk2.Xpx9MA.qNBwYsRuI_gTjwBrvOykI-XZqUg");
client4.login("NzAxNDcwNzA4MTk4NDA4MTkz.Xpx94A.gyfJOs3Zy1Qf_jOmpAUMy9dGMZU");
client5.login("NzAxMDk1MDIwMTE5NDU3OTMz.Xp8FWg.89o7zULLYXOYWno_-ypVJBMIrs4");
client6.login("NzAyOTA5ODcxNDQ3NzM2MzUw.XqG6VQ.XlmFSPv8OudPSSoFul4Jazh6D_g");
client7.login("NzU5MzY4MDYyNjA0MDE3Njc1.X3CJiA.DUwyrkRWK8dFywGTXVxrJP1iE7c");
Help.login("NzAxNDY2NDUwMzU5MjIyMzAy.Xpx5kA.hsYBOPDppZz7BkI4-VGL3VvmSfY");

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client2.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client3.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client4.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client5.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client6.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }
  if (message.content === "1c") {
    message.channel.send("#credits");
  }
  if (message.content.startsWith("$s")) {
    var text = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    message.channel.send(text);
  }
  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

client7.on("message", message => {
  if (message.content === "1d") {
    message.channel.send("#daily");
  }

  if (message.content === "1c") {
    message.channel.send("#credits");
  }

  if (message.content.startsWith("$s")) {
    var text = message.content

      .split(" ")

      .slice(1)

      .join(" ");

    message.channel.send(text);
  }

  if (message.content === prefix + "rep") {
    message.channel.send("#rep " + "<@" + myid + ">");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client2.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client3.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client4.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client5.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client6.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;
    let ecount = 0;
    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

client7.on("message", message => {
  if (message.content === prefix + "fast") {
    let count = 0;

    let ecount = 0;

    for (let x = 0; x < 10000; x++) {
      message.channel.send(`** --> **[ " ${x} " ]** <-- **`).then(m => {
        count++;
      });
    }
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client2.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client3.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client4.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;
    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];
        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});
client5.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client6.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;

    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];

        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

client7.on("message", message => {
  if (message.content === prefix + "slow") {
    let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789".split(
      ""
    );
    let spaces = " ".repeat(10);
    let last = "";
    let messages = 0;
    setInterval(() => {
      let str = "";
      let num = Math.floor(Math.random() * 10);
      for (let i = 0; i < num; i++) {
        str += letters[Math.floor(Math.random() * letters.length)];
        if (i === num - 1) {
          if (last === "") {
            messages += 1;
            last = `${str} ${spaces.slice(str.length + 1)}`;
            return message.channel.send(
              `${str} ${spaces.slice(str.length + 1)}${messages}`
            );
          } else {
            messages += 1;
            let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
            last = spaced;
            return message.channel.send(spaced);
          }
        }
      }
    }, 6000);
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client2.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client3.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client4.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client5.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client6.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

client7.on("message", async message => {
  if (message.content === prefix + "stop") {
    await cmd.run("refresh");
    await message.channel.send("Bot Stoped");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

client.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``1`` ");
  }
});

client2.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``2`` ");
  }
});

client3.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My v Is ``3`` ");
  }
});

client4.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``4`` ");
  }
});

client5.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``5`` ");
  }
});

client6.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``6`` ");
  }
});

client7.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``7`` ");
  }
});

Help.on("message", message => {
  if (message.content === prefix + "number") {
    message.channel.send(" My Token Is ``Help`` ");
  }
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠

Help.on("message", function(message) {
  if (message.content.startsWith(prefix + "help")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageRPS = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    var RpsEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.avatarURL)
      .addField("Credits | تجميع الكريدت", "💳", true)
      .addField("Rep | ريب", "👍", true)
      .addField("slow | سبام", "🤬", true)
      .addField("Code Info | خصائص الكود ", "🧷", true);
    message.channel.send(RpsEmbed).then(msg => {
      msg.react("💳");
      msg.react("👍");
      msg.react("🤬");
      msg
        .react("🧷")
        .then(() => msg.react("💳"))
        .then(() => msg.react("👍"))
        .then(() => msg.react("🤬"))
        .then(() => msg.react("🧷"));
      let reaction1Filter = (reaction, user) =>
        reaction.emoji.name === "💳" && user.id === message.author.id;
      let reaction2Filter = (reaction, user) =>
        reaction.emoji.name === "👍" && user.id === message.author.id;
      let reaction3Filter = (reaction, user) =>
        reaction.emoji.name === "🤬" && user.id === message.author.id;
      let reaction4Filter = (reaction, user) =>
        reaction.emoji.name === "🧷" && user.id === message.author.id;
      let reaction1 = msg.createReactionCollector(reaction1Filter, {
        time: 20000
      });
      let reaction2 = msg.createReactionCollector(reaction2Filter, {
        time: 19000
      });
      let reaction3 = msg.createReactionCollector(reaction3Filter, {
        time: 18000
      });
      let reaction4 = msg.createReactionCollector(reaction4Filter, {
        time: 18000
      });
      reaction1.on("collect", r => {
        const embed = new Discord.RichEmbed()
          .setThumbnail(
            "https://images-ext-2.discordapp.net/external/JD7xvknBVacXHoC2re78AtJN4PUY5IjUZy1uWIqzObI/https/s3.amazonaws.com/eclincher.wp.upload/wp-content/uploads/2015/08/25155834/people-icon.png"
          )
          .setColor("#000000").setDescription(`
      💷***__تجميع الكريدت__***💶 
**
،؛${prefix}c ====> لمعرفت عدد الكريدت الي في الحساب
،؛${prefix}d ====> لاخذ راتبك اليومي
،؛${prefix}say <text> ====> لجعل الحساب يتكلم بالكلام الي تكتبه
،؛ By ===> Kero and PoulaZ
**
`);
        message.author.sendEmbed(embed);
        message.reply("تم ارسالك بلخاص");
      });
      reaction2.on("collect", r => {
        const embed = new Discord.RichEmbed()
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/553862087382925313/556036868492230667/logo-admin-png-4.png"
          )
          .setColor("#000000").setDescription(`
      ✔***__ريب__***:crown: 
**
،؛${prefix}rep ====> لأعطاء نفسك ريب
ملاحظات :-
1- لازم تحط الايدي تبعك في الكود
2- لازم لفل الحساب يكون 10 عشان يقدر يعطي ريب
،؛ By ===> Kero and PoulaZ
**
`);
        message.author.sendEmbed(embed);
        message.reply("تم ارسالك بلخاص");
      });
      reaction3.on("collect", r => {
        const embed = new Discord.RichEmbed()
          .setThumbnail(
            "https://images-ext-1.discordapp.net/external/4IGqoA1bqVqu_o2I-jY51fqJFy2S8f8NrzcnzxhFtVU/http/reli.sh/wp-content/themes/relish/assets/img/services/icon-games.png"
          )
          .setColor("#000000").setDescription(`
       ✍ ***__سبام__***🤬
 **
،؛${prefix}fast ====> لعمل سبام سريع محدث
،؛${prefix}slow==> لجعل الحساب يسوي سبام البطيئ
،؛${prefix}stop ====> لأيقاف السبام (Only Glitch)
ملاحظات :-
1- انا سويت الكود علي اساس ان الحساب مايبلع بلاك لست سريع
2- ماتقدر 
**
،؛ By ===> Kero and PoulaZ
`);
        message.author.sendEmbed(embed);
        message.reply("تم ارسالك بلخاص");
      });
      reaction3.on("collect", r => {
        const embed = new Discord.RichEmbed().setColor("#000000")
          .setDescription(`
            ⚒-=- خصائص البوت -=-🏆
،؛=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=،»
1- به قائمة (help) 
2- انا مبرمجه بطريقه انه مايبلع بلاك لست سريع من الاسبام
3- سهل التعامل
4- في طريقتين للسبام
،؛ By ===> Kero and PoulaZ
،؛=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=،»
`);
        message.author.sendEmbed(embed);
      });
    });
  }
});
