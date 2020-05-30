const CoopModel = require('../../models/coopAd.model');
const ArchiveCoopModel = require('../../models/coopAdArchive.model');
const date = require('../components/getDate');

module.exports = async( req, res ) => {
  const { id } = req.body;
  const deletedItem = await CoopModel.findOneAndDelete({ _id: id });
  if (deletedItem) {
    const itemToArchivise = new ArchiveCoopModel({
      title: deletedItem.title,
      content: deletedItem.content,
      company: deletedItem.company,
      date: deletedItem.date,
      archiveDate: date(),
      industry: deletedItem.industry,
    });
    if (itemToArchivise) {
      res.status(200).json({
        status: 'ok'
      })
    }
    else {
      res.status(500).json({
        status: 'error'
      })
    }
  }
  else {
    res.status(500).json({
      status: 'error'
    })
  }
}