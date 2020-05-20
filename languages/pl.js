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
    },
    categories: {
      topTenTips: 'top 10 porad',
      videos: 'filmy',
      news: 'newsy',
      socialMedia: 'social media',
      business: 'biznes',
      law: 'prawo',
      technology: 'technologia',
      tips: 'porady',
      unitedKingdom: 'wileka brytania',
      poland: 'polska',
      general: 'tematyka ogólna',
      all: 'wszystkie'
    },
    industries: {
      softwareDevelopment: 'produkcja oprogramowania',
      it: 'IT',
      constructionIndustry: 'branża budowlana',
      transport: 'transport',
      automotive: 'motoryzacja',
      trade: 'handel',
      manufacturing: 'branża produkcyjna',
      banking: 'bankowość / ekonomia',
      education: 'edukacja',
      eletricUtilities: 'elektryka',
      farming: 'agrokultura',
      healthServices: 'medycyna',
      beauty: 'uroda',
      law: 'prawo',
      foodIndustry: 'gastronomia',
      other: 'inna'
    }
  },
  menu: [
    {
      title: "strona główna",
      icon: "home",
      href: "/"
    },
    {
      title: "artykuły",
      icon: "vertical_split",
      href: "/articles?site=1"
    },
    {
      title: "katalog firm",
      icon: "import_contacts",
      href: "/companies-cathalogue?site=1"
    },
    {
      title: "oferty współpracy",
      icon: "business_center",
      href: "/cooperation"
    },
    {
      title: "oferty pracy",
      icon: "next_week",
      href: "/job-offers?site=1"
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
      {
        title: 'zarządzaj moimi firmami',
        icon: 'business_center',
        href: '/user-panel/administration-panel?page=company',
        priv: '225801'
      },
    ]
  },
  indexPage:{
    searchBoxTitle: 'wyszukaj w katalogu firm'
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
    articleList: 'lista artykułów',
    companyManagement: 'zarządaj moimi firmami',
  },
  companyPanel: {
    addCompanyButton: 'dodaj firmę',
    searchForCompanyButton: 'wyszukaj firmę',
    manageEmployeeButton: 'zarządzaj pracownikami',
    employeeList: 'lista pracowników',
    owners: 'zarząd firmy',
    removeOwner: 'usuń z listy wspólników',
    addOwner: 'dodaj do listy wspólników',
    deleteFromCompany: 'usuń z firmy',
    deleteCompanyQuestion: ( company ) => `jesteś pewny/a że chcesz usunąć firmę ${ company }?`,
    deleteCompany: 'usuń firmę',
    editCompany: 'edytuj informacje',
    cancel: 'anuluj',
    deletingCompany: 'czekaj, trwa usuwanie firmy...',
    manageJobAds: 'zarządzaj ogłoszeniami pracy',
    manageCooperationAds: 'zarządzaj ofertami współpracy',
    fold: 'zwiń',
    nothingToShow: 'brak treści do wyświetlenia',
    cv: 'przeglądaj aplikacjie',
    edit: 'edytuj ogłoszenie',
    archivise: 'przenieś do archiwum',
    archiviseQuestion: 'jesteś pewien, że chcesz archiwizować to ogłoszenie?',
    isLoadingArchivise: '...trwa archiwizowanie',
    addNewJobAd: 'dodaj nowe ogłoszenie',
    newJobAd:{
      title: 'tytuł ogłoszenia pracy',
      city: 'miejsce pracy',
      hours: 'zakres godzinowy',
      salary: 'wynagrodzenie',
      industry: 'branża',
      duties: 'obowiązki (oddzielone przecinkiem)',
      requirements: 'wymagania (oddzielone przecinkiem)',
      description: 'treść ogłoszenia',
      addButton: 'dodaj ogłoszenie',
      submitEditButton: 'potwierdź zmiany',
      loading: 'wysyłanie...'
    },
    cvWindow: {
      loading: 'wczytywanie przesłanych aplikacji...',
      noApplications: 'brak aplikacji do wyświetlenia',
      experience: 'doświadczenie zawodowe',
      education: 'przebieg edukacji',
      schoolName: 'nazwa szkoły',
      graduation: 'zdobyte wykształcenie',
      company: 'nazwa firmy',
      years: 'lata',
      role: 'powierzone stanowisko',
      dateOfBirdth: 'data urodzenia',
      city: 'miasto',
      adress: 'adres',
      phone: 'numer telefonu',
      email: 'adres email',
      certificates: 'certyfikaty',
      skills: 'umiejętności',
      hobbies: 'hobby',
      back: 'poprzednia aplikacja',
      forward: 'następna aplikacja',
      print: 'drukuj cv'
    },
    addNewCompanyWindow: {
      dropHere: 'upuść plik tutaj',
      drag: 'przeciągnij plik z obrazem tutaj lub kliknij by dodać',
      isFile: 'logo dodane prawidłowo',
      fileToBig: {
        title: 'zbyt duży rozmiar',
        message: 'rozmiar twojego pliku nie może być większy niż 2.5MB'
      },
      wrongType: {
        title: 'niepoprawny typ pliku',
        message: 'plik loga musi byc zgodny z formatem jpg'
      },
      companyName: 'nazwa firmy',
      adress: 'adres firmy',
      city: 'miasto',
      industry: 'branża firmy',
      description: 'opis działalności firmy',
      loading: 'dodaję firmę',
      sendButton: 'dodaj firmę',
      updateButton: 'aktualizuj informacje',
      mustHaveName:{
        title: 'firma musi mieć nazwę!',
        msg: 'nie podałeś nazwy twojej nowej firmy'
      },
      mustHaveAdress:{
        title: 'firma musi mieć siedzibę',
        msg: 'nie podałeś adresu twojej nowej firmy - każda firma musi mieć siedzibę'
      },
      mustHaveCity:{
        title: 'musisz podać miasto',
        msg: 'nie podałeś miasta w którym znajduję się siedziba firmy'
      },
      mustHaveDescription:{
        title: 'musisz podać opis firmy',
        msg: 'pomóż zainteresowanym dowiedzieć się czym zajmuje się twoja firma'
      },
      mustHaveLogo:{
        title: 'musisz przesłać plik z logo',
        msg: 'każda firma musi posiadać znak handlowy'
      },
      addingErr:{
        title: 'wystąpił nieoczekiwany błąd',
        msg: 'spróbuj ponownie później'
      },
    }
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
      articleCategory: 'wybierz kategorię',
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
          content: 'podaj id filmu z serwisu youtube.com'
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
  articlesPage: {
    title: 'artykuły',
    button: 'czytaj',
    buttonVideo: 'oglądaj video',
  },
  cathalogueSite: {
    button: 'zobacz firmę',
    industry: 'branża',
    noSearchResults: 'brak wyników wyszukiwania',
    nothingToshow: 'brak firm w tej branży'
  },
  companySite: {
    company: 'firma',
    industry: 'branża',
    adress: 'adres',
    city: 'miasto',
    phone: 'telefon kontaktowy',
    website: 'strona internetowa',
    owners: 'zarząd firmy',
    employees: 'zatrudnieni pracownicy',
    loading: 'wczytywanie mapy...',
    button: 'zobacz opis',
    workForThisCompanyButton: 'pracuję w tej firmie',
    deleteFromMyEmployers: 'usuń z listy moich pracodawców'
  },
  jobOffersSite: {
    siteTitle: 'oferty pracy',
    searchInputTitle: 'czego szukasz',
    searchInputSubtitle: 'nazwa poszukiwanego stanowiska',
    localisationInputTitle: 'gdzie szukasz',
    localisationInputSubtitle: 'miejscowość w której szukasz',
    seeOfferButton: 'przeglądaj ofertę',
    new: 'nowe ogłoszenie',
    sortBy: 'sortuj według',
    date: 'daty',
    title: 'tytułu ogłoszenia'
  }
}