/*
 * On-screen text in Portuguese, English, Spanish and Turkish (the same copy as the Android app).
 * tr(pt, en, es): the text in the current language. The language follows the TV unless set in Home Settings.
 */
var I18N = (function () {
  'use strict';

  var lang = 'en';
  var turkish = {
    'Live TV': 'Canlı TV',
    'All Apps': 'Tüm Uygulamalar',
    'Settings': 'Ayarlar',
    'Home Settings': 'Ana Ekran Ayarları',
    'TV Settings': 'TV Ayarları',
    'HDMI Inputs': 'HDMI Girişleri',
    'Inputs': 'Girişler',
    'Shortcuts': 'Kısayollar',
    'Weather': 'Hava Durumu',
    'No weather data right now.': 'Şu an hava durumu verisi yok.',
    'Sunrise ': 'Gün doğumu ',
    'Sunset ': 'Gün batımı ',
    'Crypto': 'Kripto',
    '24h change': '24s değişim',
    'For You': 'Senin İçin',
    "Couldn't open ": 'Açılamadı: ',
    "Couldn't open TV Settings": 'TV Ayarları açılamadı',
    'Dollar': 'Dolar',
    'Series': 'Dizi',
    'Language': 'Dil',
    'Temperature': 'Sıcaklık',
    'Theme': 'Tema',
    'Automatic': 'Otomatik',
    'Light': 'Aydınlık',
    'Dark': 'Karanlık',
    'Weather widget': "Hava durumu widget'ı",
    'Quotes widget': "Kur widget'ı",
    'On': 'Açık',
    'Off': 'Kapalı',
    'Shelf': 'Raf',
    'On · ': 'Rafta · ',
    'OK or the arrows change the value.': 'OK veya oklar değeri değiştirir.',
    'OK adds or removes · ← → change the order': 'OK ekler veya çıkarır · ← → sırayı değiştirir',
    'Explore': 'Keşfet',
    'Movies': 'Filmler',
    'Shows': 'Diziler',
    'Clear': 'Açık',
    'Mostly Sunny': 'Çoğunlukla Güneşli',
    'Mostly Clear': 'Çoğunlukla Açık',
    'Partly Cloudy': 'Parçalı Bulutlu',
    'Cloudy': 'Bulutlu',
    'Fog': 'Sisli',
    'Drizzle': 'Çisenti',
    'Heavy Rain': 'Şiddetli Yağmur',
    'Snow': 'Kar',
    'Thunderstorms': 'Gök Gürültülü Sağanak',
    'Rain': 'Yağmur'
  };

  /** Turkish by the English; text built at runtime by its English pattern. */
  function turkishText(en) {
    if (Object.prototype.hasOwnProperty.call(turkish, en)) return turkish[en];
    var m = /^(\d+) (min|h) ago$/.exec(en);
    if (m) return m[1] + (m[2] === 'min' ? ' dakika önce' : ' saat önce');
    m = /^(\d+) seasons?$/.exec(en);
    if (m) return m[1] + ' sezon';
    m = /^H:(\S+)(\s+)L:(\S+)$/.exec(en);
    if (m) return 'Y:' + m[1] + m[2] + 'D:' + m[3];
    m = /^The shelf holds up to (\d+) apps\.$/.exec(en);
    if (m) return 'Rafa en fazla ' + m[1] + ' uygulama sığar.';
    return en;
  }

  function detect(setting) {
    var v = (setting || 'auto').toLowerCase();
    if (v === 'auto') v = (navigator.language || 'en').toLowerCase();
    return v.indexOf('tr') === 0 ? 'tr' : v.indexOf('pt') === 0 ? 'pt' : v.indexOf('es') === 0 ? 'es' : 'en';
  }

  return {
    set: function (setting) { lang = detect(setting); document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang; },
    get lang() { return lang; },
    tr: function (pt, en, es) { return lang === 'tr' ? turkishText(en) : lang === 'es' ? (es || en) : lang === 'en' ? en : pt; },
    /** BCP 47 tag for dates, numbers and TMDB. */
    locale: function () { return lang === 'tr' ? 'tr-TR' : lang === 'es' ? 'es-MX' : lang === 'en' ? 'en-US' : 'pt-BR'; }
  };
})();

function tr(pt, en, es) {
  return I18N.tr(pt, en, es);
}
