const Discord = require("discord.js")

const disbutpages = require("discord-embeds-pages-buttons")

 const disbut = require("discord-buttons") 

exports.run = async (client, message, args) => {

    const embed1 = new Discord.MessageEmbed()

  .setColor("BLURPLE")

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("Space Giveaway")

  .setURL("https://top.gg/bot/765207268408033322")

  .setDescription(`<:emoji_83:847801988656791563> Alttaki butonlara basarak komutları görüntüleyebilirsin!`)

  .addField(`<:blurple_tada:841709529217105941> Çekiliş komutlar`, "Galiba sunucuda güzel şeyler olacak sabırsızlıkla bekliyorum!", true)

  .addField(`<:emoji_69:841947953278484480> Bot komutları`, "Hakkımda bilgi al biraz dostum. " , true)

  .addField(`<:emoji_68:841947082076192778> Yetkili komutları`, "Yetkili Komutları ile sunucunuzu daha güzel yapabilir siniz.", true)
.addField(`<:logo_komutlar:841709516474679336> Logo komutları`, "Güzel renkler ve şekiller ile logo yapalım hadi!", true)

 .addField("<:emoji_84:847799091886161970> Müzik Komutları", "Biraz müzik dinleyelim 🎶") 

  .addField("<:tembel:802431611848228904> Eğlence Komutları", "Biraz eğlenmek herkesin hakkı ;D") 

  .addField(`<:game:842658421231845408> Oyun Komutları`, "Oyun komutlarım bence bir harika!!", true)

  .addField("<:bug_hunter:763282944637927434> Aktivite Komutları", "Sesli sohbette biraz aktivite yapalım?") 

  .addField("<:Para:847799588462657536> Ekonomi Komutları", "Hmm zengin insanı değiştirir.") 

  .addField("<:emoji_ab:848482971013873694> Emoji Komutları", "Gel Emojilere bir göz atalım?") 
   
  .addField("<:neutral:846276939185520640> Bot list Komutları", "Bot list sistemi kuralımmı :3")
  .setFooter("Space Giveaway", client.user.displayAvatarURL())

    const embed2 = new Discord.MessageEmbed()

    .setColor("GREEN")

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:blurple_tada:841709529217105941> Çekiliş Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

    .setDescription(`> **g.çekiliş-başlat** - Çekiliş Başlatırsınız. 
> **g.çekiliş-düzenle** - Çekiliş düzenle siniz. 
> **g.çekiliş-sil** - Çekiliş silersiniz. 
> **g.çekiliş-yeniden-çek** - Çekiliş kazanan yeniden çekersiniz. 
> **g.çekiliş-bitir** - Çekiliş bitirirsiniz.
> **g.çekiliş-liste** - Çekiliş' leri listeleriniz. 
> **g.oylama** - Oylama başlatırsınız.
`) 

    const embed3 = new Discord.MessageEmbed()

    .setColor("GREEN")

      .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:emoji_69:841947953278484480> Bot Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

     .setDescription(`> **g.profil** - Profilinize bakarsınız. 
> **g.profil-ayarla** - Profilinizi ayarlarsınız. 
> **g.davet** - Botun davet linkini gönderir. 
> **g.ping** - Botun pingini gösterir. 
> **g.öneri** - Bot için öneri verirsiniz. 
> **g.dbli** - [Top.gg](https://top.gg/bot/765207268408033322) Bilgilerini gösterir. 
> **g.sponsor** - Sponsorumuzu gösterir. 
> **g.i** - Botun istatistik' lerini gösterir. 
> **g.oy-durum** - [Top.gg](https://top.gg/bot/765207268408033322) Oy verip vermediğinizi gösterir. 
`) 

   const embed4 = new Discord.MessageEmbed() 

  .setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:emoji_68:841947082076192778> Yetkili Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

  .setDescription(`> **g.prefix ayarla** - Prefix ayarlarsınız.
> **g.prefix sıfırla** - Prefix sıfırlarsınız.
> **g.nuke** - Nuke atarsınız. 
> **g.rolbilgi** - Belirttiğiniz rol hakkında bilgi alırsınız. 
> **g.gir** -  Bulunduğunuz sesli kanala girer. 
> **g.çık** - Girmiş olduğu sesli kanaldan çıkar. 
> **g.yavaş-mod** - Kullanılan kanalda yavaş mod açarsınız. 
> **g.emoji-ekle** - Emoji eklersiniz. 
> **g.sil** - <0/100> Arasında mesaj silersiniz.
> **g.sa-as aç** -  Sa as mesaj açarsınız. 
> **g.sa-as-emoji aç** - Sa as emoji açarsınız. 
> **g.sa-as kapat** - Sa As kapatırsınız. 
> **g.sa-as-emoji kapat** - Sa as emoji kapatırsınız. 
> **g.sa-as mesaj** - Sa as mesaj ayarlarsınız. 
> **g.ayarlar** - Ayarları gösterir. 
> **g.yedek oluştur** - Yedek oluşturursunuz.
> **g.yedek bilgi** - Oluşturduğunuz yedek hakkında bilgi alırsınız. 
> **g.yedek yükle** - Oluşturdupunuz yedeği geri yüklersiniz.
> **g.yapay-zeka aç** - Yapay zeka açarsınız. 
> **g.yapay-zeka kapat** - Yapay zeka kapatırsınız.
`) 
   const embed5 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:logo_komutlar:841709516474679336> Logo Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.altın** - Altın logo oluşturur. 
> **g.elmas** - Elmas logo oluşturur. 
> **g.neonmavi** - Neonmavi logo oluşturur. 
> **g.afrika** - Afrika logo oluşturur. 
> **g.arctic** - Arctic logo oluşturur. 
> **g.bubble** - Bubble logo oluşturur.  
`) 

   const embed6 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:emoji_84:847799091886161970> Müzik Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.play** - Müzik açarsınız. 
> **g.stop** - Müziği durdurur sunuz.
> **g.np** - Çalan müzik hakkında bilgi alırsınız. 
> **g.skip** - Çalan şarkıyı geçersiniz. 
> **g.queue** - Şarkı sırasına bakarsınız. 
> **g.volume** - Sesi ayarlarsınız.
> **g.pause** - Müziği duraklatırsınız. 
> **g.resume** - Müziği geri açarsınız. 
> **g.remove** - Sıradan şarkı çıkarırsınız. 
> **g.lyrics** -  Şarkı sözlerine bakarsınız.
`)

   const embed7 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:tembel:802431611848228904> Eğlence Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.atatürk** - Atatürk gif atar. 
