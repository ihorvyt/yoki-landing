const resources = {
    en: {
      translation: {
        "stayTuned": "StayTuned",
        "welcomeMessage": "Welcome to the app for finding and collaborating with like-minded people",
        "find_mates": "Find your <br> new Friends and",
        "implement_ideas": "realize your <br> ideas together",
        "introduce_yourself" : "<span class=\"yellow-text\">Tell about yourself</span> in the form, let others know who you are and what you want",
        "in_form": "in the questionnaire, let others know who you are and what you want",
        "form_details" : "<p>In the questionnaire, you can write what you like to do, your hobbies, favorite movies, music genres, and much more.</p>"
      }
    },
    ua: {
      translation: {
        "stayTuned": "Бути в курсі",
        "welcomeMessage": "Вітаємо у застосунку для пошуку і співпраці з однодумцями",
        "find_mates": "Знайдіть своїх <br> однодумців та",
        "implement_ideas": "Реалізуйте <br>ідеї разом.",
        "introduce_yourself": "<span class=\"yellow-text\">Розкажіть про себе</span> у анкеті, дайте іншим зрозуміти хто ви і чого хочете",
        "in_form": "у анкеті, дайте іншим зрозуміти хто ви і чого хочете",
        "form_details": "<p>У анкеті ви можете написати чим любите займатися, ваші захоплення, улюблені фільми, жанри музики і ще багато іншого.</p>"
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