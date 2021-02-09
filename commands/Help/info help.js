const Discord = require('discord.js')

    
    module.exports.run = async (bot, message, args) => {
        
    
    
        let embed = new Discord.MessageEmbed()
        .setThumbnail(bot.user.displayAvatarURL())
        .setTitle("راهنمای دستورات اطلاعات شخصی بات <:help:778600706729967647>   ")
        .addField('انتخاب نام 💠', '<:cmd:778602422490103868>   `p?set first-name <نام>`')
        .addField('انتخاب نام خانوادگی 💫', '<:cmd:778602422490103868>  `p?set last-name <فامیلی>`')
        .addField('انتخاب سن 🔞', '<:cmd:778602422490103868>   `p?set age <سن>`')
        .addField('انتخاب شهر 🌆', '<:cmd:778602422490103868>   `p?set city <شهر>`')
        .addField('انتخاب خواننده مورد علاقه 🎶', '<:cmd:778602422490103868>   `p?set singer <خواننده>`')
        .addField('انتخاب فوتبالیست مورد علاقه ⚽', '<:cmd:778602422490103868>   `p?set football <فوتبالیست>`')
        .addField('انتخاب بیو 🌐', '<:cmd:778602422490103868>   `p?set bio <بیو>`')
        .addField('انتخاب شماره تلفن 📱', '<:cmd:778602422490103868>   `p?set phonenumber <شماره>`')
        .addField('انتخاب اکانت جیمیل <:gmail:773945082326810665>', '<:cmd:778602422490103868>   `p?set gmail <نام اکانت>`')
        .addField('انتخاب اکانت اینستاگرام <:ig:773944358156238849>', '<:cmd:778602422490103868>   `p?set instagram <نام اکانت>`')
        .addField('انتخاب اکانت اسپاتیفای <:spotify:747084576534560769>', '<:cmd:778602422490103868>   `p?set spotify <نام اکانت>`')
        .addField('انتخاب اکانت یوتیوب <:Youtube:766036743534542850>', '<:cmd:778602422490103868>   `p?set youtube <نام اکانت>`')
        .setColor('f2ecec')
        message.channel.send(embed)
       
    
    
    
    }
    
    module.exports.help = {
      name:"help-info",
      aliases: [""]
    }