export default {
  general: {
    popups: {
      wrong: {
        title: 'uuups',
        messenge: 'coś poszło nie tak - spróbuj ponownie później'
      }
    }
  },
  menu: [
    {
      title: "strona główna",
      icon: "home",
      href: "/"
    },
    {
      title: "kim jesteśmy?",
      icon: "not_listed_location",
      href: "/about"
    },
    {
      title: "katalog firm",
      icon: "import_contacts",
      href: "/cathalog"
    },
    {
      title: "oferty współpracy",
      icon: "business_center",
      href: "/cooperation"
    },
    {
      title: "oferty pracy",
      icon: "next_week",
      href: "/job"
    },
    {
      title: "umów się",
      icon: "insert_invitation",
      href: "/makeapoitment"
    },
    {
      title: "skontaktuj się z nami",
      icon: "contact_mail",
      href: "/contacts"
    }
  ],
  navbar: {
    signUp: 'zarejestruj się',
    signIn: 'zaloguj',
    logout: 'wyloguj',
    login: 'nazwa użytkownika',
    password: 'hasło',
    submit: 'zaloguj',
    loading: 'trwa logowanie',
    userNotExist: 'podany użytkownik nie istnieje',
    wrongPassword: 'podane hasło jest błędne',
    somethingWentWrong: 'coś poszło nie tak :-(',
    usermenu: [
      {
        title: 'ustawienia profilu',
        icon: 'person_pin',
        href: '/user-panel/profile-settings',
        priv: '225801'
      },
      {
        title: 'artykuły',
        icon: 'vertical_split',
        href: '/user-panel/articles',
        priv: '225803'
      },
    ]
  },
  userPanel: {
    title: 'panel użytkownika',
    usermenu: [
      {
        title: 'ustawienia profilu',
        icon: 'person_pin',
        href: '/user-panel/profile-settings'
      },
      {
        title: 'moje cv',
        icon: 'assignment_ind',
        href: '/user-panel/profile-settings/#my-cv'
      },
      {
        title: 'zmień hasło',
        icon: 'build',
        href: '/user-panel/profile-settings/#change-password'
      },
      {
        title: 'usuń konto',
        icon: 'delete_sweep',
        href: '/user-panel/profile-settings/#delete-account'
      },
    ],
    userSettings: {
      title: 'ustawienia profilu',
      email: 'adres email',
      phone: 'numer telefonu',
      name: 'imię',
      surname: 'nazwisko',
      button: 'potwierdź zmiany',
      loading: 'aktualizowanie danych',
      popup: {
        title: 'akutalizacja pomyślna',
        messenge: 'twoje dane zostały poprawnie zaktualizowane'
      }
    },
    myCv:{
      title: 'moje cv',
      submitButton: 'potwierdź zmiany',
      name: 'imię',
      surname: 'nazwisko',
      dateOfBirdth: 'data urodzenia',
      email: 'adres email',
      phone: 'numer telefonu',
      city: 'miasto zamieszkania',
      popupOK: {
        title: 'zaktualizowano',
        message: 'twoje cv zostało pomyślnie zaktualizowane'
      },
      popupFail: {
        title: 'wystąpił problem',
        message: 'podczas aktualizacji twojego cv wystąpił błąd - spróbuj poniwnie'
      },
      education: {
        title: 'przebieg edukacji',
        schoolName: 'nazwa szkoły',
        yearOfOrigin :'rok rozpoczęcia',
        yearOfEnd: 'rok zakończenia',
        graduation: 'zdobyty tytuł',
        button: 'dodaj uczelnię'
      },
      experience: {
        title: 'doświadczenie zawodowe',
        employerName: 'nazwa firmy',
        yearOfOrigin: 'rok rozpoczęcia pracy',
        yearOfEnd: 'rok zakończenia pracy',
        position: 'zajmowane stanowisko',
        button: 'dodaj miejse pracy'
      },
      certificates: {
        title: 'certyfikaty / kursy / szkolenia',
        certName: 'nazwa',
        button: 'dodaj certyfikat'
      },
      skills: {
        title: 'umiejętności',
        skill: 'nazwa umiejętności',
        button: 'dodaj nową umiejętność'
      },
      hobbies: {
        title: 'moje zainteresowania',
        hobby: 'nazawa zainteresowania',
        button: 'dodaj zainteresowanie'
      }
    },
    changePassword: {
      title: 'zmień hasło',
      stepOneHeader: 'aby zmienić hasło na nowe podaj najpierw stare',
      stepOneErr: 'błąd autoryzacji użytkownika lub niepoprawne hasło',
      oldPassword: 'stare hasło',
      stepTwoHeader: 'wpisz swoje nowe hasło',
      newPassword: 'nowe hasło',
      stepTwoErrTitle: 'twoje nowe hasło powinno',
      stepTwoErr: [
        'składać się z minimum 8 znaków',
        'zawierać przynajmniej jedną małą literę',
        'zawierać przynajmniej jedną dużą literę',
        'zawierać przynajmniej jedną liczbę',
        'może zawierać znaki: !@#$%^&*?',
      ],
      stepThreeHeader: 'wpisz swoje nowe hasło jeszcze raz',
      reNewPassword: 'powtórz nowe hasło',
      stepThreeErr: 'podane hasło nie jest identyczne',
      stepFourTitle: 'twoje hasło zostało poprawnie zmienione'
    },
    deleteAccount: {
      title: 'usuń konto',
      stepOneTitle: 'Aby usunąć swój profil, podaj swoje aktualne hasło',
      stepTwoTitle: 'Jesteś pewny że chcesz usunąć swój profil w siemaBiz?',
      stepThreeTitle: 'Twoje konto zostało nieodwracalnie usunięte - nastąpi wylogowanie',
      password: 'hasło',
      button: 'potwierdź',
      error: 'podane hasło jest niepoprawne',
      loading: 'sprawdzanie hasła'
    }
  }
}