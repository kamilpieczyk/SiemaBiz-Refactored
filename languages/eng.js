export default {
  menu: [
    {
      title: "home",
      icon: "home",
      href: "/"
    },
    {
      title: "who we are?",
      icon: "not_listed_location",
      href: "/about"
    },
    {
      title: "companies cathalog",
      icon: "import_contacts",
      href: "/cathalog"
    },
    {
      title: "cooperation offers",
      icon: "business_center",
      href: "/cooperation"
    },
    {
      title: "job offers",
      icon: "next_week",
      href: "/job"
    },
    {
      title: "book an apoitment",
      icon: "insert_invitation",
      href: "/makeapoitment"
    },
    {
      title: "contact us",
      icon: "contact_mail",
      href: "/contacts"
    }
  ],
  navbar: {
    signUp: 'sign-up',
    signIn: 'sign-in',
    logout: 'logout',
    login: 'username',
    password: 'password',
    submit: 'sign in',
    loading: 'logging in progress',
    userNotExist: 'this user doesn\'t exist',
    wrongPassword: 'this password is incorrect',
    somethingWentWrong: 'semething went wrong :-(',
    usermenu: [
      {
        title: 'profile settings',
        href: '/user-panel/profile-settings'
      },
      {
        title: 'my cv',
        href: '/user-panel/my-cv'
      },
      {
        title: 'change password',
        href: '/user-panel/change-password'
      },
      {
        title: 'remove my profile',
        href: '/user-panel/delete-account'
      },
    ]
  }
}