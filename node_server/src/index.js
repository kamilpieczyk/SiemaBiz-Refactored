require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const imageStorage = require('../uploadStorages/articleMainImage');
const companyLogoStorage = require('../uploadStorages/companyLogos');
const authorise = require('./middleware/authorise');
const checkPrivilleges = require('./middleware/check-auth-code');
const privilegesList = require('./components/privileges');

const app = express();

// uploads storage settings
const uploadImages = multer({
  storage: imageStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
});
const uploadCompanyLogos = multer({
  storage: companyLogoStorage,
  limits: { fileSize: 2 * 1024 * 1024 },
});

class App {
  constructor(handle) {
    this.handle = handle;
    mongoose
      .connect(process.env.DB_URI, { useNewUrlParser: true })
      .then(() => console.log('💽 connected to database'))
      .catch(err => console.log(err));

    const server = http.createServer(app);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ origin: '*', allowedHeaders: 'Content-Type, Authorisation' }));
    app.use(authorise);
    this.getRoutes();
    this.postRoutes();
    this.deleteRoutes();
    server.listen(process.env.PORT, () => {
      console.log(`server run at ⚓${process.env.PORT}`);
    });
    this.tasks();
  }
  getRoutes() {
    app.get('/test', require('./routes/test'));
    app.get('/get-user-companies/:user', require('./routes/getUserCompaniesList'));
    app.get('/get-user-employers/:user', require('./routes/getUserEmployersList'));
    app.get('/get-company/:company', require('./routes/getCompany'));
    app.get('/search-for-companies/:value', require('./routes/searchForCompanies'));
    app.get('/articles', require('./routes/getArticles'));
    app.get('/article/:id', require('./routes/getArticle'));
    app.get('/get-apoitments', require('./routes/getApoitments'));
    app.get('/uploads/images/:id', require('./routes/getImage'));
    app.get('/uploads/logos/:id', require('./routes/getCompanyLogo'));
    app.get('/articles/shorts', require('./routes/getArticlesShorts'));
    app.get('/check-company-name-if-exist/:company', require('./routes/checkCompanyNameIfExist'));
    app.get('/get-job-ads/:id', require('./routes/getJobAds'));
    app.get('/get-job-ad/:id', require('./routes/getJobAd'));
    app.get('/get-coop-offers/:company', require('./routes/getCompaniesCoopAds'));
    app.get('/get-coop-offers', require('./routes/getCooperationOffers'));
    app.get('/get-coop-offer/:id', require('./routes/getCooperationAd'));
    app.get('/get-privileges/:privileges', require('./routes/getPrivileges'));
    app.get('/get-companies-by-industry/:industry', require('./routes/getCompaniesByIndustry'));
    app.get('/get-companies', require('./routes/getCompanies'));
    app.get('/get-all-job-offers/:industry?', require('./routes/getAllJobOffers'));

    app.get('*', this.handle);
  }
  postRoutes() {
    app.post('/authorisation', require('./routes/auth'));
    app.post('/register', require('./routes/register'));
    app.post('/login', require('./routes/login'));
    app.post('/logout', require('./routes/logout'));
    app.post(
      '/get-users-list',
      checkPrivilleges(privilegesList.admin),
      require('./routes/getCompleteUserList')
    );
    app.post(
      '/add-new-apoitment',
      checkPrivilleges(privilegesList.admin),
      require('./routes/addNewApoitment')
    );
    app.post('/delete-article', checkPrivilleges(privilegesList.redactor), require('./routes/deleteArticle'));
    app.post('/get-article', require('./routes/getOneArticle'));
    app.post('/update-article', checkPrivilleges(privilegesList.redactor), require('./routes/updateArticle'));
    app.post('/change-cv', checkPrivilleges(privilegesList.user), require('./routes/change-cv'));
    app.post('/edit-company', checkPrivilleges(privilegesList.user), require('./routes/editCompany'));
    app.post('/delete-company', checkPrivilleges(privilegesList.user), require('./routes/deleteCompany'));
    app.post('/get-cv', checkPrivilleges(privilegesList.user), require('./routes/getCv'));
    app.post('/add-shareholder', checkPrivilleges(privilegesList.user), require('./routes/addShareholder'));
    app.post(
      '/remove-shareholder',
      checkPrivilleges(privilegesList.user),
      require('./routes/removeShareholder')
    );
    app.post(
      '/remove-user-from-company',
      checkPrivilleges(privilegesList.user),
      require('./routes/removeUserFromCompany')
    );
    app.post('/add-job-ad', checkPrivilleges(privilegesList.user), require('./routes/addJobad'));
    app.post('/edit-job-ad', checkPrivilleges(privilegesList.user), require('./routes/editJobAd'));
    app.post('/apply-job', checkPrivilleges(privilegesList.user), require('./routes/applyJob'));
    app.post('/archive-job-ad', checkPrivilleges(privilegesList.user), require('./routes/archiviseJobAd'));
    app.post('/add-new-coop-offer', checkPrivilleges(privilegesList.user), require('./routes/addNewCoopAd'));
    app.post('/edit-coop-offer', checkPrivilleges(privilegesList.user), require('./routes/editCoopAd'));
    app.post(
      '/archivise-cooperation-offer',
      checkPrivilleges(privilegesList.user),
      require('./routes/archiviseCooperationOffer')
    );
    app.post('/delete-user', checkPrivilleges(privilegesList.user), require('./routes/deleteUser'));
    app.post('/edit-user', checkPrivilleges(privilegesList.user), require('./routes/editUser'));
    app.post('/check-password', checkPrivilleges(privilegesList.user), require('./routes/checkPassword'));
    app.post('/change-password', checkPrivilleges(privilegesList.user), require('./routes/changePassword'));
    app.post(
      '/edit-user-details',
      checkPrivilleges(privilegesList.user),
      require('./routes/editUserDetails')
    );
    app.post(
      '/remove-company-from-employees',
      checkPrivilleges(privilegesList.user),
      require('./routes/deleteCompanyFromEmployeesList')
    );
    app.post(
      '/add-company-to-employers-list',
      checkPrivilleges(privilegesList.user),
      require('./routes/addCompanytoMyEmployersList')
    );
    app.post(
      '/book-an-appointment',
      checkPrivilleges(privilegesList.user),
      require('./routes/bookAppointment')
    );
    app.post('/send-contact-email', require('./routes/sendContactEmail'));
    app.post('/add-new-article', uploadImages.single('image'), require('./routes/addArticle'));
    app.post('/add-new-company', uploadCompanyLogos.single('logo'), require('./routes/addNewCompany'));
  }
  deleteRoutes() {
    app.delete('/apoitment/:id', require('./routes/deleteApoitment'));
  }
  tasks() {
    require('./components/removeOutdatedAppointments.schedule');
  }
}

module.exports = App;
