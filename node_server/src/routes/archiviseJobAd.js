const jobAdModel = require( "../../models/jobAdModel" )
const JobAdArchiveModel = require( "../../models/jobAdArchive" )

module.exports = async( req, res ) => {
    const { id } = req.body

    const deletedAd = await jobAdModel.findOneAndDelete( { _id: id } )
    const archiveItem = new JobAdArchiveModel( {
        title: deletedAd.title,
        city: deletedAd.city,
        hours: deletedAd.hours,
        wages: deletedAd.wages,
        industry: deletedAd.industry,
        duties: deletedAd.duties,
        requirements: deletedAd.requirements,
        description: deletedAd.description,
        company: deletedAd.company,
        applications: deletedAd.applications
    } )
    const result = await archiveItem.save()

    if( result ){
        res.status( 200 )
        res.json( {
            status: "ok"
        } )
    }
    else{
        res.status( 200 )
        res.json( {
            status: "failure"
        } )
    }
}