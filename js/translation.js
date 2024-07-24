const resources = {
    en: {
      translation: {
        "stay_Tuned": "StayTuned",
        "welcome_Message": "Welcome to the app for finding and collaborating with like-minded people",
        "find_mates": "Find your <br> new Friends and",
        "implement_ideas": "realize your <br> ideas together",
        "introduce_yourself" : "<span class=\"yellow-text\">Tell about yourself</span> in the form, let others know who you are and what you want",
        "in_form": "in the questionnaire, let others know who you are and what you want",
        "form_details" : "<p>In the questionnaire, you can write what you like to do, your hobbies, favorite movies, music genres, and much more.</p>",
        "yor_bage" : "Here is <span class=\"yellow-span-text\"> your bage</span>, Now let's get down to business",
        "lets_find_activity" : "Now <span class=\"yellow-span-text\">let's</span> find something to do!",
        "find_activity" : "Find the perfect activity!",
        "search_projects" : "Search for interesting projects and events.",
        "choose_projects" : "Choose from a variety of projects that suit you – from creative collaborations to sports initiatives.",
        "discover" : "<span class=\"yellow-span-text\">Discover</span> hobbies and interests",
        "choose_project" : "Chosen an interesting project? <span class=\"yellow-span-text\">Great!</span>",
        "join_comunity" : "Join a community of like-minded people and bring your ideas to life with others.",
        "send_bage" : "Now send your<span class=\"yellow-span-text\"> bage!</span>",
        "epress_boldly" : "  express yourself! <br><span class=\"yellow-span-text\">  Boldly!</span>",
        "Share_your_stories" : "Share your story, your dreams and your talents!",
        "unique_experience" : "Your unique experience and skills can be the key to great opportunities.",
        "time_to_act" : "Expand your <br>Possibilities —<span class=\"yellow-span-text\">It's Time to Act!</span>",
        "join_telegram" : "join our <br> Telegram",
        "join_project" : "Click to see Yoku and support our project",
        "join_tikTok":"join our <br> Tik-Tok",
        "rights_reserved" : "Copyright 2024 Yoky. All rights reserved."
      }
    },
    ua: {
      translation: {
        "stay_Tuned": "Бути в курсі",
        "welcome_Message": "Вітаємо у застосунку для пошуку і співпраці з однодумцями",
        "find_mates": "Знайдіть своїх <br> однодумців та",
        "implement_ideas": "Реалізуйте <br>ідеї разом.",
        "introduce_yourself": "<span class=\"yellow-text\">Розкажіть про себе</span> у анкеті, дайте іншим зрозуміти хто ви і чого хочете",
        "in_form": "у анкеті, дайте іншим зрозуміти хто ви і чого хочете",
        "form_details": "<p>У анкеті ви можете написати чим любите займатися, ваші захоплення, улюблені фільми, жанри музики і ще багато іншого.</p>",
        "yor_bage" : "А ось<span class=\"yellow-span-text\"> ваш бейдж</span>, тепер можемо приступити до справи",
        "lets_find_activity" : "Тепер <span class=\"yellow-span-text\">давайте</span> знайдемо чим зайнятись!",
        "find_activity" : "Знайдіть ідеальне заняття!",
        "search_projects" : "Скористайтеся пошуком, щоб знайти цікаві проєкти та події.",
        "choose_projects" : "Виберіть з безлічі проектів, які підходять саме вам — від творчих колаборацій до спортивних ініціатив.",
        "discover" : "<span class=\"yellow-span-text\">Досліджуйте</span> захоплення та інтереси",
        "choose_project" : "Вибрали цікавий вам проєкт? <span class=\"yellow-span-text\"> Чудово!</span>",
        "join_comunity" : "Приєднуйтесь до спільноти однодумців і втілюйте свої ідеї у життя разом з іншими.",
        "send_bage" : "Тепер надішліть свій  <span class=\"yellow-span-text\"> бейдж!</span>",
        "epress_boldly" : "Висловіть Себе! <br><span class=\"yellow-span-text\"> Сміливо!</span>",
        "Share_your_stories" : "Діліться своєю історією, вашими мріями та талантами!",
        "unique_experience" : "Ваш унікальний досвід та навички можуть виявитися ключем до великих можливостей.",
        "time_to_act" : "Розгорни Свої <br>Можливості —<span class=\"yellow-span-text\">Час Діяти!</span>",
        "join_telegram" : "долучайся до нашого <br> Telegram",
        "join_project" : "Натисніть на Yoky щоб підтримати наш проєкт.",
        "join_tikTok": " долучайся до нашого <br> Tik-Tok",
        "rights_reserved" : "Copyright 2024 Yoky. Всі права захищені."
      }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    i18next
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: true,
        fallbackLng: 'en',
        resources: resources,
        interpolation: {
          escapeValue: false // allows HTML in translations
        }
      }, function(err, t) {
        updateContent();
      });

    function updateContent() {
      document.querySelectorAll('[data-translate]').forEach(function(elem) {
        elem.innerHTML = i18next.t(elem.getAttribute('data-translate'));
      });
    }

    document.getElementById('ua').addEventListener('click', function() {
      i18next.changeLanguage('ua', function(err, t) {
        updateContent();
      });
    });

    document.getElementById('eng').addEventListener('click', function() {
      i18next.changeLanguage('en', function(err, t) {
        updateContent();
      });
    });
  });