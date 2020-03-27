export default {
  general: {
    delete: 'usuń',
    edit: 'edytuj',
    yes: 'tak',
    no: 'nie',
    popups: {
      wrong: {
        title: 'uuups',
        messenge: 'coś poszło nie tak - spróbuj ponownie później'
      }
    },
    uploadForm: {
      dropInformation: 'upuść plik/i tutaj ...',
      information: 'przeciągnij pliki tutaj, lub kliknij by wybrać',
      button: 'wybierz pliki'
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
        href: '/user-panel/administration-panel?page=articles',
        priv: '225803'
      },
    ]
  },
  userPanel: {
    title: 'panel użytkownika',
    adminPanelTitle: 'panel administracyjny',
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
  },
  administrationPanel: {
    menu: [
      {
        title: 'lista artykułów',
        icon: 'list',
        href: '/user-panel/articles'
      },
    ],
  },
  articlesPanel: {
    title: 'panel artykułów',
    addButton: 'dodaj nowy artykuł',
    articlesList: {
      title: 'lista artykułów',
      deleteQuestion: 'jesteś absolutnie pewien że chcesz usunąć ten artykuł?'
    },
    articleEditor: {
      newArticleTitle: '*nowy pusty artykuł',
      articleTitleTop: '*artykuł',
      mainImageHeader: 'Dodaj główny obraz dla tego artykułu',
      articleTitle: 'tytuł artykułu',
      articleIntroduction: 'wstęp do artykułu',
      acceptButton: 'dodaj artykuł',
      updateButton: 'aktualizuj',
      loading: 'wysyłanie artykułu',
      imageError: 'obraz główny jest wymagany',
      articleTitleError: 'tytuł artykułu jest wymagany',
      articleIntroError: 'wstęp do artykułu jest wymagany',
      saveButton: 'zapisz kopię',
      loadButton: 'wczytaj kopię',
      savePopup: {
        title: 'zapisano',
        message: 'twoja kopia została zapisana na twoim komputerze i pozostanie tam do czasu opublikowania artykułu'
      },
      uploadForm: {
        drop: 'upuść obraz tutaj ...',
        information: 'przeciągnij plik z obrazem tutaj, lub kliknij by wybrać',
        dropedOk: 'umieszczono plik obrazu',
        warn: 'umieszczony plik jest zbyt duży lub format nie jest zgodny z .jpg',
      },
      sections:{
        acapit:{
          title: 'tytuł nowego akapitu (nieobowiązkowe)',
          content: 'treść akapitu'
        },
        image: {
          title: 'opis pod obrazem',
          content: 'podaj url obrazu'
        },
        link: {
          title: 'tytuł odnośnika',
          content: 'adres odnośnika'
        },
        video: {
          title: 'tytuł filmu',
          content: 'link do filmu w serwisie youtube'
        }
      },
      sectionTypes: {
        acapit: 'dodaj akapit',
        image: 'dodaj obraz',
        link: 'dodaj odnośnik',
        video: 'dodaj video'
      }
    }
  },
}