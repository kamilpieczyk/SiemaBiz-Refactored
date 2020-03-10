export default {
  general: {
    popups: {
      wrong: {
        title: 'oooooops',
        messenge: 'something went wrong - try again later'
      }
    }
  },
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
    somethingWentWrong: 'something went wrong :-(',
    usermenu: [
      {
        title: 'profile settings',
        icon: 'person_pin',
        href: '/user-panel/profile-settings'
      },
      {
        title: 'my cv',
        icon: 'assignment_ind',
        href: '/user-panel/profile-settings/#my-cv'
      },
      {
        title: 'change my password',
        icon: 'build',
        href: '/user-panel/profile-settings/#change-password'
      },
      {
        title: 'delete my account',
        icon: 'delete_sweep',
        href: '/user-panel/profile-settings/#delete-account'
      },
    ]
  },
  userPanel: {
    title: 'user panel',
    submitButton: 'approve changes',
    userSettings: {
      title: 'user profile settings',
      email: 'email address',
      phone: 'phone number',
      name: 'name',
      surname: 'surname',
      button: 'accept changes',
      loading: 'updating data',
      popup: {
        title: 'actualization compled',
        messenge: 'your data has been corectly updated'
      }
    },
    myCv:{
      title: 'my cv',
      name: 'name',
      surname: 'surname',
      dateOfBirdth: 'date of bitdth',
      email: 'email',
      phone: 'phone number',
      city: 'city',
      popupOK: {
        title: 'cv updated',
        message: 'your cv has been succesfully updated'
      },
      popupFail: {
        title: 'cv update error',
        message: 'server has been unable to process you cv query - try again'
      },
      education: {
        title: 'education history',
        schoolName: 'school name',
        yearOfOrigin: 'year of origin',
        yearOfEnd: 'year of graduation',
        graduation: 'graduated title',
        button: 'add school'
      },
      experience: {
        title: 'work experience',
        employerName: 'company name',
        yearOfOrigin: 'the year of job origin',
        yearOfEnd: 'the year of job end',
        position: 'position',
        button: 'add workplace'
      },
      certificates: {
        title: 'certificates / courses / trainings',
        certName: 'title',
        button: 'add certificate'
      },
      skills: {
        title: 'skills',
        skill: 'skill title',
        button: 'add new skill'
      },
      hobbies: {
        title: 'my hobbies',
        hobby: 'hobby name',
        button: 'add hobby'
      }
    },
    changePassword: {
      title: 'zmień hasło'
    }
  }
}