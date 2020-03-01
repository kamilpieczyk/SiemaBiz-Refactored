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
    ]
  },
  userPanel: {
    title: 'panel użytkownika',
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
      name: 'imię',
      surname: 'nazwisko',
      dateOfBirdth: 'data urodzenia',
      email: 'adres email',
      phone: 'numer telefonu',
      city: 'miasto zamieszkania'
    }
  }
}