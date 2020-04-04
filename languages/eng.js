export default {
  general: {
    delete: 'delete',
    edit: 'edit',
    yes: 'yes',
    no: 'no',
    popups: {
      wrong: {
        title: 'oooooops',
        messenge: 'something went wrong - try again later'
      }
    },
    uploadForm: {
      dropInformation: 'Drop file/s here ...',
      information: 'Drag & drop some files here, or click to select files',
      button: 'add files'
    },
    categories: {
      topTenTips: 'top ten tips',
      videos: 'videos',
      news: 'news',
      socialMedia: 'social media',
      business: 'business',
      law: 'law',
      technology: 'technology',
      tips: 'tips',
      unitedKingdom: 'united kingdom',
      poland: 'poland',
      general: 'general news',
      all: 'all articles'
    }
  },
  menu: [
    {
      title: "home",
      icon: "home",
      href: "/"
    },
    {
      title: "articles",
      icon: "vertical_split",
      href: "/articles?site=1"
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
        href: '/user-panel/profile-settings',
        priv: '225801'
      },
      {
        title: 'articles',
        icon: 'vertical_split',
        href: '/user-panel/administration-panel?page=articles',
        priv: '225803'
      },
    ]
  },
  userPanel: {
    title: 'user panel',
    adminPanelTitle: 'admin panel',
    submitButton: 'approve changes',
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
    ],
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
      submitButton: 'accept changes',
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
      title: 'zmień hasło',
      stepOneHeader: 'to change password please enter your old one first',
      stepOneErr: 'authorisation fail or wrong password',
      oldPassword: 'old password',
      stepTwoHeader: 'enter your new password',
      newPassword: 'new password',
      stepTwoErrTitle: 'your new password supposed to',
      stepTwoErr: [
        'contain a minimum of 8 characters',
        'include one small letter',
        'include one capital letter',
        'include one number',
        'can contain symbols: !@#$%^&*?',
      ],
      stepThreeHeader: 'enter your new password again',
      reNewPassword: 'retype new password',
      stepThreeErr: 'password doesn\'t match',
      stepFourTitle: 'your password has been correctly changed'
    },
    deleteAccount: {
      title: 'delete account',
      stepOneTitle: 'To delete your account please enter your current password',
      stepTwoTitle: 'Are you sure you want to delete your siemaBiz profile?',
      stepThreeTitle: 'You account has been deleted succesfully - you will be logged out',
      password: 'password',
      button: 'next',
      error: 'entered password is incorrect',
      loading: 'checking your password'
    }
  },
  administrationPanel: {
    menu: [
      {
        title: 'articles list',
        icon: 'list',
        href: '/user-panel/articles'
      },
    ],
  },
  articlesPanel: {
    title: 'articles panel',
    addButton: 'add new article',
    articlesList: {
      title: 'articles list',
      deleteQuestion: 'are you sure you would like to delete this article?'
    },
    articleEditor: {
      newArticleTitle: '*new empty article',
      articleTitleTop: '*article',
      mainImageHeader: 'add main image to this article',
      articleCategory: 'select category',
      articleTitle: 'article title',
      articleIntroduction: 'introduction to article',
      acceptButton: 'add article',
      updateButton: 'update',
      loading: 'sending article',
      imageError: 'main image is required',
      articleTitleError: 'article title is required',
      articleIntroError: 'introduction is required',
      saveButton: 'save copy',
      loadButton: 'load copy',
      savePopup: {
        title: 'saved',
        message: 'your copy has been saved on your local memory. It will stay there until you publish article'
      },
      uploadForm: {
        drop: 'drop image here ...',
        information: 'drag & drop image here, or click to choose',
        dropedOk: 'image added',
        warn: 'file is too big or extension is not .jpg',
      },
      sections:{
        acapit:{
          title: 'new paragraph title ( not required )',
          content: 'paragraph content'
        },
        image: {
          title: 'image title',
          content: 'paste image url'
        },
        link: {
          title: 'hyperlink',
          content: 'link url'
        },
        video: {
          title: 'video title',
          content: 'youtube clip id'
        }
      },
      sectionTypes: {
        acapit: 'add paragraph',
        image: 'add image',
        link: 'add link',
        video: 'add video'
      }
    }
  },
  articlesPage: {
    title: 'articles',
    button: 'read',
    buttonVideo: 'watch video',
  }
}