> **g.afk** - Afk moduna girersiniz. 
> **g.avatar** - Avatarınızı veya etiketlediğiniz kişinin avatar atar. 
> **g.play-store** - Yazdığınız uygulama hakkında play store' daki bilgilerini verir. 
> **g.steam** - Yazdığınız oyun hakkında steam' dan bilgi verir. 
> **g.mc-skin** - Yazdığın Minecraft oyuncu skin atar. 
> **g.server-icon** - Sunucu icon atar. 
> **g.sor** - Bota soru sorarsınız. 
> **g.yazıtura** - Yazı tura atarsınız. 
> **g.piyango** - Şanslı isen oyna. 
> **g.yılbaşı** - Yılbaşına kalan süre söyler. 
> **g.hesapla** - Matematik problem çözer. 
> **g.fbi** - Fbi gelir.
> **g.kedi** - Kedi fotoğraf atar. 
> **g.koala** - Koala fotoğraf atar. 
> **g.kuş** - Kuş fotoğraf atar. 
> **g.köpek** - Köpek fotoğraf atar. 
> **g.panda** -  Panda fotoğraf atar. 
> **g.tilki** - Tilki fotoğraf atar.
> **g.kahve** - Kahve ısmarlarsınız.
> **g.wasted** - Pp' nize wasted efekti katar. 
> **g.mc-kasa** - MC kasa açarsınız. 
> **g.mc-effect** - MC effect kasası açarsınız. 
> **g.meme** - Random Meme atar. 
> **g.hava-durumu** - Yazdığınız yerin hava durumunu gösterir. 
> **g.random-anime** - Random anime pp atar. 
> **g.not-al** - Not alırsınız. 
> **g.not-sil** - Not sizlersiniz. 
> **g.notlarım** - Notlarınıza bakarsınız. 
> **g.mc-kafa** - Yazdığınız Minecraft oyuncu kafasını atar. 
> **g.covid** - Yazdığınız yerin covid hakkındaki bilgisini verir. 
> **g.youtube** - Yazdığınız YouTube kanal hakkında bilgi verir. 
> **g.ss** - Yazdığınız url ye girip ss atar. 
> **g.tdk** - Yazdığınız kelimeyi tdk' da arar.
> **g.triggered** - Pp' nizi triggered efekti katar.
> **g.trash** - Etiketlediğiniz kişiye çöp efekti katar.
> **g.batslap** - Etiketlediğiniz kişiye batslap efekti katar.
> **g.sunucu-bilgi** - Sunucu hakkında bilgi verir. 
> **g.fake-mesaj [etiket] [mesaj]** - Etiketlediğiniz kişiye fake mesaj attırırsınız. 
> **g.aşk-ölçer** - Etiketlediğiniz kişi ile aşkınızı ölçer. 
`) 

   const embed9 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:game:842658421231845408> Oyun Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.snake** - Yılan oyunu oynarsınız. 
> **g.connect-four** - Dört bağla oynarsınız. 
> **g.xox** - Xox oynarsınız. 
> **g.tkm** - Taş kağıt makas oynarsınız. 
> **g.akinator** - Akinatör oynarsınız.  
> **g.type-fast** - Hızlı yaz oyunu oynarsınız. 
> **g.blackjack** - Blackjack Oynarsınız. 
> **g.pokemon** - Pokemon oyunu oynarsınız.
> **g.fight** - Etiketlediğiniz kişi ile savaşırsınız. 
`) 

   const embed10 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:bug_hunter:763282944637927434> Aktivite Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.ytt** - YouTube Together açarsınız. 
