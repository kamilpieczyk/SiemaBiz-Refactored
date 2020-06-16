require('dotenv').config();

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const imageStorage = require('../uploadStorages/articleMainImage');
const companyLogoStorage = require('../uploadStorages/companyLogos');

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
      .then(() => console.log('connected to database'))
      .catch(err => console.log(err));

    const server = http.createServer(app);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors({ origin: '*' }));
    this.getRoutes();
    this.postRoutes();
    this.deleteRoutes();
    server.listen(process.env.PORT, () => {
      console.log(`server run at ${process.env.PORT}`);
    });
  }
  getRoutes() {
    app.get('/test', require('./routes/test'));
    app.get('/get-user-companies/:user', require('./routes/getUserCompaniesList'));
    app.get('/get-user-employers/:user', require('./routes/getUserEmployersList'));
    app.get('/get-company/:company', require('./routes/getCompany'));
    app.get('/search-for-companies/:value', require('./routes/searchForCompanies'));
    app.get('/articles', require('./routes/getArticles'));
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
    app.get('/get-users-list', require('./routes/getCompleteUserList'));
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
    app.post('/add-new-apoitment', require('./routes/addNewApoitment'));
    app.post('/delete-article', require('./routes/deleteArticle'));
    app.post('/get-article', require('./routes/getOneArticle'));
    app.post('/update-article', require('./routes/updateArticle'));
    app.post('/change-cv', require('./routes/change-cv'));
    app.post('/edit-company', require('./routes/editCompany'));
    app.post('/delete-company', require('./routes/deleteCompany'));
    app.post('/get-cv', require('./routes/getCv'));
    app.post('/add-shareholder', require('./routes/addShareholder'));
    app.post('/remove-shareholder', require('./routes/removeShareholder'));
    app.post('/remove-user-from-company', require('./routes/removeUserFromCompany'));
    app.post('/add-job-ad', require('./routes/addJobad'));
    app.post('/edit-job-ad', require('./routes/editJobAd'));
    app.post('/apply-job', require('./routes/applyJob'));
    app.post('/archive-job-ad', require('./routes/archiviseJobAd'));
    app.post('/add-new-coop-offer', require('./routes/addNewCoopAd'));
    app.post('/edit-coop-offer', require('./routes/editCoopAd'));
    app.post('/archivise-cooperation-offer', require('./routes/archiviseCooperationOffer'));
    app.post('/delete-user', require('./routes/deleteUser'));
    app.post('/edit-user', require('./routes/editUser'));
    app.post('/check-password', require('./routes/checkPassword'));
    app.post('/change-password', require('./routes/changePassword'));
    app.post('/edit-user-details', require('./routes/editUserDetails'));
    app.post('/remove-company-from-employees', require('./routes/deleteCompanyFromEmployeesList'));
    app.post('/add-company-to-employers-list', require('./routes/addCompanytoMyEmployersList'));
    app.post('/add-new-article', uploadImages.single('image'), require('./routes/addArticle'));
    app.post('/add-new-company', uploadCompanyLogos.single('logo'), require('./routes/addNewCompany'));
  }
  deleteRoutes() {
    app.delete('/apoitment/:id', require('./routes/deleteApoitment'));
  }
}

module.exports = App;
