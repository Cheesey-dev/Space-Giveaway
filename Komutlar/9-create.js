const Discord = require('discord.js');

const data = require('croxydb')

const Nuggies = require('nuggies');

const giveaway = {};

const ms = require('ms');

module.exports.run = async (client, message, args) => {

  let açıkmı = await data.fetch(`pre_${message.author.id}`)

  if(açıkmı) {

const filter = m => m.author.id === message.author.id;

    const collector = message.channel.createMessageCollector(filter, { max: 7, time: 60 * 1000 });

    let step = 0;

    message.channel.send('<:codesty_support:844468556430704640> Ödül nedir?');

    collector.on('collect', async (msg) => {

        if (!msg.content) return collector.stop('error');

        step++;

        if (step == 1) {

            const prize = msg.content;

            message.channel.send(`:tada: Ödül. **${prize}**! \n<:codesty_support:844468556430704640> Hangi kanalda başlatmak istiyorsunuz?`, { allowedMentions: { roles: [], users: [], parse: [] } });

            giveaway.prize = prize;

        }

        else if (step == 2) {

            const channel = msg.mentions.channels.first() || msg.guild.channels.cache.get(msg.content);

            if (!channel) return collector.stop('error');

            giveaway.channel = channel.id;

            message.channel.send(`:tada: Kanal <#${channel.id}>! \n<:codesty_support:844468556430704640> Kaç kazanan istiyorsun?`);

        }

        else if (step == 3) {

            const winners = msg.content;

            if (isNaN(winners)) return collector.stop('error');

            if (parseInt(winners) > 10) {

                message.reply('10 dan fazla kazananınız olamaz!');

                return collector.stop('error');

            }

            giveaway.winners = parseInt(winners);

            message.channel.send(`:tada: ${winners} kazananlar bu çekiliş için seçilecektir! \n<:codesty_support:844468556430704640> Ne kadar zaman istiyorsun?`);

        }

        else if (step == 4) {

            const time = msg.content;

            if (!ms(time)) return collector.stop('error');

            giveaway.time = time

            if (ms(giveaway.time) > ms('14d')) return collector.stop('HIGH_TIME');

            message.channel.send(`:tada: Saat şimdi ${time}! \n<:codesty_support:844468556430704640> Çekilişi kim düzenliyor?`);

        }

        else if (step == 5) {

            const host = msg.mentions.users.first() || msg.guild.members.cache.get(msg.content) || message.member;

            giveaway.host = host.id;

            message.channel.send(`:tada: Çekiliş düzenleyen ${host}! \n<:codesty_support:844468556430704640> Şimdi hediye için herhangi bir şart istiyor musunuz? \`yes\`, \`no\` `);

        }

        else if (step == 6) {

            if (!['yes', 'no'].includes(msg.content.toLowerCase())) return collector.stop('error');

            giveaway.requirements = { enabled: msg.content == 'yes' ? true : false };

            return message.channel.send(`<:codesty_support:844468556430704640> Bu doğru mu?\n<:codesty_join:844468549417697350> \`\`\`Ödül: ${giveaway.prize}\`\`\`\n<:codesty_join:844468549417697350> \`\`\`Kazanan(lar): ${giveaway.winners}\`\`\`\n<:codesty_join:844468549417697350> \`\`\`Süre: ${ms(giveaway.time)}\`\`\`\n<:codesty_join:844468549417697350> \`\`\`Düzenleyen: ${message.guild.members.cache.get(giveaway.host).user.username}\`\`\`\n<:codesty_join:844468549417697350> \`\`\`Şart: ${giveaway.requirements.enabled ? 'Yes' : 'No'}\`\`\`\n<:codesty_support:844468556430704640> Yanıtla \`yes\` veya \`no\`!`);

        }

        else if (step == 7) {

            if (!['yes', 'no'].includes(msg.content)) return collector.stop('error');

            if (msg.content == 'yes') return collector.stop('done');

            if (msg.content == 'no') return collector.stop('cancel');

        }

    });

    collector.on('end', async (msgs, reason) => {

        if (reason == 'time') return message.channel.send('<:carpi:855750448711467058> Zamanında cevap vermedin!');

        if (reason == 'error') return message.channel.send('<:carpi:855750448711467058> Geçerli bir seçenek sunmadınız!');

        if (reason == 'cancel') return message.channel.send('<:carpi:855750448711467058> Yanlış bilgi nedeniyle iptal edilen hediye kurulumu!');

        if (reason == 'HIGH_TIME') return message.channel.send('<:carpi:855750448711467058> Süre 14 günden fazla olamaz!');

        if (reason == 'done' && giveaway.requirements.enabled) {

            message.channel.send('<:codesty_support:844468556430704640> Rol gereksinimlerini kullanabilirsiniz: `role=ROL ID` Örnek: `role=xxxxxxxxxx`! Gereksinimleri koymayı bitirdikten sonra `done` yazın');

            const rcollector = message.channel.createMessageCollector(filter, { time: 60 * 1000, max: 1000 });

            rcollector.on('collect', async (m) => {

                if (!['done', 'stop', 'cancel'].includes(m.content.toLowerCase()) && !m.content.includes('role=')) return rcollector.stop('error');

                if (m.content.toLowerCase() == 'done') return rcollector.stop('done');

                if (!giveaway.requirements.roles) giveaway.requirements.roles = [];

                const id = m.content.split(' ').join('').split('=')[1];

                if (!message.guild.roles.cache.get(id)) return message.channel.send('<:carpi:855750448711467058> Bu geçerli bir rol değil.!');

                giveaway.requirements.roles.push(m.content.split(' ').join('').split('=')[1]);

                message.channel.send(`Gereksinimlere rol eklendi!\n\`\`\`\n${giveaway.requirements.roles.map(x => message.guild.roles.cache.get(x).name).join('\n')}\n\`\`\``, { allowedMentions: { roles: [], parse: [], users: [] } });

            });

            rcollector.on('end', async (msg, r) => {

                if (r == 'time') return message.channel.send('<:carpi:855750448711467058> Zamanında cevap vermedin.!');

                if (r == 'error') return message.channel.send('<:carpi:855750448711467058> Geçerli bir seçenek sunmadınız!');

                if (r == 'cancel') return message.channel.send('<:carpi:855750448711467058> Yanlış bilgi nedeniyle iptal edilen hediye kurulumu!');

                if (r == 'done') {

                    console.log(giveaway)

                    Nuggies.giveaways.create({

                        message: message, prize: giveaway.prize, host: giveaway.host, winners: giveaway.winners, endAfter: giveaway.time, requirements: giveaway.requirements, channel: giveaway.channel,

                    });

                    await message.channel.send(':tada: Bir hediye oluşturdu!').then(m => setTimeout(() => m.delete(), 2000));

                }

            });

        }

        else {

            Nuggies.giveaways.create({

                message: message,

                prize: giveaway.prize,

                host: giveaway.host,

                winners: giveaway.winners,

                endAfter: giveaway.time,

                requirements: giveaway.requirements,

                channel: giveaway.channel,

            });

            await message.channel.send('Created a giveaway!').then(m => setTimeout(() => m.delete(), 2000));

        }

    });

} else { return message.channel.send(new Discord.MessageEmbed()

 .setDescription(`<:carpi:855750448711467058> Bu komut premiumlulara özel!
Premium almak için [Destek sunucumuzu](https://discord.gg/KZfAEjrPUF) ziyaret et!`)

.setTimestamp()

)

} 

}

exports.help = {

    name: 'pre-çekiliş-oluştur'

}