> **g.poker** - Poker açarsınız. 
> **g.chess** - Chess açarsınız. 
> **g.betrayal** - Betrayal açarsınız. 
> **g.fishing** - Fishing açarsınız. 
`) 

  const embed11 = new Discord.MessageEmbed()

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:Para:847799588462657536> Ekonomi Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.banka hesap oluştur** - Banka hesap açarsınız. 
> **g.banka hesap bilgi** - Banka hesapınıza bakarsınız. 
> **g.banka hesap kapat** - Banka hesap kapatırsınız. 
> **g.günlük** - Günlük ödül alırsınız. 
> **g.kazan** -  Kazan oyunu oynarsınız. 
> **g.slot** - Slot oyunu oynarsınız. 
> **g.çalış** - Çalışırsınız. 
`) 

   const embed12 = new Discord.MessageEmbed() 

.setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:emoji_ab:848482971013873694> Emoji Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.emoji-ekle** - Sunucuya emoji eklersiniz.
> **g.emoji-rastgele <1/25>** - 1 ve 25 arası Rastgele karışık emoji atar. 
> **g.emoji-rastgele <1/25> hareketli** - 1 ve 25 arası Rastgele hareketli emoji atar. 
> **g.emoji-rastgele <1/25> hareketsiz** - 1 ve 25 arası Rastgele hareketsiz emoji atar.
> **g.emoji-liste** - Sunucumuzun emoji' lerini listeler. 
> **g.emoji-link** - Yazdığınız emojinin linkini verir. 
> **g.emoji-bilgi** - Yazdığınız emoji hakkında bilgi verir. 
> **g.emoji-ara** - Yazdığınız emoji isminde arama yapar ve bulduklarını atar. 
`) 
   
   const embed13 = new Discord.MessageEmbed() 
   .setColor("GREEN") 

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("<:neutral:846276939185520640> Bot List Komutları")

  .setURL("https://top.gg/bot/765207268408033322")

.setDescription(`> **g.bot-ekle <botid> <botprefix>** - Bot eklersiniz. 
> **g.bot-onayla <botid>** - Bot onaylarsınız. 
> **g.bot-reddet <botid>** - Bot reddedersiniz.
> **g.botlist bot-ekle-kanal <kanal>** - Bot ekleme kanalı ayarlarsınız. 
> **g.botlist bot-log-kanal <kanal>** - Bot log kanalı ayarlarsınız. 
> **g.botlist onay-red-log-kanal <kanal>** - Bot onay red kanal ayarlarsınız. 
> **g.botlist bot-yetkili-rol <rol>** - Bot yetkili rolü ayarlarsınız. 
> **g.botlist sıfırla** - Bot list ayarlarını sıfırlarsınız. 
`) 

    var pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed9, embed10, embed11, embed12, embed13]

    disbutpages.pages(client, message, pages, 300000, disbut, "red", "844468549417697350", "844468548079321089", "844468546930606100")

}

exports.conf = {

aliases: [] 

}

exports.help = {

name: "yardım" 

} 